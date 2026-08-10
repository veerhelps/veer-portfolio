import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

function MarketCoreMesh({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const outerCoreRef = useRef<THREE.Group>(null!);
  const innerSphereRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  // Generate particle positions
  const particleCount = 250;
  const particlePositions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    // Continuous smooth rotation
    if (outerCoreRef.current) {
      outerCoreRef.current.rotation.y += delta * 0.15;
      outerCoreRef.current.rotation.x += delta * 0.05;

      // Subtle mouse parallax target interpolation
      outerCoreRef.current.rotation.y += (mouse.current.x * 0.4 - outerCoreRef.current.rotation.y * 0.1) * 0.05;
      outerCoreRef.current.rotation.x += (-mouse.current.y * 0.4 - outerCoreRef.current.rotation.x * 0.1) * 0.05;
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
      ring1Ref.current.rotation.x += delta * 0.1;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
      ring2Ref.current.rotation.y += delta * 0.15;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.18;
      ring3Ref.current.rotation.z += delta * 0.12;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={outerCoreRef}>
      {/* Inner Metallic Gold Core */}
      <Sphere ref={innerSphereRef} args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#D6B45A"
          metalness={0.9}
          roughness={0.15}
          emissive="#3E2E0A"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Wireframe Financial Geometry */}
      <Sphere args={[1.6, 20, 20]}>
        <meshBasicMaterial
          color="#E6C766"
          wireframe
          transparent
          opacity={0.35}
        />
      </Sphere>

      {/* Outer Icosahedron Structural Mesh */}
      <mesh scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1A1D1E"
          wireframe
          emissive="#D6B45A"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbital Trading Rings */}
      <group ref={ring1Ref}>
        <Ring args={[2.5, 2.52, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#D6B45A" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>
      </group>

      <group ref={ring2Ref}>
        <Ring args={[3.1, 3.12, 64]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
          <meshBasicMaterial color="#36D39A" side={THREE.DoubleSide} transparent opacity={0.4} />
        </Ring>
      </group>

      <group ref={ring3Ref}>
        <Ring args={[3.7, 3.72, 64]} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
          <meshBasicMaterial color="#E6C766" side={THREE.DoubleSide} transparent opacity={0.3} />
        </Ring>
      </group>

      {/* Floating Financial Data Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#E6C766"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export function MarketCoreScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / innerHeight) * 2 + 1;
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-auto"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFF0CA" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#D6B45A" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <MarketCoreMesh mouse={mouse} />
        </Float>
      </Canvas>
    </div>
  );
}
