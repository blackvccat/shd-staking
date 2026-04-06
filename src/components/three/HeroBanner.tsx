/**
 * @file components/three/HeroBanner.tsx
 * @description 首页 3D 科幻 Banner 入口组件。
 *   组合 Canvas、水晶模型、粒子场、后处理效果，
 *   构成完整的 3D 交互场景。
 */
"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CrystalModel } from "./CrystalModel";
import { ParticleField } from "./ParticleField";
import { SciFiEnvironment } from "./SciFiEnvironment";

/**
 * HeroBanner — 首页 3D Banner
 * 占据视口 80vh 高度，包含交互式 3D 场景
 */
export function HeroBanner() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Three.js Canvas 画布 */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* 科幻环境光照 */}
          <SciFiEnvironment />

          {/* 核心水晶模型 */}
          <CrystalModel />

          {/* 背景粒子场 — 双层叠加 */}
          <ParticleField count={400} radius={8} color="#00D4FF" />
          <ParticleField count={200} radius={6} color="#A855F7" />

          {/* 后处理效果 — 辉光 */}
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>

          {/* 自适应分辨率（低端设备降级） */}
          <AdaptiveDpr pixelated />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* 覆盖在 3D 场景上的文字内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="gradient-text text-glow-blue">SHD Staking</span>
        </h1>
        <p className="mb-8 max-w-lg text-center text-lg text-text-secondary sm:text-xl">
          商合道酒类交易平台 · 质押生态系统
        </p>
        <div className="pointer-events-auto">
          <a
            href="/staking"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple px-8 py-3.5 text-base font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] active:scale-[0.98]"
          >
            开始质押
            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* 底部渐变淡出 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent" />
    </div>
  );
}
