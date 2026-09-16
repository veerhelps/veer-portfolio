import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere, Cylinder, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

const markers = [
  { code: 'EUR', label: '1.0925', bias: '+0.44%', angle: 0, color: '#FAF7F2' },
  { code: 'USD', label: '104.20', bias: '-0.21%', angle: Math.PI * 0.5, color: '#D6B45A' },
  { code: 'GBP', label: '1.2840', bias: '+0.48%', angle: Math.PI, color: '#E5C56C' },
  { code: 'JPY', label: '153.20', bias: '-0.55%', angle: Math.PI * 1.5, color: '#B51E25' },
];

function CurrencyEye() {
  const groupRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const irisRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.35;
      groupRef.current.rotation.x = Math.cos(t * 0.25) * 0.15;
    }
    if (torusRef.current) torusRef.current.rotation.z += delta * 0.2;
    if (irisRef.current) irisRef.current.rotation.y -= delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Editorial Golden Iris Rim */}
      <mesh ref={torusRef}>
        <Torus args={[1.7, 0.08, 24, 64]}>
          <meshStandardMaterial color="#D6B45A" metalness={0.95} roughness={0.12} emissive="#45340C" emissiveIntensity={0.5} />
        </Torus>
      </mesh>

      {/* Crimson Volatility Meridian Ring */}
      <Torus args={[1.9, 0.03, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#B51E25" transparent opacity={0.65} />
      </Torus>

      {/* Central Currency Core ("The Pupil") */}
      <mesh ref={irisRef}>
        <Sphere args={[0.9, 32, 32]}>
          <meshStandardMaterial color="#0B0B0B" metalness={0.8} roughness={0.2} wireframe />
        </Sphere>
        <Cylinder args={[0.3, 0.3, 0.4, 24]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#FAF7F2" metalness={0.9} roughness={0.1} emissive="#D6B45A" emissiveIntensity={0.6} />
        </Cylinder>
      </mesh>

      {/* Floating 3D Currency Markers */}
      {markers.map((m, idx) => {
        const radius = 2.4;
        const x = Math.cos(m.angle) * radius;
        const y = Math.sin(m.angle) * radius;
        return (
          <group key={idx} position={[x, y, 0]}>
            <Sphere args={[0.07, 16, 16]}>
              <meshStandardMaterial color={m.color} emissive={m.color} emissiveIntensity={0.8} />
            </Sphere>
            <Html distanceFactor={8} position={[0, 0.25, 0]}>
              <div className="bg-obsidian-950/90 border border-gold/30 px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap shadow-2xl backdrop-blur-md text-center pointer-events-none select-none">
                <span className="font-bold text-cream">{m.code}</span>
                <span className="text-gold ml-1.5">{m.label}</span>
                <span className="text-[9px] text-stone-400 ml-1">({m.bias})</span>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function CurrencyWatching3D() {
  return (
    <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#FAF7F2" />
        <pointLight position={[-4, -4, -2]} intensity={1} color="#D6B45A" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <CurrencyEye />
        </Float>
      </Canvas>
    </div>
  );
}
