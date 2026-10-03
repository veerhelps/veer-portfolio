import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Torus, Sphere, Cylinder, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

export interface CurrencyStoryItem {
  code: string;
  name: string;
  label: string;
  bias: string;
  angle: number;
  color: string;
  role: string;
  centralBank: string;
  story: string;
}

export const currencyStories: CurrencyStoryItem[] = [
  {
    code: 'USD',
    name: 'US DOLLAR',
    label: '104.20',
    bias: '+0.28%',
    angle: 0,
    color: '#D6B45A',
    role: 'Global Reserve Benchmark',
    centralBank: 'Federal Reserve (FOMC)',
    story: 'Backbone of 88% of all global currency turnover. Drives international liquidity cycles and global sovereign debt pricing.',
  },
  {
    code: 'EUR',
    name: 'EURO',
    label: '1.0925',
    bias: '+0.44%',
    angle: (Math.PI * 2 * 1) / 5,
    color: '#FAF7F2',
    role: 'Continental Trade Powerhouse',
    centralBank: 'European Central Bank (ECB)',
    story: 'Reflects Eurozone industrial manufacturing surpluses, German Bund yields, and cross-border trade balance equilibrium.',
  },
  {
    code: 'GBP',
    name: 'BRITISH POUND',
    label: '1.2840',
    bias: '+0.48%',
    angle: (Math.PI * 2 * 2) / 5,
    color: '#E5C56C',
    role: 'London Financial Engine',
    centralBank: 'Bank of England (BoE)',
    story: 'Historical merchant cornerstone. Highly sensitive to UK Gilt yield divergence and the institutional 16:00 London Fix.',
  },
  {
    code: 'JPY',
    name: 'JAPANESE YEN',
    label: '153.20',
    bias: '-0.55%',
    angle: (Math.PI * 2 * 3) / 5,
    color: '#B51E25',
    role: 'Sovereign Haven & Carry Funder',
    centralBank: 'Bank of Japan (BoJ)',
    story: 'Key global risk barometer and carry trade liquidity fuel. Reacts aggressively to sovereign spread contractions.',
  },
  {
    code: 'CHF',
    name: 'SWISS FRANC',
    label: '0.8845',
    bias: '+0.15%',
    angle: (Math.PI * 2 * 4) / 5,
    color: '#1EC1CB',
    role: 'Neutral Fortress of Capital',
    centralBank: 'Swiss National Bank (SNB)',
    story: 'The premier geopolitical safe haven. Preserved by sovereign gold holdings, low inflation, and external surplus discipline.',
  },
];

interface CurrencyEyeProps {
  selectedCode: string;
  onSelectCode: (code: string) => void;
}

function CurrencyEye({ selectedCode, onSelectCode }: CurrencyEyeProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const irisRef = useRef<THREE.Mesh>(null!);
  const { camera } = useThree();

  const selectedCurrency = currencyStories.find((c) => c.code === selectedCode) || currencyStories[0];

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Rotate group smoothly toward target currency angle
      const targetRotationY = -selectedCurrency.angle;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.1;
    }
    if (torusRef.current) torusRef.current.rotation.z += delta * 0.18;
    if (irisRef.current) irisRef.current.rotation.y -= delta * 0.25;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Golden Iris Bezel */}
      <mesh ref={torusRef}>
        <Torus args={[1.7, 0.07, 24, 64]}>
          <meshStandardMaterial
            color="#D6B45A"
            metalness={0.96}
            roughness={0.12}
            emissive="#45340C"
            emissiveIntensity={0.5}
          />
        </Torus>
      </mesh>

      {/* Crimson Meridian Ring */}
      <Torus args={[1.9, 0.025, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#B51E25" transparent opacity={0.65} />
      </Torus>

      {/* Central Oculus Pupil */}
      <mesh ref={irisRef}>
        <Sphere args={[0.9, 32, 32]}>
          <meshStandardMaterial color="#060606" metalness={0.88} roughness={0.2} wireframe />
        </Sphere>
        <Cylinder args={[0.3, 0.3, 0.4, 24]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#FAF7F2"
            metalness={0.92}
            roughness={0.1}
            emissive="#D6B45A"
            emissiveIntensity={0.65}
          />
        </Cylinder>
      </mesh>

      {/* 5 Interactive Currency Nodes (USD, EUR, GBP, JPY, CHF) */}
      {currencyStories.map((m) => {
        const radius = 2.45;
        const x = Math.cos(m.angle) * radius;
        const z = Math.sin(m.angle) * radius;
        const isSelected = m.code === selectedCode;

        return (
          <group
            key={m.code}
            position={[x, 0, z]}
            onClick={(e) => {
              e.stopPropagation();
              onSelectCode(m.code);
            }}
          >
            {/* Clickable Node Sphere */}
            <Sphere args={[isSelected ? 0.16 : 0.1, 16, 16]}>
              <meshStandardMaterial
                color={m.color}
                emissive={m.color}
                emissiveIntensity={isSelected ? 1.0 : 0.55}
                metalness={0.9}
                roughness={0.1}
              />
            </Sphere>

            {/* Floating Marker Label */}
            <Html distanceFactor={8} position={[0, 0.32, 0]}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCode(m.code);
                }}
                className={`px-2.5 py-1 rounded-md text-[10px] font-mono whitespace-nowrap shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-obsidian-950 border-2 border-gold text-cream scale-110 shadow-[0_0_15px_rgba(214,180,90,0.5)]'
                    : 'bg-obsidian-950/85 border border-white/10 text-stone-300 hover:border-gold/50'
                }`}
              >
                <span className="font-bold text-gold">{m.code}</span>
                <span className="text-cream">{m.label}</span>
                <span className="text-[9px] text-emerald-market">{m.bias}</span>
              </button>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

interface CurrencyWatching3DProps {
  selectedCurrency: string;
  onSelectCurrency: (code: string) => void;
}

export function CurrencyWatching3D({ selectedCurrency, onSelectCurrency }: CurrencyWatching3DProps) {
  return (
    <div className="w-full h-[320px] sm:h-[400px] md:h-[460px] relative cursor-pointer" data-cursor="EXPLORE">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FAF7F2" />
        <pointLight position={[-4, -4, -2]} intensity={1.1} color="#D6B45A" />
        <pointLight position={[3, -3, 2]} intensity={0.8} color="#B51E25" />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <CurrencyEye selectedCode={selectedCurrency} onSelectCode={onSelectCurrency} />
        </Float>
      </Canvas>
    </div>
  );
}
