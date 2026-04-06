/**
 * @file components/ui/Button.tsx
 * @description 通用按钮组件 — 科幻风格，支持多种变体和尺寸。
 */
"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

/** 按钮变体样式映射 */
const VARIANTS = {
  primary:
    "bg-gradient-to-r from-cyber-blue to-cyber-purple text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] active:scale-[0.98]",
  secondary:
    "border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 active:scale-[0.98]",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-white/5",
  danger:
    "bg-error/20 border border-error/30 text-error hover:bg-error/30",
} as const;

/** 按钮尺寸样式映射 */
const SIZES = {
  sm: "px-3 py-1.5 text-xs rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-3.5 text-base rounded-xl",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  loading?: boolean;
  children: ReactNode;
}

/**
 * Button — 科幻风格通用按钮
 * @param variant - 按钮变体: primary / secondary / ghost / danger
 * @param size - 按钮尺寸: sm / md / lg
 * @param loading - 是否显示加载状态
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
        </svg>
      )}
      {children}
    </button>
  );
}
