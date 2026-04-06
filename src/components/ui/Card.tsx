/**
 * @file components/ui/Card.tsx
 * @description 卡片组件 — 支持两种变体:
 *   1. "glass" (默认) — 玻璃拟态: 半透明背景 + 模糊 + 微光边框 + 圆角
 *   2. "cyber" — 赛博切角: 平行四边形切角 + 渐变边框 + 深色背景，科幻感强
 */
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** 卡片变体: glass (默认圆角玻璃) | cyber (切角平行四边形) */
  variant?: "glass" | "cyber";
  /** 是否启用悬停发光效果 (仅 glass 变体生效) */
  hover?: boolean;
}

/**
 * Card — 通用卡片容器
 * @param variant - "glass" 玻璃拟态 | "cyber" 赛博切角平行四边形
 * @param hover - glass 变体下启用悬停发光
 */
export function Card({ children, className = "", variant = "glass", hover = false }: CardProps) {
  // 赛博切角变体 — 双层结构实现渐变边框
  if (variant === "cyber") {
    return (
      <div className={`cyber-clip-card ${className}`}>
        <div className="cyber-clip-card-inner">
          {children}
        </div>
      </div>
    );
  }

  // 默认玻璃拟态变体
  return (
    <div
      className={`glass-card p-6 ${hover ? "glass-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
