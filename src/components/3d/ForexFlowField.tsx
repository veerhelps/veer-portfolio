import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';

function FlowSystem({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 450;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const gold = new THREE.Color('#D6B45A');
    const crimson = new THREE.Color('#B51E25');
    const cream = new THREE.Color('#FAF7F2');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const chosenColor = i % 3 === 0 ? crimson : i % 2 === 0 ? gold : cream;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const t = state.clock.getElapsedTime();
      const mx = mouse.current.x * 3;
      const my = mouse.current.y * 2;

      for (let i = 0; i < count; i++) {
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);
        let z = posAttr.getZ(i);

        // Vector field flow
        x += (Math.sin(y * 0.7 + t * 0.8) * 0.02) + 0.03;
        y += Math.cos(x * 0.6 + t * 0.6) * 0.015;

        // Subtle cursor attraction/repulsion wave
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2.5) {
          x += (dx / dist) * 0.04;
          y += (dy / dist) * 0.04;
        }

        // Wrap around boundaries
        if (x > 7) x = -7;
        if (x < -7) x = 7;
        if (y > 3.5) y = -3.5;
        if (y < -3.5) y = 3.5;

        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Buy-Side Liquidity (BSL) Sweep Line */}
      <Line points={[[-6.5, 1.8, 0], [6.5, 1.8, 0]]} color="#B51E25" lineWidth={1.5} dashed dashScale={12} />
      <Html position={[4.2, 2.05, 0]}>
        <div className="bg-obsidian-950/90 border border-crimson/50 text-crimson px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-bold whitespace-nowrap shadow-lg">
          BUY-SIDE LIQUIDITY (BSL POOL)
        </div>
      </Html>

      {/* Dynamic Institutional Displacement Path */}
      <Line
        points={[
          [-6.5, -1.2, 0], [-4.5, 0.4, 0], [-2.5, -0.6, 0], [-0.5, 1.6, 0],
          [1.5, -1.5, 0], [3.5, 0.2, 0], [5.0, 1.9, 0], [6.5, 1.4, 0]
        ]}
        color="#D6B45A"
        lineWidth={2.5}
      />

      {/* Sell-Side Liquidity (SSL) Sweep Line */}
      <Line points={[[-6.5, -1.8, 0], [6.5, -1.8, 0]]} color="#36D39A" lineWidth={1.5} dashed dashScale={12} />
      <Html position={[4.2, -2.05, 0]}>
        <div className="bg-obsidian-950/90 border border-emerald-market/50 text-emerald-market px-2 py-0.5 rounded text-[9px] font-mono tracking-wider font-bold whitespace-nowrap shadow-lg">
          SELL-SIDE LIQUIDITY (SSL POOL)
        </div>
      </Html>

      {/* Particle Flow Field */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.75} sizeAttenuation />
      </points>
    </group>
  );
}

export function ForexFlowField() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <div
      className="w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl border border-crimson/30 bg-gradient-to-b from-[#140406] via-obsidian-950 to-obsidian-950 overflow-hidden relative shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 font-mono text-[10px] sm:text-xs text-cream flex items-center gap-2 max-w-[85%] truncate">
        <span className="w-2 h-2 rounded-full bg-crimson animate-ping shrink-0" />
        <span className="truncate">REACTIVE FLOW FIELD ● INTERACTIVE MOUSE REPULSION ACTIVE</span>
      </div>
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10 font-mono text-[9px] sm:text-[10px] text-stone-400 hidden sm:block">
        MOVE CURSOR TO DISTURB LIQUIDITY CURRENT
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <FlowSystem mouse={mouse} />
      </Canvas>
    </div>
  );
}
