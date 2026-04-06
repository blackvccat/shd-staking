/**
 * @file components/ui/Badge.tsx
 * @description 徽章组件 — 用于状态标签、等级标识等。
 */
import { type ReactNode } from "react";

const VARIANTS = {
  blue: "bg-cyber-blue/15 text-cyber-blue border-cyber-blue/30",
  purple: "bg-cyber-purple/15 text-cyber-purple border-cyber-purple/30",
  green: "bg-neon-green/15 text-neon-green border-neon-green/30",
  orange: "bg-amber-orange/15 text-amber-orange border-amber-orange/30",
  gray: "bg-white/10 text-text-secondary border-white/20",
} as const;

interface BadgeProps {
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
}

/**
 * Badge — 状态徽章
 * @param variant - 颜色变体
 */
export function Badge({ variant = "blue", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
