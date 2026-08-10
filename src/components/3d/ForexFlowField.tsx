import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleFlow() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 500;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);
        let z = posAttr.getZ(i);

        x += Math.sin(y * 0.8 + state.clock.getElapsedTime()) * 0.02;
        y += Math.cos(x * 0.8 + state.clock.getElapsedTime()) * 0.02;

        if (x > 6) x = -6;
        if (x < -6) x = 6;
        if (y > 4) y = -4;
        if (y < -4) y = 4;

        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#D6B45A" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function ForexFlowField() {
  return (
    <div className="w-full h-[360px] rounded-2xl border border-gold/30 bg-obsidian-950 overflow-hidden relative shadow-2xl">
      <div className="absolute top-4 left-4 z-10 font-mono text-xs text-stone-400">
        3D FOREX FLOW FIELD <span className="text-gold">● MOMENTUM VECTORS</span>
      </div>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <ParticleFlow />
      </Canvas>
    </div>
  );
}
