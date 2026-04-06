/**
 * @file config/site.ts
 * @description 站点元信息配置 — 项目名称、描述、外部链接等。
 */

export const siteConfig = {
  /** 站点名称 */
  name: "SHD Staking",
  /** 站点描述 */
  description: "商合道酒类交易平台 — SHD 质押生态系统",
  /** 外部链接 */
  links: {
    /** 公链官网 */
    chainWebsite: "https://website.bjwmls.com/",
    /** 区块浏览器 */
    explorer: "https://block.bjwmls.com",
    /** SWAP 接口地址 */
    swapApi: "https://test-swap.bjwmls.com",
    /** 钱包下载 */
    walletDownload: "https://oss.bjwmls.com/cross/app-release.apk",
  },
} as const;
