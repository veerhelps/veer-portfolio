import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Ring, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

const sessions = [
  { name: 'SYDNEY', utc: '22:00-07:00', angle: 0, color: '#D6B45A', active: false },
  { name: 'TOKYO', utc: '00:00-09:00', angle: Math.PI * 0.45, color: '#FAF7F2', active: false },
  { name: 'LONDON', utc: '08:00-17:00', angle: Math.PI * 1.15, color: '#E5C56C', active: true },
  { name: 'NEW YORK', utc: '13:00-22:00', angle: Math.PI * 1.6, color: '#36D39A', active: true },
];

function ClockEarth() {
  const globeRef = useRef<THREE.Group>(null!);
  const lightOrbitRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.08;
    }
    if (lightOrbitRef.current) {
      lightOrbitRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Central Celestial Session Sphere */}
      <group ref={globeRef}>
        <Sphere args={[1.5, 32, 32]}>
          <meshStandardMaterial
            color="#080808"
            metalness={0.9}
            roughness={0.3}
            wireframe
          />
        </Sphere>
        <Sphere args={[1.46, 24, 24]}>
          <meshStandardMaterial
            color="#111111"
            metalness={0.8}
            roughness={0.4}
          />
        </Sphere>

        {/* Equatorial Chronology Dial */}
        <Ring args={[1.9, 1.95, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#D6B45A" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>

        {/* London/NY Overlap Arc */}
        <Ring args={[2.02, 2.08, 64, 1, Math.PI * 1.05, Math.PI * 0.65]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#B51E25" side={THREE.DoubleSide} />
        </Ring>

        {/* Session Position Pins */}
        {sessions.map((s, idx) => {
          const r = 2.15;
          const x = Math.cos(s.angle) * r;
          const z = Math.sin(s.angle) * r;
          return (
            <group key={idx} position={[x, 0, z]}>
              <Sphere args={[0.08, 16, 16]}>
                <meshStandardMaterial
                  color={s.color}
                  emissive={s.color}
                  emissiveIntensity={s.active ? 1.0 : 0.4}
                />
              </Sphere>
              <Html distanceFactor={9} position={[0, 0.35, 0]}>
                <div className={`px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap shadow-xl border backdrop-blur-md select-none ${
                  s.active
                    ? 'bg-obsidian-950/95 border-gold text-gold font-bold'
                    : 'bg-obsidian-950/80 border-obsidian-700 text-stone-400'
                }`}>
                  {s.name} <span className="text-[8px] opacity-75">({s.utc})</span>
                </div>
              </Html>
            </group>
          );
        })}
      </group>

      {/* Orbiting Solar Simulator Light */}
      <group ref={lightOrbitRef}>
        <pointLight position={[3.5, 1.2, 0]} intensity={1.8} color="#FFF0CA" distance={10} />
        <Sphere args={[0.12, 16, 16]} position={[3.5, 1.2, 0]}>
          <meshBasicMaterial color="#E5C56C" />
        </Sphere>
      </group>
    </group>
  );
}

export function WorldClock3D() {
  return (
    <div className="w-full h-[280px] sm:h-[360px] rounded-2xl border border-obsidian-800 bg-obsidian-950/80 relative overflow-hidden">
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 font-mono text-[9px] sm:text-[10px] text-stone-400 tracking-wider flex items-center gap-2 max-w-[90%] truncate">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
        <span className="truncate">3D CHRONO-ORBIT ● OVERLAP: 12:00 - 16:00 UTC (77% GLOBAL VOL)</span>
      </div>
      <Canvas camera={{ position: [0, 2.5, 5.5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} color="#FAF7F2" />
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.25}>
          <ClockEarth />
        </Float>
      </Canvas>
    </div>
  );
}
