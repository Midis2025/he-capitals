"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  details: string;
}

const NODES: Node[] = [
  { id: "us", name: "United States", x: 240, y: 160, details: "New York, Boston, San Francisco" },
  { id: "ca", name: "Canada", x: 230, y: 110, details: "Toronto, Vancouver, Montreal" },
  { id: "eu", name: "Europe", x: 530, y: 130, details: "London, Zurich, Frankfurt" },
  { id: "asia", name: "Asia", x: 790, y: 200, details: "Hong Kong, Singapore, Tokyo" },
];

const CONNECTIONS = [
  { from: NODES[0], to: NODES[1] }, // US to Canada
  { from: NODES[0], to: NODES[2] }, // US to Europe
  { from: NODES[1], to: NODES[2] }, // Canada to Europe
  { from: NODES[2], to: NODES[3] }, // Europe to Asia
  { from: NODES[0], to: NODES[3] }, // US to Asia (trans-pacific arc)
];

export const WorldMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] max-w-[1000px] mx-auto select-none my-6">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B99A5E" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#B99A5E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B99A5E" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B99A5E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B99A5E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Abstract World Continents Mesh (Polygonal dots & lines) */}
        <g opacity="0.22" stroke="#244A80" strokeWidth="0.8">
          {/* North America outline */}
          <path d="M 140,80 L 190,70 L 260,80 L 310,120 L 280,180 L 230,220 L 180,240 L 140,170 Z" />
          <path d="M 180,120 L 250,110 L 280,150 L 230,170 Z" />
          
          {/* South America outline */}
          <path d="M 270,260 L 330,290 L 350,370 L 300,440 L 260,350 Z" />
          
          {/* Europe outline */}
          <path d="M 480,90 L 550,80 L 600,120 L 560,170 L 490,160 Z" />
          <path d="M 510,120 L 560,110 L 550,150 Z" />

          {/* Africa outline */}
          <path d="M 490,190 L 580,200 L 620,290 L 550,390 L 480,280 Z" />

          {/* Asia outline */}
          <path d="M 620,90 L 750,70 L 870,120 L 890,220 L 770,280 L 650,220 Z" />
          <path d="M 670,140 L 760,130 L 810,180 L 720,220 Z" />

          {/* Australia outline */}
          <path d="M 790,340 L 890,330 L 910,400 L 820,420 Z" />
        </g>

        {/* Connecting Curved Constellation Arcs */}
        {CONNECTIONS.map((c, i) => {
          const midX = (c.from.x + c.to.x) / 2;
          const midY = Math.min(c.from.y, c.to.y) - 60;
          const pathD = `M ${c.from.x} ${c.from.y} Q ${midX} ${midY} ${c.to.x} ${c.to.y}`;

          const isHighlighted =
            activeNode === c.from.id || activeNode === c.to.id;

          return (
            <g key={i}>
              {/* Arc line */}
              <path
                d={pathD}
                stroke={isHighlighted ? "#B99A5E" : "url(#arcGrad)"}
                strokeWidth={isHighlighted ? 1.8 : 1.2}
                strokeDasharray="4 4"
                fill="none"
                opacity={isHighlighted ? 0.95 : 0.6}
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Interactive Hub Nodes */}
        {NODES.map((node) => {
          const isHovered = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer group"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulse Ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={16}
                fill="none"
                stroke="#B99A5E"
                strokeWidth="1"
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: [0.8, 1.8, 0.8], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Outer circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 8 : 6}
                fill="#0B1A30"
                stroke="#B99A5E"
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* Inner core */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? 4 : 2.5}
                fill={isHovered ? "#FFFFFF" : "#B99A5E"}
                className="transition-all duration-300"
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y - 14}
                textAnchor="middle"
                className={`text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 ${
                  isHovered ? "fill-[#FFFFFF]" : "fill-[#B99A5E]"
                }`}
              >
                {node.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
