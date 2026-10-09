import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Torus, Sphere, Cylinder, Float } from '@react-three/drei';
import * as THREE from 'three';
import { MarketSpecimen } from '../../data/marketArtifacts';

interface MarketArtifact3DProps {
  selectedItem: MarketSpecimen;
  onSelectItem: (item: MarketSpecimen) => void;
  items: MarketSpecimen[];
}

/**
 * 3D Oculus Core Scene:
 * - Scaled for maximum elegance and generous negative space
 * - Thin gold torus ring with continuous rotational drift
 * - Tilted burgundy meridian ring
 * - 4 Symmetrical Quadrant Anchor Beads:
 *   XAU (45°), BTC (135°), XAG (225°), ETH (315°)
 * - Living traveling particle node that glides smoothly to the selected asset
 * - Subtle cursor parallax
 */
function OculusCore({ selectedItem }: { selectedItem: MarketSpecimen }) {
  const groupRef = useRef<THREE.Group>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);
  const travelingNodeRef = useRef<THREE.Mesh>(null!);
  const currentAngleRef = useRef<number>(selectedItem.angle);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Slow, hypnotic rotational drift of the outer gold torus ring
    if (torusRef.current) {
      torusRef.current.rotation.z += delta * 0.07;
    }

    // 2. Slow subtle counter-rotation of the inner wireframe sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.05;
    }

    // 3. Subtle pointer parallax (3-5px response)
    if (groupRef.current) {
      const targetRotX = pointer.y * 0.07 + Math.sin(t * 0.2) * 0.03;
      const targetRotY = pointer.x * 0.08 + Math.cos(t * 0.25) * 0.03;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );
    }

    // 4. Living Traveling Orbital Node (Requirement 23):
    // Smoothly travels along the orbital path and settles at the selected instrument
    currentAngleRef.current = THREE.MathUtils.lerp(
      currentAngleRef.current,
      selectedItem.angle,
      0.045
    );

    if (travelingNodeRef.current) {
      const radius = 1.22;
      const x = Math.cos(currentAngleRef.current) * radius;
      const y = Math.sin(currentAngleRef.current) * radius;
      travelingNodeRef.current.position.set(x, y, 0);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Slender Gold Orbital Ring (Scaled to 1.22 to eliminate card overlap) */}
      <mesh ref={torusRef}>
        <Torus args={[1.22, 0.028, 24, 80]}>
          <meshStandardMaterial
            color="#D6B45A"
            metalness={0.96}
            roughness={0.14}
            emissive="#35260A"
            emissiveIntensity={0.4}
          />
        </Torus>
      </mesh>

      {/* 2. Delicate Crimson Meridian Ring (Tilted at 60 deg) */}
      <Torus args={[1.4, 0.012, 16, 80]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#8B1D24" transparent opacity={0.45} />
      </Torus>

      {/* 3. Central Wireframe Sphere */}
      <mesh ref={sphereRef}>
        <Sphere args={[0.52, 22, 22]}>
          <meshStandardMaterial
            color="#07090E"
            metalness={0.92}
            roughness={0.35}
            wireframe
          />
        </Sphere>

        {/* Center Optical Core Disc */}
        <Cylinder args={[0.16, 0.16, 0.24, 24]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#FAF7F2"
            metalness={0.94}
            roughness={0.1}
            emissive={selectedItem.theme.threeColor}
            emissiveIntensity={0.8}
          />
        </Cylinder>
      </mesh>

      {/* 4. Four Symmetrical Quadrant Orbital Anchor Beads */}
      {/* Upper-Right (XAU - Gold, 45°) */}
      <mesh position={[0.86, 0.86, 0]}>
        <Sphere args={[0.038, 16, 16]}>
          <meshStandardMaterial
            color="#D6B45A"
            emissive="#D6B45A"
            emissiveIntensity={selectedItem.id === 'xauusd' ? 1.4 : 0.4}
            metalness={0.9}
          />
        </Sphere>
      </mesh>

      {/* Upper-Left (BTC - Bitcoin, 135°) */}
      <mesh position={[-0.86, 0.86, 0]}>
        <Sphere args={[0.038, 16, 16]}>
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={selectedItem.id === 'btcusd' ? 1.4 : 0.4}
            metalness={0.9}
          />
        </Sphere>
      </mesh>

      {/* Lower-Left (XAG - Silver, 225°) */}
      <mesh position={[-0.86, -0.86, 0]}>
        <Sphere args={[0.038, 16, 16]}>
          <meshStandardMaterial
            color="#CBD5E1"
            emissive="#CBD5E1"
            emissiveIntensity={selectedItem.id === 'xagusd' ? 1.4 : 0.4}
            metalness={0.9}
          />
        </Sphere>
      </mesh>

      {/* Lower-Right (ETH - Ethereum, 315°) */}
      <mesh position={[0.86, -0.86, 0]}>
        <Sphere args={[0.038, 16, 16]}>
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={selectedItem.id === 'ethusd' ? 1.4 : 0.4}
            metalness={0.9}
          />
        </Sphere>
      </mesh>

      {/* 5. Living Travelling Node (glides along ring and settles at selected instrument) */}
      <mesh ref={travelingNodeRef} position={[0.86, 0.86, 0]}>
        <Sphere args={[0.048, 16, 16]}>
          <meshStandardMaterial
            color={selectedItem.theme.threeColor}
            emissive={selectedItem.theme.threeColor}
            emissiveIntensity={1.5}
            metalness={0.95}
          />
        </Sphere>
      </mesh>
    </group>
  );
}

export function MarketArtifact3D({
  selectedItem,
  onSelectItem,
  items,
}: MarketArtifact3DProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const xauItem = items.find((i) => i.id === 'xauusd') || items[0];
  const btcItem = items.find((i) => i.id === 'btcusd') || items[1];
  const xagItem = items.find((i) => i.id === 'xagusd') || items[2];
  const ethItem = items.find((i) => i.id === 'ethusd') || items[3];

  return (
    <div
      className="w-full relative flex flex-col items-center select-none"
      role="region"
      aria-label="Interactive Market Relationship Artifact"
    >
      {/* Dynamic Atmospheric Luminous Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] md:w-[520px] h-[340px] sm:h-[460px] md:h-[520px] rounded-full blur-[130px] pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: selectedItem.theme.ambientGradient,
          opacity: 0.8,
        }}
      />

      {/* ======================================================== */}
      {/* DESKTOP / TABLET OVERLAY COMPOSITION (md and above)      */}
      {/* 4-Quadrant Symmetrical Layout with Ample Negative Space  */}
      {/* ======================================================== */}
      <div className="hidden md:block relative w-full h-[560px] lg:h-[600px]">
        {/* 3D WebGL Canvas centered in composition */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 38 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="w-full h-full cursor-pointer"
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.3} color="#FAF7F2" />
            <pointLight
              position={[0, 0, 3]}
              intensity={1.2}
              color={selectedItem.theme.accentHex}
            />
            <pointLight position={[0, -4, 2]} intensity={0.4} color="#8B1D24" />
            <Float speed={1.1} rotationIntensity={0.07} floatIntensity={0.1}>
              <OculusCore selectedItem={selectedItem} />
            </Float>
          </Canvas>
        </div>

        {/* -------------------------------------------------------- */}
        {/* TOP-RIGHT: XAU/USD (Gold / US Dollar)                    */}
        {/* -------------------------------------------------------- */}
        <div
          onClick={() => onSelectItem(xauItem)}
          onMouseEnter={() => setHoveredId('xauusd')}
          onMouseLeave={() => setHoveredId(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectItem(xauItem)}
          className={`absolute top-2 right-1 lg:right-3 xl:right-5 z-20 w-[215px] lg:w-[230px] cursor-pointer transition-all duration-300 p-3.5 sm:p-4 rounded-xl border backdrop-blur-xl ${
            selectedItem.id === 'xauusd'
              ? 'bg-obsidian-950/95 border-gold/80 shadow-[0_0_28px_rgba(214,180,90,0.25)] ring-1 ring-gold/30 -translate-y-0.5'
              : 'bg-obsidian-950/75 border-white/10 hover:border-gold/40 hover:bg-obsidian-950/90'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                selectedItem.id === 'xauusd'
                  ? 'bg-gold shadow-[0_0_8px_#D6B45A] animate-pulse'
                  : 'bg-stone-500'
              }`}
            />
            <span className="font-mono text-[8.5px] uppercase tracking-widest text-gold/90 font-bold">
              {xauItem.categoryBadge}
            </span>
          </div>

          <h3
            className={`font-display font-black text-xl lg:text-2xl tracking-tight leading-none ${
              selectedItem.id === 'xauusd' ? 'text-cream' : 'text-stone-300'
            }`}
          >
            {xauItem.code}
          </h3>

          <p className="font-mono text-[9.5px] uppercase tracking-wider text-stone-400 font-semibold mt-1 mb-1.5">
            {xauItem.name}
          </p>

          <p className="font-sans text-[11px] text-stone-300 font-light leading-relaxed italic">
            “{xauItem.tagline}”
          </p>

          {/* Thin Symmetrical Connector Line pointing down-left to XAU orbital node */}
          <svg
            className="absolute -bottom-7 left-4 w-12 h-10 overflow-visible pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <path
              d="M 12 0 L 12 14 L -20 36"
              fill="none"
              stroke={selectedItem.id === 'xauusd' ? '#D6B45A' : 'rgba(255,255,255,0.18)'}
              strokeWidth="1.2"
              strokeDasharray={selectedItem.id === 'xauusd' ? 'none' : '3 2'}
              className="transition-colors duration-300"
            />
            <circle
              cx="-20"
              cy="36"
              r="2.5"
              fill={selectedItem.id === 'xauusd' ? '#D6B45A' : 'rgba(255,255,255,0.3)'}
              className="transition-colors duration-300"
            />
          </svg>
        </div>

        {/* -------------------------------------------------------- */}
        {/* TOP-LEFT: BTC/USD (Bitcoin / US Dollar)                  */}
        {/* -------------------------------------------------------- */}
        <div
          onClick={() => onSelectItem(btcItem)}
          onMouseEnter={() => setHoveredId('btcusd')}
          onMouseLeave={() => setHoveredId(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectItem(btcItem)}
          className={`absolute top-2 left-1 lg:left-3 xl:left-5 z-20 w-[215px] lg:w-[230px] cursor-pointer transition-all duration-300 p-3.5 sm:p-4 rounded-xl border backdrop-blur-xl ${
            selectedItem.id === 'btcusd'
              ? 'bg-obsidian-950/95 border-amber-400/80 shadow-[0_0_28px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/30 -translate-y-0.5'
              : 'bg-obsidian-950/75 border-white/10 hover:border-amber-400/40 hover:bg-obsidian-950/90'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                selectedItem.id === 'btcusd'
                  ? 'bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse'
                  : 'bg-stone-500'
              }`}
            />
            <span className="font-mono text-[8.5px] uppercase tracking-widest text-amber-400/90 font-bold">
              {btcItem.categoryBadge}
            </span>
          </div>

          <h3
            className={`font-display font-black text-xl lg:text-2xl tracking-tight leading-none ${
              selectedItem.id === 'btcusd' ? 'text-cream' : 'text-stone-300'
            }`}
          >
            {btcItem.code}
          </h3>

          <p className="font-mono text-[9.5px] uppercase tracking-wider text-stone-400 font-semibold mt-1 mb-1.5">
            {btcItem.name}
          </p>

          <p className="font-sans text-[11px] text-stone-300 font-light leading-relaxed italic">
            “{btcItem.tagline}”
          </p>

          {/* Thin Symmetrical Connector Line pointing down-right to BTC orbital node */}
          <svg
            className="absolute -bottom-7 right-4 w-12 h-10 overflow-visible pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <path
              d="M 0 0 L 0 14 L 32 36"
              fill="none"
              stroke={selectedItem.id === 'btcusd' ? '#F59E0B' : 'rgba(255,255,255,0.18)'}
              strokeWidth="1.2"
              strokeDasharray={selectedItem.id === 'btcusd' ? 'none' : '3 2'}
              className="transition-colors duration-300"
            />
            <circle
              cx="32"
              cy="36"
              r="2.5"
              fill={selectedItem.id === 'btcusd' ? '#F59E0B' : 'rgba(255,255,255,0.3)'}
              className="transition-colors duration-300"
            />
          </svg>
        </div>

        {/* -------------------------------------------------------- */}
        {/* BOTTOM-LEFT: XAG/USD (Silver / US Dollar)                */}
        {/* -------------------------------------------------------- */}
        <div
          onClick={() => onSelectItem(xagItem)}
          onMouseEnter={() => setHoveredId('xagusd')}
          onMouseLeave={() => setHoveredId(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectItem(xagItem)}
          className={`absolute bottom-10 left-1 lg:left-3 xl:left-5 z-20 w-[215px] lg:w-[230px] cursor-pointer transition-all duration-300 p-3.5 sm:p-4 rounded-xl border backdrop-blur-xl ${
            selectedItem.id === 'xagusd'
              ? 'bg-obsidian-950/95 border-slate-300/80 shadow-[0_0_28px_rgba(203,213,225,0.25)] ring-1 ring-slate-300/30 -translate-y-0.5'
              : 'bg-obsidian-950/75 border-white/10 hover:border-slate-400/40 hover:bg-obsidian-950/90'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                selectedItem.id === 'xagusd'
                  ? 'bg-slate-300 shadow-[0_0_8px_#CBD5E1] animate-pulse'
                  : 'bg-stone-500'
              }`}
            />
            <span className="font-mono text-[8.5px] uppercase tracking-widest text-slate-300/90 font-bold">
              {xagItem.categoryBadge}
            </span>
          </div>

          <h3
            className={`font-display font-black text-xl lg:text-2xl tracking-tight leading-none ${
              selectedItem.id === 'xagusd' ? 'text-cream' : 'text-stone-300'
            }`}
          >
            {xagItem.code}
          </h3>

          <p className="font-mono text-[9.5px] uppercase tracking-wider text-stone-400 font-semibold mt-1 mb-1.5">
            {xagItem.name}
          </p>

          <p className="font-sans text-[11px] text-stone-300 font-light leading-relaxed italic">
            “{xagItem.tagline}”
          </p>

          {/* Thin Symmetrical Connector Line pointing up-right to silver orbital node */}
          <svg
            className="absolute -top-7 right-4 w-12 h-10 overflow-visible pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <path
              d="M 0 20 L 0 6 L 32 -16"
              fill="none"
              stroke={selectedItem.id === 'xagusd' ? '#CBD5E1' : 'rgba(255,255,255,0.18)'}
              strokeWidth="1.2"
              strokeDasharray={selectedItem.id === 'xagusd' ? 'none' : '3 2'}
              className="transition-colors duration-300"
            />
            <circle
              cx="32"
              cy="-16"
              r="2.5"
              fill={selectedItem.id === 'xagusd' ? '#CBD5E1' : 'rgba(255,255,255,0.3)'}
              className="transition-colors duration-300"
            />
          </svg>
        </div>

        {/* -------------------------------------------------------- */}
        {/* BOTTOM-RIGHT: ETH/USD (Ethereum / US Dollar)             */}
        {/* -------------------------------------------------------- */}
        <div
          onClick={() => onSelectItem(ethItem)}
          onMouseEnter={() => setHoveredId('ethusd')}
          onMouseLeave={() => setHoveredId(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelectItem(ethItem)}
          className={`absolute bottom-10 right-1 lg:right-3 xl:right-5 z-20 w-[215px] lg:w-[230px] cursor-pointer transition-all duration-300 p-3.5 sm:p-4 rounded-xl border backdrop-blur-xl ${
            selectedItem.id === 'ethusd'
              ? 'bg-obsidian-950/95 border-cyan-400/80 shadow-[0_0_28px_rgba(0,240,255,0.25)] ring-1 ring-cyan-400/30 -translate-y-0.5'
              : 'bg-obsidian-950/75 border-white/10 hover:border-cyan-400/40 hover:bg-obsidian-950/90'
          }`}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                selectedItem.id === 'ethusd'
                  ? 'bg-cyan-400 shadow-[0_0_8px_#00F0FF] animate-pulse'
                  : 'bg-stone-500'
              }`}
            />
            <span className="font-mono text-[8.5px] uppercase tracking-widest text-cyan-400/90 font-bold">
              {ethItem.categoryBadge}
            </span>
          </div>

          <h3
            className={`font-display font-black text-xl lg:text-2xl tracking-tight leading-none ${
              selectedItem.id === 'ethusd' ? 'text-cream' : 'text-stone-300'
            }`}
          >
            {ethItem.code}
          </h3>

          <p className="font-mono text-[9.5px] uppercase tracking-wider text-stone-400 font-semibold mt-1 mb-1.5">
            {ethItem.name}
          </p>

          <p className="font-sans text-[11px] text-stone-300 font-light leading-relaxed italic">
            “{ethItem.tagline}”
          </p>

          {/* Thin Symmetrical Connector Line pointing up-left to ETH orbital node */}
          <svg
            className="absolute -top-7 left-4 w-12 h-10 overflow-visible pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <path
              d="M 12 20 L 12 6 L -20 -16"
              fill="none"
              stroke={selectedItem.id === 'ethusd' ? '#00F0FF' : 'rgba(255,255,255,0.18)'}
              strokeWidth="1.2"
              strokeDasharray={selectedItem.id === 'ethusd' ? 'none' : '3 2'}
              className="transition-colors duration-300"
            />
            <circle
              cx="-20"
              cy="-16"
              r="2.5"
              fill={selectedItem.id === 'ethusd' ? '#00F0FF' : 'rgba(255,255,255,0.3)'}
              className="transition-colors duration-300"
            />
          </svg>
        </div>

        {/* -------------------------------------------------------- */}
        {/* SUBTLE CONTEXT LABEL (Dedicated Bottom Position)         */}
        {/* -------------------------------------------------------- */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-stone-400 bg-obsidian-950/90 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-gold/80" />
          <span className="font-semibold text-stone-300">RELATIONSHIP MATRIX</span>
          <span className="text-stone-600">//</span>
          <span className="text-cream font-bold">METALS & CRYPTO ↔ USD</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE CLEAN COMPOSITION (< md screens)                  */}
      {/* 2x2 Grid of Instruments flanking the 3D Artifact         */}
      {/* ======================================================== */}
      <div className="flex md:hidden flex-col w-full space-y-3.5">
        {/* Top 2 Cards: BTC & XAU */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* BTC */}
          <div
            onClick={() => onSelectItem(btcItem)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              selectedItem.id === 'btcusd'
                ? 'bg-obsidian-950/95 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                : 'bg-obsidian-950/70 border-white/10'
            }`}
          >
            <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block mb-0.5">
              {btcItem.categoryBadge}
            </span>
            <h4 className="font-display font-black text-base text-cream leading-tight">
              {btcItem.code}
            </h4>
            <p className="font-mono text-[9px] text-stone-400 uppercase truncate">
              {btcItem.shortLabel}
            </p>
          </div>

          {/* XAU */}
          <div
            onClick={() => onSelectItem(xauItem)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              selectedItem.id === 'xauusd'
                ? 'bg-obsidian-950/95 border-gold/60 shadow-[0_0_15px_rgba(214,180,90,0.25)]'
                : 'bg-obsidian-950/70 border-white/10'
            }`}
          >
            <span className="font-mono text-[8px] uppercase tracking-widest text-gold block mb-0.5">
              {xauItem.categoryBadge}
            </span>
            <h4 className="font-display font-black text-base text-cream leading-tight">
              {xauItem.code}
            </h4>
            <p className="font-mono text-[9px] text-stone-400 uppercase truncate">
              {xauItem.shortLabel}
            </p>
          </div>
        </div>

        {/* Center: 3D Artifact Canvas */}
        <div className="w-full h-[270px] relative flex items-center justify-center overflow-hidden">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            className="w-full h-full"
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.3} color="#FAF7F2" />
            <pointLight position={[0, 0, 3]} intensity={1.2} color={selectedItem.theme.accentHex} />
            <Float speed={1.1} rotationIntensity={0.07} floatIntensity={0.1}>
              <OculusCore selectedItem={selectedItem} />
            </Float>
          </Canvas>
        </div>

        {/* Bottom 2 Cards: XAG & ETH */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* XAG */}
          <div
            onClick={() => onSelectItem(xagItem)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              selectedItem.id === 'xagusd'
                ? 'bg-obsidian-950/95 border-slate-300/60 shadow-[0_0_15px_rgba(203,213,225,0.25)]'
                : 'bg-obsidian-950/70 border-white/10'
            }`}
          >
            <span className="font-mono text-[8px] uppercase tracking-widest text-slate-300 block mb-0.5">
              {xagItem.categoryBadge}
            </span>
            <h4 className="font-display font-black text-base text-cream leading-tight">
              {xagItem.code}
            </h4>
            <p className="font-mono text-[9px] text-stone-400 uppercase truncate">
              {xagItem.shortLabel}
            </p>
          </div>

          {/* ETH */}
          <div
            onClick={() => onSelectItem(ethItem)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              selectedItem.id === 'ethusd'
                ? 'bg-obsidian-950/95 border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                : 'bg-obsidian-950/70 border-white/10'
            }`}
          >
            <span className="font-mono text-[8px] uppercase tracking-widest text-cyan-400 block mb-0.5">
              {ethItem.categoryBadge}
            </span>
            <h4 className="font-display font-black text-base text-cream leading-tight">
              {ethItem.code}
            </h4>
            <p className="font-mono text-[9px] text-stone-400 uppercase truncate">
              {ethItem.shortLabel}
            </p>
          </div>
        </div>

        {/* Mobile Context Label */}
        <div className="w-full flex items-center justify-center gap-2 font-mono text-[9px] tracking-widest uppercase text-stone-400 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gold/80" />
          <span>RELATIONSHIP MATRIX // METALS & CRYPTO ↔ USD</span>
        </div>
      </div>
    </div>
  );
}
