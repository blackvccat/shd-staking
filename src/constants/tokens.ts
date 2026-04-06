/**
 * @file constants/tokens.ts
 * @description 代币信息常量 — 三种核心代币的基础信息定义。
 */
import type { TokenInfo } from "@/types/token";
import {
  SHD_TOKEN_ADDRESS,
  DHC_TOKEN_ADDRESS,
  SCNY_TOKEN_ADDRESS,
} from "./contracts";

/** SHD — 商合道酒类交易平台生态币 */
export const SHD_TOKEN: TokenInfo = {
  name: "商合道生态币",
  symbol: "SHD",
  address: SHD_TOKEN_ADDRESS,
  decimals: 18,
  totalSupplyLabel: "2亿",
  color: "#00D4FF",
};

/** DHC — 帝皇池酱酒 RDA */
export const DHC_TOKEN: TokenInfo = {
  name: "帝皇池酱酒 RDA",
  symbol: "DHC",
  address: DHC_TOKEN_ADDRESS,
  decimals: 18,
  totalSupplyLabel: "10亿",
  color: "#A855F7",
};

/** SCNY — 酒类交易平台法币 */
export const SCNY_TOKEN: TokenInfo = {
  name: "酒类交易平台法币",
  symbol: "SCNY",
  address: SCNY_TOKEN_ADDRESS,
  decimals: 18,
  totalSupplyLabel: "100亿",
  color: "#00FF88",
};

/** 所有代币列表 */
export const ALL_TOKENS = [SHD_TOKEN, DHC_TOKEN, SCNY_TOKEN] as const;
