import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';

export function LiquidityMap3D() {
  const lineRef = useRef<THREE.Group>(null!);

  return (
    <div className="w-full h-[340px] rounded-2xl border border-gold/20 bg-obsidian-950 overflow-hidden relative">
      <div className="absolute top-4 left-4 z-10 font-mono text-xs text-stone-400">
        LIQUIDITY MAP <span className="text-gold">● BUY-SIDE & SELL-SIDE POOLS</span>
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#D6B45A" />
        
        {/* Equal Highs Buy-Side Pool Line */}
        <Line points={[[-3.5, 1.2, 0], [3.5, 1.2, 0]]} color="#E66A6A" lineWidth={2} dashed dashScale={10} />
        <Html position={[2.8, 1.4, 0]}>
          <div className="text-[10px] font-mono text-coral-market bg-coral-market/10 border border-coral-market/30 px-2 py-0.5 rounded font-bold">
            BSL POOL (1.0960)
          </div>
        </Html>

        {/* Price Action Wave */}
        <Line
          points={[
            [-3.5, -0.5, 0], [-2.5, 0.8, 0], [-1.5, -0.2, 0], [-0.5, 1.15, 0],
            [0.5, -1.2, 0], [1.5, 0.4, 0], [2.5, 1.45, 0], [3.5, 0.9, 0]
          ]}
          color="#D6B45A"
          lineWidth={3}
        />

        {/* Equal Lows Sell-Side Pool Line */}
        <Line points={[[-3.5, -1.2, 0], [3.5, -1.2, 0]]} color="#35D39A" lineWidth={2} dashed dashScale={10} />
        <Html position={[2.8, -1.4, 0]}>
          <div className="text-[10px] font-mono text-emerald-market bg-emerald-market/10 border border-emerald-market/30 px-2 py-0.5 rounded font-bold">
            SSL POOL (1.0805)
          </div>
        </Html>
      </Canvas>
    </div>
  );
}
