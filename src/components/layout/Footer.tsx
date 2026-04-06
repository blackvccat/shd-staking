/**
 * @file components/layout/Footer.tsx
 * @description 页面底部组件。
 *   展示版权信息和外部链接（区块浏览器、公链官网、钱包下载）。
 */
import { siteConfig } from "@/config/site";

/**
 * Footer — 页面底部
 */
export function Footer() {
  return (
    <footer className="border-t border-card-border bg-deep-space/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* 版权信息 */}
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* 外部链接 */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.explorer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-cyber-blue"
            >
              区块浏览器
            </a>
            <a
              href={siteConfig.links.chainWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-cyber-blue"
            >
              公链官网
            </a>
            <a
              href={siteConfig.links.walletDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-cyber-blue"
            >
              钱包下载
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
