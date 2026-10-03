import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, Ring, Cylinder, Torus, Html } from '@react-three/drei';
import * as THREE from 'three';

interface FinancialArtifactProps {
  scrollProgress?: number;
}

const currencyNodes = [
  { symbol: 'EUR', angle: 0, baseRadius: 2.8, color: '#FAF7F2', price: '1.0925', bias: '+0.44%' },
  { symbol: 'USD', angle: Math.PI * 0.5, baseRadius: 3.1, color: '#D6B45A', price: '104.20', bias: '-0.21%' },
  { symbol: 'GBP', angle: Math.PI, baseRadius: 2.9, color: '#E5C56C', price: '1.2840', bias: '+0.48%' },
  { symbol: 'JPY', angle: Math.PI * 1.5, baseRadius: 3.2, color: '#FAF7F2', price: '153.20', bias: '-0.55%' },
  { symbol: 'XAU', angle: Math.PI * 0.25, baseRadius: 3.4, color: '#D6B45A', price: '2,742.50', bias: '+0.90%' },
];

function ArtifactCore({ scrollProgress = 0, isHovered = false }: { scrollProgress?: number; isHovered?: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerCoinRef = useRef<THREE.Group>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);
  const ring3Ref = useRef<THREE.Group>(null!);
  const latticeRef = useRef<THREE.Mesh>(null!);

  // Generate candlestick fragment positions around the core
  const candleFragments = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const theta = (i / 18) * Math.PI * 2;
      const r = 2.4 + Math.sin(i * 1.7) * 0.35;
      const y = Math.sin(i * 2.3) * 0.9;
      const height = 0.35 + (i % 3) * 0.25;
      const isBull = i % 2 === 0;
      return {
        baseX: Math.cos(theta) * r,
        baseY: y,
        baseZ: Math.sin(theta) * r,
        theta,
        r,
        height,
        color: isBull ? '#D6B45A' : '#B51E25',
      };
    });
  }, []);

  // Ambient liquidity dust particles
  const particleCount = 180;
  const particles = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [particleCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Walkthrough choreography on scroll:
    // 1. Core moves toward viewer (z increases from 0 up to 5.2)
    // 2. Core rotates faster as scroll progresses
    if (groupRef.current) {
      groupRef.current.position.z = scrollProgress * 5.2;
      groupRef.current.position.x = -scrollProgress * 0.8;
      groupRef.current.rotation.y = t * 0.12 + scrollProgress * 1.8;
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.12 + scrollProgress * 0.6;
    }

    if (innerCoinRef.current) {
      innerCoinRef.current.rotation.y = -t * 0.2;
      innerCoinRef.current.rotation.z = Math.cos(t * 0.1) * 0.12;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.16 + scrollProgress * 1.2;
    if (ring2Ref.current) ring2Ref.current.rotation.x = t * 0.13 - scrollProgress * 0.9;
    if (ring3Ref.current) ring3Ref.current.rotation.y = -t * 0.15 + scrollProgress * 1.5;
    if (latticeRef.current) latticeRef.current.rotation.y = t * 0.08;
  });

  // Calculate dynamic node separation based on scrollProgress
  // As user scrolls, nodes expand outward so camera can pass through the core
  const separationFactor = 1 + scrollProgress * 2.8;
  const ringsExpansion = 1 + scrollProgress * 1.6;
  const coreFadeOpacity = Math.max(0, 1 - Math.pow(scrollProgress, 2.5));

  return (
    <group ref={groupRef}>
      {/* Central Metallic Currency Core */}
      <group ref={innerCoinRef}>
        {/* Main Brushed Gold Coin Body */}
        <Cylinder args={[1.35, 1.35, 0.22, 48]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#D6B45A"
            metalness={0.96}
            roughness={0.16}
            emissive="#45340C"
            emissiveIntensity={isHovered ? 0.7 : 0.4}
            transparent
            opacity={coreFadeOpacity}
          />
        </Cylinder>

        {/* Outer Coin Bezel / Rim */}
        <Torus args={[1.38, 0.045, 16, 64]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#FAF7F2"
            metalness={0.98}
            roughness={0.08}
            emissive="#D6B45A"
            emissiveIntensity={isHovered ? 0.8 : 0.45}
            transparent
            opacity={coreFadeOpacity}
          />
        </Torus>

        {/* Currency Core Inner Lattice / Sovereign Relief */}
        <Cylinder args={[1.05, 1.05, 0.25, 32]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial
            color="#080808"
            metalness={0.88}
            roughness={0.25}
            wireframe
            transparent
            opacity={coreFadeOpacity * 0.85}
          />
        </Cylinder>
      </group>

      {/* Orbiting Thin Liquidity Rings (Expand on scroll walkthrough) */}
      <group ref={ring1Ref} scale={ringsExpansion}>
        <Ring args={[2.1, 2.125, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial
            color="#D6B45A"
            side={THREE.DoubleSide}
            transparent
            opacity={Math.max(0, 0.65 - scrollProgress * 0.4)}
          />
        </Ring>
      </group>

      <group ref={ring2Ref} scale={ringsExpansion}>
        <Ring args={[2.7, 2.725, 64]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshBasicMaterial
            color="#FAF7F2"
            side={THREE.DoubleSide}
            transparent
            opacity={Math.max(0, 0.48 - scrollProgress * 0.4)}
          />
        </Ring>
      </group>

      <group ref={ring3Ref} scale={ringsExpansion}>
        <Ring args={[3.3, 3.32, 64]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <meshBasicMaterial
            color="#B51E25"
            side={THREE.DoubleSide}
            transparent
            opacity={Math.max(0, 0.55 - scrollProgress * 0.35)}
          />
        </Ring>
      </group>

      {/* Abstract Geodesic Financial Mesh */}
      <Sphere ref={latticeRef} args={[1.75 * ringsExpansion, 18, 18]}>
        <meshBasicMaterial
          color="#E5C56C"
          wireframe
          transparent
          opacity={Math.max(0, 0.22 - scrollProgress * 0.2)}
        />
      </Sphere>

      {/* Candlestick Dispersal Fragments in Space */}
      {candleFragments.map((f, i) => {
        const currentR = f.r * separationFactor;
        const x = Math.cos(f.theta) * currentR;
        const z = Math.sin(f.theta) * currentR;
        const y = f.baseY * (1 + scrollProgress * 1.5);
        return (
          <group key={i} position={[x, y, z]}>
            <Cylinder args={[0.035, 0.035, f.height, 8]}>
              <meshStandardMaterial
                color={f.color}
                metalness={0.92}
                roughness={0.18}
                emissive={f.color}
                emissiveIntensity={0.65}
                transparent
                opacity={coreFadeOpacity}
              />
            </Cylinder>
            {/* Candlestick Wick */}
            <Cylinder args={[0.009, 0.009, f.height * 1.6, 6]}>
              <meshBasicMaterial color="#FAF7F2" transparent opacity={coreFadeOpacity * 0.7} />
            </Cylinder>
          </group>
        );
      })}

      {/* Dynamic Separating Currency Nodes */}
      {currencyNodes.map((n, i) => {
        const currentRadius = n.baseRadius * separationFactor;
        const x = Math.cos(n.angle) * currentRadius;
        const z = Math.sin(n.angle) * currentRadius;
        const y = Math.sin(n.angle * 2) * 0.45 * (1 + scrollProgress);

        return (
          <group key={i} position={[x, y, z]}>
            <Sphere args={[0.13, 16, 16]}>
              <meshStandardMaterial
                color={n.color}
                metalness={0.96}
                roughness={0.08}
                emissive={n.color}
                emissiveIntensity={isHovered ? 0.9 : 0.6}
              />
            </Sphere>

            {/* Price Marker Label with fade during walkthrough */}
            <Html distanceFactor={10} position={[0, 0.32, 0]}>
              <div
                className="bg-obsidian-950/92 border border-gold/40 px-2 py-0.5 rounded text-[9px] font-mono text-cream backdrop-blur-md shadow-2xl flex items-center gap-1.5 pointer-events-none select-none transition-opacity duration-300"
                style={{ opacity: Math.max(0, 1 - scrollProgress * 1.8) }}
              >
                <span className="text-gold font-bold">{n.symbol}</span>
                <span className="text-stone-300">{n.price}</span>
                <span className="text-[8px] text-emerald-market">{n.bias}</span>
              </div>
            </Html>
          </group>
        );
      })}

      {/* Atmospheric Liquidity Particle Cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#D6B45A" transparent opacity={Math.max(0, 0.5 - scrollProgress * 0.3)} sizeAttenuation />
      </points>
    </group>
  );
}

function SceneController({ scrollProgress = 0, isHovered = false }: { scrollProgress?: number; isHovered?: boolean }) {
  const { camera } = useThree();
  const targetCam = useRef({ x: 1.2, y: 0.2 });

  useFrame((state) => {
    // Subtle mouse parallax (limited to max 0.35 to avoid nausea)
    const mx = state.mouse.x * 0.35;
    const my = state.mouse.y * 0.25;

    targetCam.current.x += (1.2 + mx - targetCam.current.x) * 0.05;
    targetCam.current.y += (0.2 + my - targetCam.current.y) * 0.05;

    camera.position.x = targetCam.current.x;
    camera.position.y = targetCam.current.y;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={isHovered ? 0.55 : 0.42} />
      <directionalLight position={[6, 8, 4]} intensity={isHovered ? 1.8 : 1.5} color="#FAF7F2" />
      <pointLight position={[-6, -6, -4]} intensity={1.2} color="#D6B45A" />
      <pointLight position={[3, -4, 3]} intensity={0.9} color="#B51E25" />
      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.3}>
        <ArtifactCore scrollProgress={scrollProgress} isHovered={isHovered} />
      </Float>
    </>
  );
}

export function FinancialArtifact3D({ scrollProgress = 0 }: FinancialArtifactProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="EXPLORE"
    >
      <Canvas
        camera={{ position: [1.2, 0.2, 7.2], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <SceneController scrollProgress={scrollProgress} isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
