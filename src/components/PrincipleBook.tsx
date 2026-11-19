import {Fragment} from 'react';
import source from '../content/source.json';
import {Quiz} from './Learning';

const labels=['经营三个空间的人流','做清晰的票型分层','保障购票全链路稳定','实时看板支持决策','涨价同时升级体验','体系化防治黄牛','联动单店票与通票','把早场做成完整体验','提前设置现场兜底','每场结束及时复盘'];
const excerpts=['用价格和库存同时调节三个空间的人流','早场控量、正价守利、晚场承接、超级晚场拉峰','小程序、支付、核销、转赠、退票五个核心环节一个都不能漏','核心指标每 30 分钟刷新一次','涨价超过 15% 的场次，必须同步配置可感知的体验升级','财务端所有退款、转赠、补票全走系统留痕','通票是利润主力，单店票是引流入口','早场票是一段完整的体验设计','系统、票务、人流三道防线，再加一套清晰的指挥体系','每场结束 7 天内出复盘，直接更新入票务策略手册'];
const phrases=['价格和库存','线下排队','公园聚集','楼内热闹度','15%-25%','3 倍','7×24','每 30 分钟','15%','30%','50%','体验升级','系统留痕','利润主力','引流入口','完整的体验设计','72 小时','7 天内'];
function Emphasis({text}:{text:string}){return <>{text.split(new RegExp('('+phrases.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')','g')).map((t,i)=>phrases.includes(t)?<mark key={i}>{t}</mark>:t)}</>}
export function CharterCover(){return <div className="charter-cover"><div className="charter-number" aria-hidden="true">10</div><div className="charter-caption">CHAPTER 01 / 经营守则</div><h1>约法十章<span>票务经营的十条底线</span></h1><p>所有票型设计、定价、配票与现场执行<br/>必须遵守。</p><div className="cover-chips"><span>人流</span><span>体验</span><span>执行</span></div><a href="#1/rule-1">翻开第一条守则 ↓</a></div>}
const flow=(items:string[]) => <div className="diagram-flow">{items.map((t,i)=><Fragment key={t}><div><span>{String(i+1).padStart(2,'0')}</span><b>{t}</b></div>{i<items.length-1&&<i aria-hidden="true">→</i>}</Fragment>)}</div>;
function RuleDiagram({index}:{index:number}){
 if(index===0)return <div className="spaces-diagram"><div className="diagram-driver">价格 <span>＋</span> 库存</div><div className="diagram-branches" aria-hidden="true"><i/><i/><i/></div><div className="space-nodes">{['线下排队','公园聚集','楼内热闹度'].map((t,i)=><div key={t}><div className={'space-shape shape-'+i} aria-hidden="true"><i/><i/><i/></div><b>{t}</b></div>)}</div><small>调节三个空间的人流 · 结构示意，非实时数据</small></div>;
 if(index===1)return flow(['早场控量','正价守利','晚场承接','超级晚场拉峰']);
 if(index===2)return <><div className="rule-metric"><strong>×3</strong><span>按峰值预估压测</span></div>{flow(['小程序','支付','核销','转赠','退票'])}</>;
 if(index===3)return <div className="signal-grid">{[['15%','黄灯','一线调整'],['30%','橙灯','部门负责人'],['50%','红灯','总指挥']].map(([n,t,a])=><div key={t}><span>{t}</span><strong>{n}</strong><b>{a}</b></div>)}<small>偏离预期的幅度；出现安全风险也直接进入红灯决策。</small></div>;
 if(index===4)return <div className="upgrade-diagram"><div><strong>＞15%</strong><span>场次涨价</span></div><i>→</i><div><strong>体验升级</strong><span>购票页明确说明</span></div></div>;
 if(index===5)return <><div className="four-pillars">{['制度','技术','舆情','合规'].map(t=><b key={t}>{t}</b>)}</div><div className="diagram-bottom">退款 · 转赠 · 补票 → 系统留痕</div></>;
 if(index===6)return <div className="upgrade-diagram"><div><strong>通票</strong><span>利润主力</span></div><i>↔</i><div><strong>单店票</strong><span>引流入口</span></div></div>;
 if(index===7)return flow(['门店提前热场','音乐提前开启','票务与门店激励联动']);
 if(index===8)return <><div className="rule-metric"><strong>72<span>小时</span></strong><span>大节前完成兜底检查</span></div>{flow(['系统压力测试','票务超卖熔断','人流分级管控'])}</>;
 return <><div className="rule-metric"><strong>7<span>天内</span></strong><span>每场结束后出复盘</span></div>{flow(['活动结束','完成复盘','更新策略手册'])}</>;
}
export function Principle(){const items=source.find(b=>b.id==='source-2')!.text.split(/(?<!\d)(?=\d+\.不可)/).slice(1);return <div className="principle-book"><nav className="rule-index" aria-label="十条守则索引"><p>翻到你想了解的一页</p><div>{labels.map((t,i)=><a key={t} href={'#1/rule-'+(i+1)}><span>{String(i+1).padStart(2,'0')}</span>{t}</a>)}</div></nav>{items.map((text,i)=><Fragment key={i}><article id={'rule-'+(i+1)} className={'book-rule tone-'+i%3}><header><span>经营底线 / {String(i+1).padStart(2,'0')}</span><h3>{labels[i]}</h3><b className="rule-watermark" aria-hidden="true">{String(i+1).padStart(2,'0')}</b></header><div className="rule-diagram"><RuleDiagram index={i}/></div><div className="rule-body"><div className="rule-key"><span>记住这一句</span><p>{excerpts[i]}</p></div><div className="rule-explanation"><h4>如何理解与执行</h4>{text.slice(text.indexOf('：')+1).split(/(?<=。)/).filter(Boolean).map((t,j)=><p key={j}><Emphasis text={t}/></p>)}</div></div><nav className="rule-turn" aria-label={'守则'+(i+1)+'翻页'}><a href={i===0?'#1':'#1/rule-'+i}>{i===0?'← 守则封面':'← 上一条'}</a><span>{i+1} / 10</span><a href={i===9?'#2':'#1/rule-'+(i+2)}>{i===9?'进入活动分级 →':'下一条 →'}</a></nav></article>{i===1&&<Quiz name="flow"/>}{i===4&&<Quiz name="experience"/>}</Fragment>)}</div>}
