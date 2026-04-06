/**
 * @file components/ui/Tabs.tsx
 * @description 选项卡组件 — 用于质押周期选择等场景。
 */
"use client";

interface TabItem {
  /** 唯一标识 */
  key: string;
  /** 显示标签 */
  label: string;
}

interface TabsProps {
  /** 选项列表 */
  items: TabItem[];
  /** 当前选中的 key */
  activeKey: string;
  /** 切换回调 */
  onChange: (key: string) => void;
  className?: string;
}

/**
 * Tabs — 选项卡切换
 * @param items - 选项列表
 * @param activeKey - 当前激活的选项 key
 * @param onChange - 切换时触发回调
 */
export function Tabs({ items, activeKey, onChange, className = "" }: TabsProps) {
  return (
    <div className={`inline-flex rounded-xl border border-card-border bg-white/5 p-1 ${className}`}>
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 text-cyber-blue shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
