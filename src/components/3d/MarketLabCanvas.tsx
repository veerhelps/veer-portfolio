import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function VolatilityWave({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Points>(null!);
  const gridRows = 40;
  const gridCols = 40;
  const count = gridRows * gridCols;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < gridRows; i++) {
      for (let j = 0; j < gridCols; j++) {
        const idx = (i * gridCols + j) * 3;
        pos[idx] = (j - gridCols / 2) * 0.35;
        pos[idx + 1] = 0;
        pos[idx + 2] = (i - gridRows / 2) * 0.35;
      }
    }
    return pos;
  }, [count, gridRows, gridCols]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridCols; j++) {
          const idx = (i * gridCols + j) * 3;
          const x = posAttr.getX(i * gridCols + j);
          const z = posAttr.getZ(i * gridCols + j);
          const dist = Math.sqrt((x - mouse.current.x * 5) ** 2 + (z - mouse.current.y * 5) ** 2);
          const ripple = Math.sin(dist * 2 - time * 3) * 0.3 * Math.exp(-dist * 0.3);
          const wave = Math.sin(x * 0.8 + time * 2) * 0.15 + Math.cos(z * 0.8 + time * 1.5) * 0.15;
          posAttr.setY(i * gridCols + j, wave + ripple);
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#D6B45A" transparent opacity={0.7} />
    </points>
  );
}

export function MarketLabCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  };

  return (
    <div
      className="w-full h-[420px] rounded-xl border border-gold/20 bg-obsidian-950 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-4 left-4 z-10 font-mono text-xs text-stone-400">
        VOLATILITY FIELD SIMULATOR <span className="text-gold">● CURSOR ACTIVE</span>
      </div>
      <Canvas camera={{ position: [0, 5, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <VolatilityWave mouse={mouse} />
      </Canvas>
    </div>
  );
}
