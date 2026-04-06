/**
 * @file components/three/SciFiEnvironment.tsx
 * @description 科幻环境光照组件。
 *   配置场景的光照环境，使用冷色调灯光营造科幻氛围。
 */
"use client";

/**
 * SciFiEnvironment — 科幻场景光照
 * 包含环境光、方向光和点光源
 */
export function SciFiEnvironment() {
  return (
    <>
      {/* 低强度环境光 — 基础照明 */}
      <ambientLight intensity={0.15} color="#4488FF" />

      {/* 主方向光 — 从右上方照射 */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        color="#00D4FF"
      />

      {/* 补光 — 从左下方照射，紫色调 */}
      <directionalLight
        position={[-3, -2, -3]}
        intensity={0.3}
        color="#A855F7"
      />

      {/* 点光源 — 模拟核心发光 */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        color="#00D4FF"
        distance={10}
        decay={2}
      />
    </>
  );
}
