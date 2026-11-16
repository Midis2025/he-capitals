"use client";

import React, { useState } from "react";
import mapData from "@/lib/portfolio-map-data.json";

interface Hub {
  id: string;
  name: string;
  city: string;
  coords: number[];
  x: number;
  y: number;
}

export const PortfolioWorldMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  const { width, height, landPath, dotsPath, hubs, arcs } = mapData as {
    width: number;
    height: number;
    landPath: string;
    dotsPath: string;
    hubs: Hub[];
    arcs: { d: string; fromId: string; toId: string }[];
  };

  return (
    <div className="relative w-full aspect-[2/1] max-w-[560px] lg:max-w-[600px] lg:ml-auto select-none">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gold glow filter for arcs & beacons */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Golden linear gradients for connection lines */}
          <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A15A" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C5A15A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C5A15A" stopOpacity="0.3" />
          </linearGradient>

          {/* Radial Beacon Glow */}
          <radialGradient id="beaconRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A15A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C5A15A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Subtle Global Landmass Base Silhouette */}
        <path
          d={landPath}
          fill="#071629"
          fillOpacity="0.03"
          stroke="#071629"
          strokeOpacity="0.08"
          strokeWidth="0.5"
        />

        {/* 2. Crisp High-Resolution Dotted Landmass Matrix */}
        <path
          d={dotsPath}
          fill="#3E5879"
          fillOpacity="0.45"
          className="transition-opacity duration-300"
        />

        {/* 3. Golden Curved Constellation Network Arcs */}
        {arcs.map((arc, i) => {
          const isRelated =
            activeHub === null ||
            activeHub === arc.fromId ||
            activeHub === arc.toId;

          return (
            <g key={i}>
              {/* Outer soft glow line */}
              <path
                d={arc.d}
                stroke="#C5A15A"
                strokeWidth={isRelated ? "2" : "1"}
                strokeOpacity={isRelated ? "0.3" : "0.1"}
                fill="none"
              />
              {/* Core dashed line */}
              <path
                d={arc.d}
                stroke="url(#goldArcGrad)"
                strokeWidth={isRelated ? "1.6" : "1.1"}
                strokeDasharray="4 3"
                strokeOpacity={isRelated ? "0.95" : "0.45"}
                fill="none"
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* 4. Glowing Hub Beacons */}
        {hubs.map((hub) => {
          const isActive = activeHub === hub.id;

          return (
            <g
              key={hub.id}
              className="cursor-pointer group"
              onMouseEnter={() => setActiveHub(hub.id)}
              onMouseLeave={() => setActiveHub(null)}
            >
              {/* Subtle expanded hit area */}
              <circle cx={hub.x} cy={hub.y} r={18} fill="transparent" />

              {/* Pulsing ring animation */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r={isActive ? 11 : 8}
                fill="none"
                stroke="#C5A15A"
                strokeWidth="1"
                className="animate-ping origin-center opacity-70"
                style={{
                  transformOrigin: `${hub.x}px ${hub.y}px`,
                  animationDuration: "2.8s",
                }}
              />

              {/* Outer Halo */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r={isActive ? 7 : 5.5}
                fill="#C5A15A"
                fillOpacity="0.25"
                stroke="#C5A15A"
                strokeWidth="1.2"
                className="transition-all duration-300"
              />

              {/* Solid Core Dot */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r={isActive ? 3.5 : 2.5}
                fill="#C5A15A"
                filter="url(#goldGlow)"
                className="transition-all duration-300"
              />

              {/* Hub City Label */}
              <text
                x={hub.x}
                y={hub.y - 10}
                textAnchor="middle"
                className={`text-[9.5px] font-medium tracking-[0.1em] uppercase transition-all duration-200 pointer-events-none select-none ${
                  isActive
                    ? "fill-[#071629] font-semibold"
                    : "fill-[#536985] fill-opacity-80"
                }`}
              >
                {hub.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

