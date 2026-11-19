# INS TICKETING PLAYBOOK

React + Vite + TypeScript 静态知识手册。

## 开发与发布
Node.js 22。首次 `npm ci`，开发 `npm run dev`，生产 `npm run build`。
Pages 设置选择 GitHub Actions；推送 main 后工作流自动构建并发布。
路径固定 `/ins-ticketing-playbook/`；章节使用 hash 路由，刷新无需服务器重写。

## 内容维护
- `src/content/chapters.ts`：六章导读、内容映射与待核对口径。
- `src/content/source.json`：逐块原文与表格，ID 与原文依据绑定。修改规则须同步更新原文来源与导读，不把历史价格改为现行价。
- `src/main.tsx`：阅读、搜索、进度、来源展示与图片文字转录。
- `docs/CONTENT-AUDIT.md`：内容疑点和核对范围。
新增案例应写清年份、问题、策略、结果、缺陷，并关联来源块。
更新日期仅代表网站整理日期，不代表业务审批日期。

## 外部资料
Word 内链接原样保留，外部文档内容及权限未核实。没有构造系统后台 SOP。
