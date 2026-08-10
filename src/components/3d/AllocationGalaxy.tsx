import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SectorNode {
  name: string;
  allocation: string;
  color: string;
  radius: number;
  speed: number;
  size: number;
  pnl: string;
}

const sectorData: SectorNode[] = [
  { name: 'Banking & Financials', allocation: '28.5%', color: '#D6B45A', radius: 2.2, speed: 0.2, size: 0.35, pnl: '+13.88%' },
  { name: 'Energy & Commodities', allocation: '24.0%', color: '#E6C766', radius: 3.1, speed: 0.15, size: 0.30, pnl: '+14.04%' },
  { name: 'IT & Technology', allocation: '33.5%', color: '#36D39A', radius: 3.9, speed: 0.25, size: 0.38, pnl: '+10.20%' },
  { name: 'Indices & ETFs', allocation: '14.0%', color: '#63D9E8', radius: 4.6, speed: 0.12, size: 0.25, pnl: '+11.29%' }
];

function OrbitingNode({ node, onHover }: { node: SectorNode; onHover: (name: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    angleRef.current += delta * node.speed;
    const x = Math.cos(angleRef.current) * node.radius;
    const z = Math.sin(angleRef.current) * node.radius;
    const y = Math.sin(angleRef.current * 2) * 0.4;
    meshRef.current.position.set(x, y, z);
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(node.name);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <Sphere args={[hovered ? node.size * 1.3 : node.size, 24, 24]}>
          <meshStandardMaterial
            color={node.color}
            metalness={0.8}
            roughness={0.2}
            emissive={node.color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
          />
        </Sphere>
        {hovered && (
          <Html distanceFactor={10}>
            <div className="bg-obsidian-900/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded text-xs whitespace-nowrap text-stone-200 pointer-events-none shadow-xl">
              <span className="font-semibold text-gold">{node.name}</span>
              <div className="flex gap-2 mt-0.5 text-[10px] text-stone-400">
                <span>Alloc: {node.allocation}</span>
                <span className="text-emerald-market">{node.pnl}</span>
              </div>
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}

export function AllocationGalaxy() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  return (
    <div className="w-full h-[400px] sm:h-[480px] relative rounded-xl border border-obsidian-700 bg-obsidian-900/60 overflow-hidden">
      <div className="absolute top-4 left-4 z-10 text-xs font-mono text-stone-400">
        ORBITAL ALLOCATION SYSTEM <span className="text-gold">● INTERACTIVE 3D</span>
      </div>
      
      {hoveredSector && (
        <div className="absolute top-4 right-4 z-10 bg-gold/10 border border-gold/30 px-3 py-1 rounded text-xs text-gold font-mono">
          FOCUSING: {hoveredSector}
        </div>
      )}

      <Canvas camera={{ position: [0, 4, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 10, 5]} intensity={1} color="#D6B45A" />
        
        {/* Central Portfolio Core */}
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial color="#D6B45A" metalness={0.9} roughness={0.1} emissive="#D6B45A" emissiveIntensity={0.4} />
        </Sphere>

        {/* Orbit Rings */}
        {sectorData.map((node, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[node.radius - 0.01, node.radius + 0.01, 64]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
        ))}

        {/* Sector Nodes */}
        {sectorData.map((node, i) => (
          <OrbitingNode key={i} node={node} onHover={setHoveredSector} />
        ))}
      </Canvas>
    </div>
  );
}
