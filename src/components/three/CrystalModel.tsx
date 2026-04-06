/**
 * @file components/three/CrystalModel.tsx
 * @description 科幻水晶模型组件。
 *   一个发光旋转的二十面体几何体，代表 SHD 代币。
 *   支持鼠标交互 — 跟随鼠标位置微微偏转。
 */
"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * CrystalModel — 发光旋转水晶
 * 核心视觉元素，使用扭曲材质增加科幻质感
 */
export function CrystalModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  // 每帧更新：自动旋转 + 鼠标跟随
  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // 基础自转
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.z += delta * 0.1;

    // 鼠标跟随偏转（使用线性插值平滑过渡）
    const targetX = pointer.y * 0.3;
    const targetY = pointer.x * 0.3;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetX,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetY,
      0.05
    );
  });

  return (
    <group>
      {/* 主水晶体 */}
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00D4FF"
          emissive="#0066AA"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
          distort={0.2}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* 内部发光核心 */}
      <mesh scale={0.8}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color="#00D4FF"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* 外圈光环 */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={2.5}>
        <ringGeometry args={[0.95, 1, 64]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
