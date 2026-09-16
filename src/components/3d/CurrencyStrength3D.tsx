import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Html } from '@react-three/drei';
import * as THREE from 'three';
import { currencyStrengthMatrix } from '../../data/currencyStrength';

function StrengthPillar({ item, index, total }: { item: typeof currencyStrengthMatrix[0]; index: number; total: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const height = (item.strengthScore / 100) * 3.5;
  const x = (index - total / 2) * 0.9;
  const color = item.bias === 'LONG' ? '#35D39A' : item.bias === 'SHORT' ? '#E66A6A' : '#D6B45A';

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group position={[x, height / 2 - 1.8, 0]}>
      <mesh ref={meshRef}>
        <Box args={[0.4, height, 0.4]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.4} />
        </Box>
        <Html distanceFactor={8} position={[0, height / 2 + 0.3, 0]}>
          <div className="bg-obsidian-950/90 border border-gold/40 px-2 py-1 rounded text-[10px] font-mono text-stone-200 whitespace-nowrap backdrop-blur-md shadow-xl text-center pointer-events-none">
            <div className="font-bold text-gold">{item.code}</div>
            <div className="text-[9px] text-stone-400">{item.strengthScore}%</div>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export function CurrencyStrength3D() {
  return (
    <div className="w-full h-[260px] sm:h-[320px] rounded-2xl border border-obsidian-800 bg-obsidian-950 overflow-hidden relative">
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 font-mono text-[10px] sm:text-xs text-stone-400">
        3D CURRENCY STRENGTH MATRIX <span className="text-gold">● RELATIVE SCORE</span>
      </div>
      <Canvas camera={{ position: [0, 1.8, 8.2], fov: 48 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#D6B45A" />
        {currencyStrengthMatrix.map((item, i) => (
          <StrengthPillar key={i} item={item} index={i} total={currencyStrengthMatrix.length} />
        ))}
      </Canvas>
    </div>
  );
}
