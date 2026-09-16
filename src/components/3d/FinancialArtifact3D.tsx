import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Ring, Cylinder, Torus, Html } from '@react-three/drei';
import * as THREE from 'three';

interface FinancialArtifactProps {
  scrollProgress?: number;
  interactive?: boolean;
}

const currencyNodes = [
  { symbol: 'EUR', angle: 0, radius: 2.8, color: '#FAF7F2', price: '1.0925' },
  { symbol: 'USD', angle: Math.PI * 0.5, radius: 3.1, color: '#D6B45A', price: '104.20' },
  { symbol: 'GBP', angle: Math.PI, radius: 2.9, color: '#E5C56C', price: '1.2840' },
  { symbol: 'JPY', angle: Math.PI * 1.5, radius: 3.2, color: '#FAF7F2', price: '153.20' },
];

function ArtifactCore({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerCoinRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const latticeRef = useRef<THREE.Mesh>(null!);

  // Generate candlestick fragment positions
  const candleFragments = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => {
      const theta = (i / 14) * Math.PI * 2;
      const r = 2.4 + (Math.sin(i * 1.7) * 0.3);
      const y = Math.sin(i * 2.3) * 0.8;
      const height = 0.3 + (i % 3) * 0.25;
      const isBull = i % 2 === 0;
      return {
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        height,
        color: isBull ? '#D6B45A' : '#B51E25',
      };
    });
  }, []);

  // Ambient liquidity dust particles
  const particleCount = 140;
  const particles = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [particleCount]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15 + (scrollProgress * 1.2);
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.15 + (scrollProgress * 0.4);
    }
    if (innerCoinRef.current) {
      innerCoinRef.current.rotation.y = -t * 0.22;
      innerCoinRef.current.rotation.z = Math.cos(t * 0.12) * 0.1;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.18;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.14;
    if (ring3Ref.current) ring3Ref.current.rotation.y = -t * 0.16;
    if (latticeRef.current) latticeRef.current.rotation.y = t * 0.09;
  });

  return (
    <group ref={groupRef}>
      {/* Central Metallic Currency Coin / Core */}
      <group ref={innerCoinRef}>
        {/* Main Brushed Gold Coin Body */}
        <Cylinder args={[1.35, 1.35, 0.22, 48]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#D6B45A"
            metalness={0.94}
            roughness={0.18}
            emissive="#45340C"
            emissiveIntensity={0.35}
          />
        </Cylinder>

        {/* Outer Coin Bezel / Rim */}
        <Torus args={[1.38, 0.045, 16, 64]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#FAF7F2"
            metalness={0.96}
            roughness={0.1}
            emissive="#D6B45A"
            emissiveIntensity={0.4}
          />
        </Torus>

        {/* Currency Core Emblem Relief */}
        <Cylinder args={[1.05, 1.05, 0.25, 32]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#0B0B0B"
            metalness={0.85}
            roughness={0.3}
            wireframe
          />
        </Cylinder>
      </group>

      {/* Outer Editorial Orbiting Liquidity Rings */}
      <group ref={ring1Ref}>
        <Ring args={[2.1, 2.12, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#D6B45A" side={THREE.DoubleSide} transparent opacity={0.65} />
        </Ring>
      </group>

      <group ref={ring2Ref}>
        <Ring args={[2.7, 2.72, 64]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshBasicMaterial color="#FAF7F2" side={THREE.DoubleSide} transparent opacity={0.45} />
        </Ring>
      </group>

      <group ref={ring3Ref}>
        <Ring args={[3.3, 3.315, 64]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <meshBasicMaterial color="#B51E25" side={THREE.DoubleSide} transparent opacity={0.5} />
        </Ring>
      </group>

      {/* Abstract Fractured Financial Sphere / Geodesic Wire */}
      <Sphere ref={latticeRef} args={[1.75, 18, 18]}>
        <meshBasicMaterial color="#E5C56C" wireframe transparent opacity={0.22} />
      </Sphere>

      {/* Candlestick Fragments in Space */}
      {candleFragments.map((f, i) => (
        <group key={i} position={[f.x, f.y, f.z]}>
          <Cylinder args={[0.04, 0.04, f.height, 8]}>
            <meshStandardMaterial
              color={f.color}
              metalness={0.9}
              roughness={0.2}
              emissive={f.color}
              emissiveIntensity={0.6}
            />
          </Cylinder>
          {/* Wick */}
          <Cylinder args={[0.01, 0.01, f.height * 1.6, 6]}>
            <meshBasicMaterial color="#FAF7F2" transparent opacity={0.7} />
          </Cylinder>
        </group>
      ))}

      {/* Floating 3D Currency Nodes */}
      {currencyNodes.map((n, i) => {
        const x = Math.cos(n.angle) * n.radius;
        const z = Math.sin(n.angle) * n.radius;
        const y = Math.sin(n.angle * 2) * 0.4;
        return (
          <group key={i} position={[x, y, z]}>
            <Sphere args={[0.12, 16, 16]}>
              <meshStandardMaterial
                color={n.color}
                metalness={0.95}
                roughness={0.1}
                emissive={n.color}
                emissiveIntensity={0.5}
              />
            </Sphere>
            <Html distanceFactor={10} position={[0, 0.28, 0]}>
              <div className="bg-obsidian-950/90 border border-gold/30 px-2 py-0.5 rounded text-[9px] font-mono text-cream backdrop-blur-md shadow-2xl flex items-center gap-1 pointer-events-none select-none">
                <span className="text-gold font-bold">{n.symbol}</span>
                <span className="text-stone-400">{n.price}</span>
              </div>
            </Html>
          </group>
        );
      })}

      {/* Subtle Dust Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#D6B45A" transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  );
}

export function FinancialArtifact3D({ scrollProgress = 0 }: FinancialArtifactProps) {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / innerHeight) * 2 + 1;
  };

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [1.2, 0.2, 7.2], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[6, 8, 4]} intensity={1.5} color="#FAF7F2" />
        <pointLight position={[-6, -6, -4]} intensity={1.1} color="#D6B45A" />
        <pointLight position={[3, -4, 3]} intensity={0.8} color="#B51E25" />
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
          <ArtifactCore scrollProgress={scrollProgress} />
        </Float>
      </Canvas>
    </div>
  );
}
