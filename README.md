# INS TICKETING PLAYBOOK

React + Vite + TypeScript 知识手册，Node 服务端统一账号登录。

## 开发与发布
Node.js 22；npm ci；npm run dev。生产运行 npm run build:secure，通过 Vercel Node Function 提供页面。
生产配置由 vercel.json 管理。private-dist 仅进入函数包，public 仅含禁止索引的 robots.txt，禁止把 dist 发布到 Pages 或任意公开静态目录。
GitHub Actions 只运行测试与构建，不再发布未经认证的静态副本。

服务端必需环境变量：HANDBOOK_USERNAME、HANDBOOK_PASSWORD_HASH、HANDBOOK_SESSION_SECRET。
密码哈希格式为 salt:scrypt-hex（64 字节），签名密钥至少 32 字符；不在仓库中保存任何真实值。
登录会话使用 HttpOnly / Secure / SameSite Cookie，有效 8 小时。所有正文、脚本、样式均须认证，响应禁止共享缓存。缺少配置时拒绝服务。
登录失败限速为单个函数实例内的防滥用措施，不是跨实例分布式限流。
本地认证预览：在被忽略的 .env.auth.local 配置变量后，node --env-file=.env.auth.local server/local.mjs。

## 内容维护
src/content/source.json 是逐块原文与表格的唯一事实来源。历史价格不改为现行价格；所有原文疑点保留。
src/components/StrategyModules.tsx 整理票型、优惠、分级定价与库存应对；原始规则可按来源展开核对。
src/responsive.css 提供宽屏并排布局；src/strategy-modules.css 提供分组与条件动作模块。
飞书外链需要其自身的访问权限，不由本站账号管理。

## 验证
node --test tests/auth.test.mjs tests/server.test.mjs
node --experimental-strip-types --test tests/learning.test.ts
npm run build:secure

## 历史记录
内容核对见 docs/CONTENT-AUDIT.md；视觉版本记录见 docs/NOTION-UI-AUDIT.md、docs/VISUAL-LEARNING-AUDIT.md。
第六轮记录见 docs/RESPONSIVE-AUTH-AUDIT.md。

