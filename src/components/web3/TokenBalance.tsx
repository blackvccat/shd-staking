/**
 * @file components/web3/TokenBalance.tsx
 * @description 代币余额展示组件 — 展示指定代币的余额，带加载状态。
 */
"use client";

import { useTokenBalance } from "@/hooks/token/useTokenBalance";
import { Skeleton } from "@/components/ui/Loading";
import { formatTokenAmount } from "@/utils/format";

interface TokenBalanceProps {
  /** 代币合约地址 */
  tokenAddress: `0x${string}`;
  /** 代币符号（用于显示） */
  symbol: string;
  /** 代币精度 */
  decimals?: number;
  className?: string;
}

/**
 * TokenBalance — 代币余额展示
 * @param tokenAddress - ERC20 合约地址
 * @param symbol - 代币符号
 * @param decimals - 精度，默认 18
 */
export function TokenBalance({
  tokenAddress,
  symbol,
  decimals = 18,
  className = "",
}: TokenBalanceProps) {
  const { balance, isLoading } = useTokenBalance(tokenAddress);

  if (isLoading) {
    return <Skeleton className="h-6 w-24" />;
  }

  return (
    <span className={`font-mono ${className}`}>
      {formatTokenAmount(balance ?? BigInt(0), decimals)} {symbol}
    </span>
  );
}
