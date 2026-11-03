"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Plus, Minus, RotateCcw } from "lucide-react";

// Central Approved Color Constants
export const GLOBE_COLOR = "#091426";
export const HIGHLIGHT_COLOR = "#F1F5FB";

export interface NetworkHub {
  id: string;
  name: string;
  region: "us" | "ca" | "eu" | "asia";
  country: string;
  subtitle: string;
  role: string;
  lat: number;
  lng: number;
  isPrimary?: boolean;
}

export const NETWORK_HUBS: NetworkHub[] = [
  {
    id: "london",
    name: "London",
    region: "eu",
    country: "United Kingdom",
    subtitle: "European Financial Centre",
    role: "Cross-Border Advisory Hub",
    lat: 51.5074,
    lng: -0.1278,
    isPrimary: true,
  },
  {
    id: "newyork",
    name: "New York",
    region: "us",
    country: "United States",
    subtitle: "Americas Capital Hub",
    role: "Institutional & Equity Markets",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "toronto",
    name: "Toronto",
    region: "ca",
    country: "Canada",
    subtitle: "Natural Resources & Mining Hub",
    role: "Venture & Growth Capital",
    lat: 43.6532,
    lng: -79.3832,
  },
  {
    id: "vancouver",
    name: "Vancouver",
    region: "ca",
    country: "Canada",
    subtitle: "Resource Venture Gateway",
    role: "Mining Exploration & Venture Capital",
    lat: 49.2827,
    lng: -123.1207,
  },
  {
    id: "zurich",
    name: "Zurich",
    region: "eu",
    country: "Switzerland",
    subtitle: "Private Wealth & Advisory",
    role: "European Family Offices & Institutions",
    lat: 47.3769,
    lng: 8.5417,
  },
  {
    id: "dubai",
    name: "Dubai",
    region: "asia",
    country: "United Arab Emirates",
    subtitle: "Middle East Capital Nexus",
    role: "Sovereign & Regional Capital",
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "asia",
    country: "Singapore",
    subtitle: "Asia-Pacific Gateway",
    role: "Institutional Wealth & Fund Management",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    region: "asia",
    country: "China",
    subtitle: "Asian Financial Centre",
    role: "Cross-Border Capital & Market Access",
    lat: 22.3193,
    lng: 114.1694,
  },
];

const CONNECTIONS: [string, string][] = [
  ["london", "newyork"],
  ["london", "toronto"],
  ["london", "zurich"],
  ["london", "dubai"],
  ["newyork", "toronto"],
  ["newyork", "vancouver"],
  ["dubai", "singapore"],
  ["singapore", "hongkong"],
  ["london", "singapore"],
];

const GLOBE_RADIUS = 1.8;
const BASE_FOV = 38;

// Clean configuration of target coordinates for each region
export const REGION_TARGETS: Record<string, { lat: number; lng: number }> = {
  us: { lat: 39.0, lng: -96.0 }, // Center of USA / North America
  ca: { lat: 54.0, lng: -98.0 }, // Center of Canada
  eu: { lat: 50.0, lng: 14.0 },  // Center of Europe
  asia: { lat: 26.0, lng: 65.0 }, // Center of Middle East & Asia
  "United States": { lat: 39.0, lng: -96.0 },
  Canada: { lat: 54.0, lng: -98.0 },
  Europe: { lat: 50.0, lng: 14.0 },
  "Asia & Middle East": { lat: 26.0, lng: 65.0 },
};

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createCurvedRoute(p1: THREE.Vector3, p2: THREE.Vector3, numPoints = 50): THREE.Vector3[] {
  const distance = p1.distanceTo(p2);
  const elevation = Math.min(0.55, distance * 0.16);
  const mid = p1.clone().add(p2).multiplyScalar(0.5);
  mid.normalize().multiplyScalar(GLOBE_RADIUS + elevation);

  const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
  return curve.getPoints(numPoints);
}

interface InteractiveGlobeProps {
  activeRegionId: string;
  activeHubId: string;
  onSelectHub: (hub: NetworkHub) => void;
}

export const InteractiveGlobe: React.FC<InteractiveGlobeProps> = ({
  activeRegionId,
  activeHubId,
  onSelectHub,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [markerScreenPositions, setMarkerScreenPositions] = useState<
    Array<{
      hub: NetworkHub;
      x: number;
      y: number;
      visible: boolean;
      opacity: number;
    }>
  >([]);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);

  // Mesh and Material references for smooth 300ms texture crossfade
  const baseSphereMeshRef = useRef<THREE.Mesh | null>(null);
  const fadeSphereMeshRef = useRef<THREE.Mesh | null>(null);
  const textureCacheRef = useRef<Map<string, THREE.Texture>>(new Map());
  const fadeProgressRef = useRef<number>(1);
  const targetTextureRef = useRef<THREE.Texture | null>(null);

  // Rotation State: Initial view stationary centered on Europe & Atlantic
  // NO AUTOMATIC ROTATION: stays completely still unless manually dragged
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.22, y: -0.75 });
  const currentRotationRef = useRef({ x: 0.22, y: -0.75 });
  const velocityRef = useRef({ x: 0, y: 0 });

  // Camera Zoom Distance State
  const baseDistanceRef = useRef(6.8);
  const userZoomOffsetRef = useRef(0);
  const targetCameraZRef = useRef(6.8);
  const currentCameraZRef = useRef(6.8);

  const calculateCameraDistance = useCallback((w: number, h: number) => {
    const aspect = w / h;
    const tanHalfFov = Math.tan((BASE_FOV * Math.PI) / 360);
    const targetProportion = 0.74;
    const minAspectFactor = Math.min(1, aspect);
    const requiredDistance = (GLOBE_RADIUS * 2) / (targetProportion * 2 * tanHalfFov * minAspectFactor);
    baseDistanceRef.current = requiredDistance;
    targetCameraZRef.current = requiredDistance + userZoomOffsetRef.current;
  }, []);

  // Function to smoothly interpolate globe rotation toward target coordinates
  const focusGlobeOnRegion = useCallback((target: { lat: number; lng: number }) => {
    const targetY = -(target.lng * (Math.PI / 180)) - Math.PI / 2;
    const targetX = Math.max(-0.6, Math.min(0.6, target.lat * (Math.PI / 180) * 0.55));

    // Compute shortest angular distance so rotation is direct, smooth and natural
    const currentY = currentRotationRef.current.y;
    const deltaY = ((targetY - currentY + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

    velocityRef.current = { x: 0, y: 0 };
    targetRotationRef.current = {
      x: targetX,
      y: currentY + deltaY,
    };
  }, []);

  // When a user selects any region or city hub, automatically rotate to focus on it
  useEffect(() => {
    const hub = NETWORK_HUBS.find((h) => h.id === activeHubId);
    if (hub && hub.region === activeRegionId) {
      focusGlobeOnRegion({ lat: hub.lat, lng: hub.lng });
    } else if (REGION_TARGETS[activeRegionId]) {
      focusGlobeOnRegion(REGION_TARGETS[activeRegionId]);
    }
  }, [activeRegionId, activeHubId, focusGlobeOnRegion]);

  // Smoothly crossfade geographic region texture over 300ms
  useEffect(() => {
    const fadeMesh = fadeSphereMeshRef.current;
    if (!fadeMesh) return;

    const cache = textureCacheRef.current;
    const regionKey = activeRegionId || "eu";

    const applyFade = (newTex: THREE.Texture) => {
      targetTextureRef.current = newTex;
      const fadeMat = fadeMesh.material as THREE.MeshStandardMaterial;
      fadeMat.map = newTex;
      fadeMat.opacity = 0;
      fadeMat.needsUpdate = true;
      fadeProgressRef.current = 0; // Trigger 300ms smooth crossfade
    };

    if (cache.has(regionKey)) {
      applyFade(cache.get(regionKey)!);
    } else {
      const loader = new THREE.TextureLoader();
      loader.load(`/images/globe-region-${regionKey}.webp`, (t) => {
        t.generateMipmaps = true;
        t.minFilter = THREE.LinearMipmapLinearFilter;
        t.anisotropy = 4;
        cache.set(regionKey, t);
        applyFade(t);
      });
    }
  }, [activeRegionId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(BASE_FOV, width / height, 0.1, 100);
    calculateCameraDistance(width, height);
    camera.position.z = targetCameraZRef.current;
    currentCameraZRef.current = targetCameraZRef.current;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Subtle, balanced lighting preserving accurate #091426 and #F1F5FB values
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight1.position.set(5, 5, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x244a80, 0.4);
    dirLight2.position.set(-5, -2, -4);
    scene.add(dirLight2);

    // Preload & set initial region texture
    const textureLoader = new THREE.TextureLoader();
    const initialRegion = activeRegionId || "eu";
    const initialTex = textureLoader.load(`/images/globe-region-${initialRegion}.webp`, (t) => {
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.anisotropy = 4;
      textureCacheRef.current.set(initialRegion, t);
      renderer.render(scene, camera);
    });

    // Base Sphere Mesh
    const sphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const baseMaterial = new THREE.MeshStandardMaterial({
      map: initialTex,
      roughness: 0.75,
      metalness: 0.05,
    });
    const baseSphereMesh = new THREE.Mesh(sphereGeometry, baseMaterial);
    baseSphereMeshRef.current = baseSphereMesh;
    globeGroup.add(baseSphereMesh);

    // Fade Overlay Mesh for 300ms Region Selection Transition
    const fadeMaterial = new THREE.MeshStandardMaterial({
      map: initialTex,
      roughness: 0.75,
      metalness: 0.05,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const fadeSphereMesh = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS * 1.0005, 64, 64),
      fadeMaterial
    );
    fadeSphereMeshRef.current = fadeSphereMesh;
    globeGroup.add(fadeSphereMesh);

    // Subtle Navy Rim Glow
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.02, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(0.09, 0.22, 0.42, intensity * 0.45);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // Connection Routes in Muted Gold (restrained so they don't break up highlight)
    const hubMap = new Map<string, THREE.Vector3>();
    NETWORK_HUBS.forEach((hub) => {
      hubMap.set(hub.id, latLngToVector3(hub.lat, hub.lng, GLOBE_RADIUS));
    });

    CONNECTIONS.forEach(([fromId, toId]) => {
      const p1 = hubMap.get(fromId);
      const p2 = hubMap.get(toId);
      if (!p1 || !p2) return;

      const curvePoints = createCurvedRoute(p1, p2, 60);
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);

      const material = new THREE.LineBasicMaterial({
        color: 0xb99a5e,
        transparent: true,
        opacity: 0.55,
        linewidth: 1,
      });

      const line = new THREE.Line(geometry, material);
      globeGroup.add(line);
    });

    // Location Markers on Sphere
    NETWORK_HUBS.forEach((hub) => {
      const pos = hubMap.get(hub.id);
      if (!pos) return;

      const dotGeo = new THREE.SphereGeometry(0.024, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: hub.isPrimary ? 0xb99a5e : 0xf1f5fb,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos.clone().multiplyScalar(1.008));
      globeGroup.add(dot);

      const ringGeo = new THREE.RingGeometry(0.032, 0.042, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: hub.isPrimary ? 0xb99a5e : 0x4a72a5,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos.clone().multiplyScalar(1.012));
      ring.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(ring);
    });

    // Animation Loop — ZERO AUTOMATIC ROTATION
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Smooth 300ms crossfade transition between region textures
      if (fadeProgressRef.current < 1 && fadeSphereMeshRef.current && baseSphereMeshRef.current) {
        fadeProgressRef.current = Math.min(1, fadeProgressRef.current + delta / 0.3);
        const fadeMat = fadeSphereMeshRef.current.material as THREE.MeshStandardMaterial;
        fadeMat.opacity = fadeProgressRef.current;

        if (fadeProgressRef.current >= 1 && targetTextureRef.current) {
          const baseMat = baseSphereMeshRef.current.material as THREE.MeshStandardMaterial;
          baseMat.map = targetTextureRef.current;
          baseMat.needsUpdate = true;
          fadeMat.opacity = 0;
        }
      }

      // Smooth camera distance interpolation
      currentCameraZRef.current += (targetCameraZRef.current - currentCameraZRef.current) * 0.1;
      camera.position.z = currentCameraZRef.current;

      // Inertia damping ONLY when user manually drags and releases
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current.x) > 0.00005 || Math.abs(velocityRef.current.y) > 0.00005) {
          targetRotationRef.current.x += velocityRef.current.x;
          targetRotationRef.current.y += velocityRef.current.y;
          velocityRef.current.x *= 0.92;
          velocityRef.current.y *= 0.92;
        } else {
          velocityRef.current.x = 0;
          velocityRef.current.y = 0;
        }
      }

      targetRotationRef.current.x = Math.max(-0.6, Math.min(0.6, targetRotationRef.current.x));

      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.x = currentRotationRef.current.x;
        globeGroupRef.current.rotation.y = currentRotationRef.current.y;
      }

      renderer.render(scene, camera);

      // Project 3D markers to 2D HTML space
      if (container && globeGroupRef.current) {
        const rect = container.getBoundingClientRect();
        const positions = NETWORK_HUBS.map((hub) => {
          const originalPos = hubMap.get(hub.id) || new THREE.Vector3();
          const worldPos = originalPos.clone().applyEuler(globeGroupRef.current!.rotation);

          const camDir = camera.position.clone().normalize();
          const normal = worldPos.clone().normalize();
          const dot = normal.dot(camDir);

          const screenPos = worldPos.clone().project(camera);
          const x = ((screenPos.x + 1) * rect.width) / 2;
          const y = ((-screenPos.y + 1) * rect.height) / 2;

          const visible = dot > 0.02;
          const opacity = Math.max(0, Math.min(1, (dot - 0.02) / 0.3));

          return {
            hub,
            x,
            y,
            visible,
            opacity,
          };
        });

        setMarkerScreenPositions(positions);
      }
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      calculateCameraDistance(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
    };
  }, [calculateCameraDistance]);

  // Pointer / Drag Handlers (100% Manual User Control)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    const rotSpeed = 0.005;
    targetRotationRef.current.y += deltaX * rotSpeed;
    targetRotationRef.current.x += deltaY * rotSpeed;

    velocityRef.current = {
      x: deltaY * rotSpeed * 0.4,
      y: deltaX * rotSpeed * 0.4,
    };

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const zoomIn = () => {
    userZoomOffsetRef.current = Math.max(-1.4, userZoomOffsetRef.current - 0.5);
    targetCameraZRef.current = baseDistanceRef.current + userZoomOffsetRef.current;
  };

  const zoomOut = () => {
    userZoomOffsetRef.current = Math.min(1.8, userZoomOffsetRef.current + 0.5);
    targetCameraZRef.current = baseDistanceRef.current + userZoomOffsetRef.current;
  };

  const resetView = () => {
    userZoomOffsetRef.current = 0;
    targetCameraZRef.current = baseDistanceRef.current;
    targetRotationRef.current = { x: 0.22, y: -0.75 };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Subtle Blue Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[420px] lg:w-[500px] h-[300px] sm:h-[420px] lg:h-[500px] rounded-full border border-[#244A80]/10" />
        <div className="absolute w-[420px] sm:w-[560px] lg:w-[660px] h-[420px] sm:h-[560px] lg:h-[660px] rounded-full border border-[#244A80]/6" />
        <div className="absolute w-[540px] sm:w-[700px] lg:w-[820px] h-[540px] sm:h-[700px] lg:h-[820px] rounded-full border border-[#244A80]/4" />
      </div>

      {/* 3D WebGL Canvas Mount Container */}
      <div
        ref={mountRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none relative z-10 flex items-center justify-center"
        style={{ touchAction: "none" }}
      />

      {/* Clean, Small, High-Contrast City Labels */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {markerScreenPositions.map(({ hub, x, y, visible, opacity }) => {
          if (!visible || opacity < 0.08) return null;

          const isActive = hub.id === activeHubId;
          const isPrimary = hub.isPrimary;
          const isOverHighlightedRegion = hub.region === activeRegionId;

          return (
            <div
              key={hub.id}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0)`,
                opacity,
              }}
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 pointer-events-auto"
            >
              {/* Interactive Marker Pin */}
              <button
                onClick={() => onSelectHub(hub)}
                aria-label={`Select ${hub.name}`}
                className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              >
                {/* Active Ring */}
                {isActive && (
                  <span className="absolute w-6 h-6 rounded-full border border-[#B99A5E] animate-ping opacity-60" />
                )}

                {/* Primary Hub Halo */}
                {isPrimary && (
                  <span className="absolute w-4 h-4 rounded-full border border-[#B99A5E]/70" />
                )}

                {/* Marker Dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125 ${
                    isActive
                      ? "bg-[#B99A5E] ring-2 ring-white"
                      : isOverHighlightedRegion
                      ? "bg-[#091426] ring-1.5 ring-white"
                      : "bg-[#F1F5FB] ring-1.5 ring-[#091426]"
                  }`}
                />

                {/* Refined Small Label */}
                <span
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium tracking-wide whitespace-nowrap px-1.5 py-0.5 rounded shadow-xs transition-colors ${
                    isOverHighlightedRegion
                      ? "bg-[#091426] text-[#F1F5FB] border border-[#244A80]/80"
                      : "bg-[#091426]/85 backdrop-blur-xs text-[#E2E8F0] border border-[#1A2D4B]/80"
                  } ${isActive ? "text-[#B99A5E] font-semibold" : ""}`}
                >
                  {hub.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom-Right Controls */}
      <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 z-30 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-[#DFE6EF] rounded-full p-1 shadow-xs">
        <button
          onClick={zoomIn}
          aria-label="Zoom in globe"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-[#244A80] hover:text-[#B99A5E] hover:bg-[#F1F5FB] transition-colors"
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
        <button
          onClick={zoomOut}
          aria-label="Zoom out globe"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-[#244A80] hover:text-[#B99A5E] hover:bg-[#F1F5FB] transition-colors"
        >
          <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
        <span className="w-[1px] h-3.5 bg-[#DFE6EF]" />
        <button
          onClick={resetView}
          aria-label="Reset globe orientation"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-[#244A80] hover:text-[#B99A5E] hover:bg-[#F1F5FB] transition-colors"
        >
          <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Subtle interaction tip */}
      <div className="absolute left-6 bottom-4 sm:bottom-6 z-20 hidden md:block text-[11px] font-medium tracking-[0.06em] text-[#5A6878]">
        <span>Drag to rotate · Click centre to focus</span>
      </div>
    </div>
  );
};
