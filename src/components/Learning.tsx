import {useState} from 'react';
import {chapterLinks,gradeAnswer,questions} from '../content/learning';

export function Quiz({name}:{name:string}){
 const q=questions[name];const [choice,setChoice]=useState<number|null>(null);const [checked,setChecked]=useState(false);
 if(!q)return null;const result=gradeAnswer(q,choice);
 return <section className="learning-quiz" aria-labelledby={'quiz-'+q.id}>
  <div className="quiz-label"><span>停一下 · 想一想</span><span>学习自测 / 非考试</span></div>
  <h3 id={'quiz-'+q.id}>{q.title}</h3><p className="quiz-prompt">选一个答案，看看你的判断。</p>
  <div className="quiz-options" role="group" aria-label={q.title}>{q.options.map((option,i)=><button key={option} aria-pressed={choice===i} className={choice===i?'selected':''} onClick={()=>{setChoice(i);setChecked(false)}}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>
  {checked&&<div className={'quiz-feedback '+result} role="status"><strong>{result==='correct'?'答对了，抓住这个判断。':'再看一下原文的关键条件。'}</strong><p>{q.explanation}</p><a href={q.source}>对照原文依据 ↗</a></div>}
  <div className="quiz-actions">{!checked?<button disabled={choice===null} onClick={()=>setChecked(true)}>查看解析 →</button>:<button onClick={()=>{setChoice(null);setChecked(false)}}>重新选择</button>}<a href={q.continueTo}>{checked?'继续学习 →':'跳过，继续阅读 →'}</a></div>
 </section>
}
const gradePaths=[{name:'跨年夜 / 万圣节',grade:'S',goal:'高溢价 + 有效限流',body:'用价格挡人流，同时维持聚集热度；宁可不卖满，也不能挤爆。',link:'#4/section-4-1'}, {name:'圣诞 / 法定节假日',grade:'A',goal:'周期内统一周末票价',body:'节假日 / 节点周期内按周末票价执行，配套符合票价的增值体验。',link:'#4/section-4-2'}, {name:'周年庆 / 感恩节',grade:'B',goal:'通过买赠拉新用户',body:'用赠票、福利与艺人活动带动人流和口碑。',link:'#4/section-4-3'}, {name:'常规周末 / 周中',grade:'常规',goal:'周末保利润 · 周中保人气',body:'周末提价保利润，周中低价维持人气。原文周中价格存在不同口径，配置前需核对。',link:'#4/section-4-4'}];
const branchDetails=[ [['峰值','当天晚间至深夜 / 零点前后一小时'],['价格骨架','正价高溢价 + 有效限流'],['票型动作','早场前置引流，超级晚场拉峰'],['执行底线','全票型上架后不降价']], [['定价','周期内统一周末价'],['重点','库存节奏与管控'],['票型','复用常规价格带'],['体验','配套符合票价的增值体验']], [['排期','周中，承接富余容量'],['票型','沿用周中，不设早晚场'],['权益','赠票、买赠与艺人演出'],['考核','到场人数与老客回流']], [['周末目标','保利润'],['周中目标','保人气'],['周中票型','套餐化与联票化'],['配置前','核对联票价格口径']] ];
export function GradeExplorer(){const [selected,setSelected]=useState(0);const item=gradePaths[selected];return <section className="grade-explorer"><div className="quiz-label"><span>分支探索</span><span>先判断节点，再选策略</span></div><h3>这次，你在准备什么活动？</h3><div className="explorer-options" role="group" aria-label="选择活动类型">{gradePaths.map((p,i)=><button key={p.name} aria-pressed={i===selected} onClick={()=>setSelected(i)}>{p.name}</button>)}</div><div className="explorer-result" aria-live="polite"><strong>{item.grade}</strong><div><h4>{item.goal}</h4><p>{item.body}</p><div className="explorer-detail-grid">{branchDetails[selected].map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</div><a href={item.link}>展开对应定价策略 →</a></div></div><small>依据原文日期分级与定价逻辑；不自动生成当期售票方案。</small></section>}
const names=['学习首页','经营守则','活动分级','票型体系','定价配票','执行流程','历史案例'];
export function ChapterPager({page,onNext}:{page:number;onNext:()=>void}){const {previous,next}=chapterLinks(page);return <nav className="chapter-pager" aria-label="章节翻页"><div className="pager-progress"><span>学习路线 · {page} / 6</span><div>{[1,2,3,4,5,6].map(n=><a key={n} href={'#'+n} aria-label={'第'+n+'章'} aria-current={n===page?'page':undefined} className={n===page?'current':''}>{n}</a>)}</div></div><div className="pager-cards"><a href={'#'+previous}><span>← {previous===0?'回到首页':'上一章'}</span><strong>{names[previous]}</strong><small>{previous===0?'重新选择阅读路线':'回看前面的判断'}</small></a><a href={'#'+next} onClick={onNext}><span>{next===0?'完成主线':'下一章'} →</span><strong>{names[next]}</strong><small>{next===0?'回到首页，按需复习':'带着本章判断继续'}</small></a></div></nav>}
