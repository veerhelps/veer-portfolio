import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Candle } from '../../types';
import { eurUsdCandles } from '../../data/forexPairs';

interface ThreeDChartProps {
  candles?: Candle[];
  activePair?: string;
}

function Candle3D({ candle, index, total }: { candle: Candle; index: number; total: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const xPos = (index - total / 2) * 0.45;
  const candleHeight = Math.max(0.2, Math.abs(candle.close - candle.open) * 350);
  const color = candle.isBullish ? '#35D39A' : '#E66A6A';

  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetZ = hovered ? 0.6 : 0;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.1;
    }
  });

  return (
    <group position={[xPos, 0, 0]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        <Box args={[0.25, candleHeight, 0.25]}>
          <meshStandardMaterial
            color={hovered ? '#D6B45A' : color}
            metalness={0.8}
            roughness={0.2}
            emissive={hovered ? '#D6B45A' : color}
            emissiveIntensity={hovered ? 0.8 : 0.3}
          />
        </Box>
        {hovered && (
          <Html distanceFactor={8}>
            <div className="bg-obsidian-950/95 border border-gold/40 p-2.5 rounded-lg text-[10px] font-mono text-stone-200 whitespace-nowrap shadow-2xl backdrop-blur-md pointer-events-none">
              <div className="text-gold font-bold mb-1">{candle.time} CANDLE</div>
              <div>OPEN: <span className="text-stone-300">{candle.open}</span></div>
              <div>HIGH: <span className="text-emerald-market">{candle.high}</span></div>
              <div>LOW: <span className="text-coral-market">{candle.low}</span></div>
              <div>CLOSE: <span className="text-gold font-bold">{candle.close}</span></div>
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
}

export function ThreeDChartScene({ candles = eurUsdCandles, activePair = 'EUR/USD' }: ThreeDChartProps) {
  const [viewType, setViewType] = useState<'CANDLE' | 'LINE' | 'AREA'>('CANDLE');
  const [timeframe, setTimeframe] = useState('15M');

  return (
    <div className="w-full rounded-2xl border border-gold/30 bg-obsidian-900/90 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl gold-glow-md">
      {/* Chart Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 font-mono text-xs border-b border-obsidian-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold font-display text-gold">{activePair}</span>
          <span className="text-[10px] text-emerald-market bg-emerald-market/10 border border-emerald-market/30 px-2 py-0.5 rounded font-bold">
            1.0925 +0.44%
          </span>
        </div>

        {/* View & Timeframe Selectors */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-obsidian-950 p-1 rounded-lg border border-obsidian-800 text-[10px]">
            {(['1M', '5M', '15M', '1H', '4H', '1D'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2.5 py-1 rounded transition ${
                  timeframe === tf ? 'bg-gold-gradient text-obsidian-950 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          <div className="flex bg-obsidian-950 p-1 rounded-lg border border-obsidian-800 text-[10px]">
            {(['CANDLE', 'LINE', 'AREA'] as const).map((v) => (
              <button
                key={v}
                onClick={() => setViewType(v)}
                className={`px-2.5 py-1 rounded transition ${
                  viewType === v ? 'bg-gold/20 text-gold font-bold border border-gold/30' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D WebGL Chart Rendering Canvas */}
      <div className="w-full h-[280px] sm:h-[360px] relative">
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#D6B45A" />
          {candles.map((c, i) => (
            <Candle3D key={i} candle={c} index={i} total={candles.length} />
          ))}
        </Canvas>
      </div>
      
      <div className="mt-2 text-right text-[10px] font-mono text-stone-500">
        INTERACTIVE 3D CANDLESTICKS • HOVER CANDLE TO INSPECT OHLC DATA
      </div>
    </div>
  );
}
