# Visual learning v5 — 2026-11-20

## User direction
Strong visual teaching replaces the restrained v4 approach: a gradient charter cover, individual title bands, ten source-backed diagrams, inline highlights, symmetric page-turn cards, optional quizzes and branching exploration.

## Implementation
- PrincipleBook.tsx: charter cover; ten rule index links; all ten full explanations remain rendered and visible; diagram, source-excerpt takeaway, inline emphasis and previous/next rule links per rule.
- Learning.tsx: optional Quiz, GradeExplorer and ChapterPager.
- learning.ts: grading, chapter boundaries, seven questions with source and continuation links.
- visual-learning.css: purple/green/amber rule themes, numbered/labelled diagrams, blue self-check blocks, symmetric chapter cards. Text and labels accompany colors. No animation required; respects reduced motion.
- Mobile pager uses bottom clearance in main content and safe-area padding. Reading is never gated by a quiz score.

## Source audit
All ten takeaways were programmatically checked as exact substrings of original source block 2. Full rule explanations are split directly from that block. Diagrams preserve the three spaces, four time-ticket roles, five system links, 3x load estimate, 15/30/50 percent deviations plus safety-risk trigger, >15 percent experience requirement, four governance dimensions, ticket roles, early experience, 72-hour checks and seven-day review.

Quiz sources: flow and experience → block 2; grades → 7; regular ticket anchor → 15; S-level pricing → 33; dashboard frequency → 2; historical consumption rate → 40. Grade explorer uses blocks 6/7/9 and links to corresponding chapter 4 sections. No generated operational prices or fake historic results.

Original source.json SHA256 is unchanged: CFA1A4DBDAA5569A67C7F1388056BB7149F3246865748DF4AFC9BF8523515DD1.

## Verification
- `node --experimental-strip-types --test tests/learning.test.ts`: 2 tests passed (unselected/invalid/wrong/correct answers; chapter boundaries).
- `npm run build`: TypeScript and Vite passed.
- Browser 390×844: ten rules, two in-rule quizzes and 19 inline highlighted phrases rendered. Whole-page width remained 375 CSS px excluding scrollbar, within 390 viewport.
- Quiz: wrong answer → explanatory feedback → retry → correct answer → continue to rule 3 verified.
- Grade explorer: A selection displays uniform weekend pricing, then opens #4/section-4-2.
- Skip quiz opens next section without requiring an answer (#6/section-6-1 verified).
- Previous/next chapter cards measured equal heights (~90.38 CSS px) and equal widths to pixel rounding (~166.7 CSS px).
- Browser error log empty. Desktop 1440×1000 cover inspected. This is browser viewport testing, not physical-device testing or a validated accessibility intervention.
- Real screenshots saved in screenshots/v5 (charter, rule 1, rule 5, signals, quiz feedback, branch, home, timeline, process, case and desktop charter).

Rollback branch: codex/before-visual-learning-v5 at c2004be6a34239dadd6aa418842876c76a4e2e7f.
