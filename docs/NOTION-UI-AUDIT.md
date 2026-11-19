# Notion-inspired knowledge handbook — v4

2026-11-20. Existing React/Vite project retained. No editor functionality or generated decorative images.

## Official references
- https://www.notion.com/product/wikis
- https://www.notion.com/help/customize-and-style-your-content
- https://www.notion.com/help/columns-headings-and-dividers
- https://www.notion.com/help/guides/types-of-content-blocks

Applied patterns: restrained page typography, heading hierarchy, contextual callouts, compact table of contents, chapter gallery, mobile stacking. Official page text was inspected; the separate official image preview was unavailable in the browser.

## Components
| Component | Location | Reading role |
| --- | --- | --- |
| Principle | Visuals.tsx | Ten source-numbered rules grouped into three themes; explanations visible |
| RuleHighlight | Visuals.tsx | Hard rules with a quiet callout, separate from key/risk/tip |
| Comparison | Knowledge.tsx | Four grades with goal, characteristics, pricing and typical nodes |
| Timeline | Visuals.tsx | Five time-based tickets connected vertically; four benefit combinations below |
| Process | Visuals.tsx | Six ordered learning steps and source-scoped requirements |
| CaseStudy | Knowledge.tsx | Historical metrics, actual issues and lessons; CaseBanner provides overview |

General explanatory paragraphs use headings and dividers, not card backgrounds. Full original blocks remain supplemental disclosures. Source numbers and history are never presented as current operational approval.

## Content audit
| Displayed copy | Original source blocks | Verification |
| --- | --- | --- |
| Ten principle explanations | 2 | Directly split from original; sentence breaks only; all ten present |
| Grade definitions/pricing/nodes | 6/7/9, 49 | Definitions/pricing bound directly; examples preserve classifications |
| Timeline + benefit summaries | 12/13/15/16/17/18 | Regular ticket explicitly retains complete benefits; superlate explicitly deep night |
| Pricing relationship | 30/32/33/34 | Editorial structure, no invented numeric curve or combined thresholds |
| Preparation ×3 / 30 minutes / 72 hours / 7 days | 2 | Preparation scoped to before major festivals; dashboard to major festival day |
| Full ticket release 10 days before event | 34 | S-grade scope retained |
| Halloween 330万, 345→435, 114.1% | 40 | 114.1% remains consumption rate with unresolved denominator |
| NY 143.7万, 3939/4200,3909,99%,4.7,12% | 46 | Historical Y25 label retained; inventory scopes not added together |
| Historic prices/inventory/redemption windows | 39/45/49/59 | Bound directly to original table rows, unchanged |

Original source.json SHA256 remains CFA1A4DBDAA5569A67C7F1388056BB7149F3246865748DF4AFC9BF8523515DD1.

## Browser acceptance
- 390×844 viewport, home and chapters 1–6: document width 375 CSS px (scrollbar excluded), viewport width 390; no whole-page horizontal overflow.
- Ten principles, four comparison grades, five timeline tickets and six process steps verified in rendered DOM.
- Home start/chapter buttons measured about 46px high.
- Menu to chapter navigation, search 114.1 to #6/source-40 with source expanded, Escape close verified.
- No browser error logs observed. Chinese sans-serif stack verified through computed styles; not a physical iOS/Android device test.
- Fixed mobile next-step navigation has main-content bottom clearance and safe-area padding.
- Actual browser screenshots: screenshots/v4/home-mobile.jpg, principles-mobile.jpg, grades-mobile.jpg, timeline-mobile.jpg, process-mobile.jpg, case-mobile.jpg. Additional process continuation, case results, pricing, desktop home available.
- TypeScript and Vite production build passed.

Rollback: codex/before-notion-v4 points to bb87f2e6e814b1ccb9114d313c15a420ef2888e5.
