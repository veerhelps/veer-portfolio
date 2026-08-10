import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Ring, Html } from '@react-three/drei';
import * as THREE from 'three';

const majorNodes = [
  { pair: 'EUR/USD', price: '1.0925', radius: 2.6, speed: 0.2, color: '#D6B45A' },
  { pair: 'GBP/USD', price: '1.2840', radius: 3.4, speed: 0.16, color: '#E6C766' },
  { pair: 'USD/JPY', price: '153.20', radius: 4.2, speed: 0.22, color: '#35D39A' },
  { pair: 'XAU/USD', price: '2742.5', radius: 5.0, speed: 0.12, color: '#F3E5AB' },
];

function OrbitNode({ node }: { node: typeof majorNodes[0] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    angleRef.current += delta * node.speed;
    const x = Math.cos(angleRef.current) * node.radius;
    const z = Math.sin(angleRef.current) * node.radius;
    const y = Math.sin(angleRef.current * 1.5) * 0.5;
    meshRef.current.position.set(x, y, z);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <Sphere args={[0.18, 16, 16]}>
          <meshStandardMaterial color={node.color} metalness={0.9} roughness={0.1} emissive={node.color} emissiveIntensity={0.6} />
        </Sphere>
        <Html distanceFactor={12}>
          <div className="bg-obsidian-950/90 border border-gold/40 px-2 py-1 rounded text-[10px] font-mono text-gold whitespace-nowrap backdrop-blur-md shadow-xl">
            {node.pair} <span className="text-stone-300 ml-1">{node.price}</span>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function CoreGeometry({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerSphereRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  const particleCount = 200;
  const particlePos = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
      groupRef.current.rotation.y += (mouse.current.x * 0.3 - groupRef.current.rotation.y * 0.1) * 0.05;
      groupRef.current.rotation.x += (-mouse.current.y * 0.3 - groupRef.current.rotation.x * 0.1) * 0.05;
    }
    if (innerSphereRef.current) innerSphereRef.current.rotation.y -= delta * 0.25;
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.18;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.14;
  });

  return (
    <group ref={groupRef}>
      {/* Central Metallic Forex Core */}
      <Sphere ref={innerSphereRef} args={[1.3, 32, 32]}>
        <meshStandardMaterial color="#D6B45A" metalness={0.95} roughness={0.12} emissive="#4A3B10" emissiveIntensity={0.5} />
      </Sphere>

      {/* Wireframe Forex Structure */}
      <Sphere args={[1.75, 24, 24]}>
        <meshBasicMaterial color="#E6C766" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Outer Currency Rings */}
      <group ref={ring1Ref}>
        <Ring args={[2.7, 2.72, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#D6B45A" side={THREE.DoubleSide} transparent opacity={0.5} />
        </Ring>
      </group>

      <group ref={ring2Ref}>
        <Ring args={[3.5, 3.52, 64]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshBasicMaterial color="#35D39A" side={THREE.DoubleSide} transparent opacity={0.4} />
        </Ring>
      </group>

      {/* Orbiting Currency Nodes */}
      {majorNodes.map((n, i) => (
        <OrbitNode key={i} node={n} />
      ))}

      {/* Liquidity Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#E6C766" transparent opacity={0.65} sizeAttenuation />
      </points>
    </group>
  );
}

export function ForexMarketCore() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / innerHeight) * 2 + 1;
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.3} color="#FFF0CA" />
        <pointLight position={[-10, -10, -5]} intensity={0.9} color="#D6B45A" />
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <CoreGeometry mouse={mouse} />
        </Float>
      </Canvas>
    </div>
  );
}
