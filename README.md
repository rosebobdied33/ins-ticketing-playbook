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

## 第二轮展示组件
src/components/Knowledge.tsx 包含 KeyTakeaway、RuleList、Timeline、StrategyComparison、CaseStudy、SourceDisclosure。
原始票价由 source.json 直接驱动，不在 UI 手写票价。视觉 Token 位于 src/style.css 的 :root。
可回退分支：codex/before-editorial-v2（第二轮修改前的 main）。

## 第三轮信息设计
src/components/Visuals.tsx 提供四类 Highlight、原则分组卡、票型时间轴、定价关系图、六步流程、案例数字 Banner。正文保留源依据，结构图先讲要点。
首页有主按钮、次按钮、文字入口三层引导；页尾新增用户提供的飞书手册原文入口。
可回退分支：codex/before-visual-v3。验收记录见 docs/CONTENT-AUDIT.md。

## 第四轮知识中心
采用暖白、黑灰与少量灰紫，统一六类知识组件；新增样式位于 src/handbook.css。完整设计参考、短文案来源和手机验收见 docs/NOTION-UI-AUDIT.md。回退分支：codex/before-notion-v4。

## 第五轮视觉教辅
经营守则采用渐变封面、十条图解和重点标记；Learning.tsx 提供自测、活动分支与对称翻页。验收与来源记录见 docs/VISUAL-LEARNING-AUDIT.md。测试命令：node --experimental-strip-types --test tests/learning.test.ts。
