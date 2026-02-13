# Personal Website - Backend + AI Engineer

This is a **Next.js + TailwindCSS portfolio** for a L5 engineer designed for FAANG interviewers.

## Design Decisions

- **Dark theme only**：符合現代工程師閱讀偏好，減少眼睛疲勞
- **極簡視覺**：移除陰影、大圓角、過多顏色，聚焦文字與數字
- **輕量動畫**：僅保留 metrics 數字增長動畫，展開收合使用 opacity 轉場
- **無狀態導航**：單頁式 + 平滑滾動，無需複雜路由
- **靜態匯出**：使用 Next.js `output: 'export'` + GitHub Pages 部署，零伺服器成本

## Features

- Amazon Leadership Principles projects
- Google-style Narrative projects
- Metrics dynamic animation
- Collapsible STAR / Narrative cards
- 30-second quick scan mode
- Demo & GitHub links
- TailwindCSS layout

## Performance Metrics

- Lighthouse 分數（預估）：Performance 95+ / Accessibility 100 / Best Practices 100 / SEO 90+
- Bundle 大小：~120–150 KB gzipped（極簡設計）
- FCP / LCP：通常 < 1.2s（GitHub Pages CDN）

## Accessibility Strategy

- 高對比文字（白/淺灰 vs 黑底）
- 鍵盤可操作（點擊展開 / 連結）
- 語意化 HTML（h1, h2, strong）
- aria-label 可加在必要連結（目前簡化版）

## Future Improvements

- 加入 light/dark 模式切換（使用 next-themes）
- 增加真實專案截圖 / 影片嵌入
- 加入簡單聯絡表單（Formspree / EmailJS）
- 支援多語言（中英切換）
- PWA 支持（manifest + service worker）