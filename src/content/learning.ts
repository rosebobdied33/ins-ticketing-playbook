export function gradeAnswer(question:{options:readonly string[];correct:number},choice:number|null){
 if(choice===null||!Number.isInteger(choice)||choice<0||choice>=question.options.length)return 'unanswered';
 return choice===question.correct?'correct':'incorrect';
}
export function chapterLinks(page:number){
 if(!Number.isInteger(page)||page<1||page>6)throw new RangeError('Expected chapter 1–6');
 return {previous:page-1,next:page===6?0:page+1};
}
export type Question={id:string;title:string;options:string[];correct:number;explanation:string;source:string;continueTo:string};
export const questions:Record<string,Question>={
 flow:{id:'flow',title:'票型分配，首先要解决什么？',options:['尽可能多卖票','用价格与库存调节三个空间的人流','只提高正价票的价格'],correct:1,explanation:'原文原则 01：用价格和库存同时调节线下排队、公园聚集、楼内热闹度。售票数量不是唯一目标。',source:'#1/source-2',continueTo:'#1/rule-3'},
 experience:{id:'experience',title:'某场次涨价超过 15%，必须同时做什么？',options:['只在现场说明涨价原因','增加售票数量','配置可感知的体验升级，并在购票页说明'],correct:2,explanation:'原文原则 05 同时要求体验升级与购票页说明“涨在了哪里”；不是只改价格。',source:'#1/source-2',continueTo:'#1/rule-6'},
 '2':{id:'grade',title:'哪一类节点强调“周期内统一周末票价”？',options:['S 级','A 级','B 级'],correct:1,explanation:'A 级按周末票价执行，并配套符合票价的增值体验。S 级高溢价限流，B 级通过买赠拉新。',source:'#2/source-7',continueTo:'#2/section-2-1'},
 '3':{id:'ticket',title:'哪一种票是全系价格与价值锚点？',options:['正价票','超级晚场票','预售 / 早鸟票'],correct:0,explanation:'正价票任意时段入场、权益最完整，是全系价格与价值锚点。',source:'#3/source-15',continueTo:'#3/section-3-1'},
 '4':{id:'price',title:'S 级全票型上架后，原文允许怎样调整？',options:['只允许补票和调库存','随时降价','将历史降价直接作为现行规则'],correct:0,explanation:'原文要求全票型上架后不降价，只允许补票和调库存。历史案例中的操作不能自动变成现行制度。',source:'#4/source-33',continueTo:'#4/section-4-1'},
 '5':{id:'execution',title:'大节当天，整体看板核心指标多久刷新？',options:['每 7 天','每 30 分钟','每 72 小时'],correct:1,explanation:'原文原则 04 要求每 30 分钟刷新。72 小时是大节前兜底检查的时间；7 天是每场结束后出复盘的期限。',source:'#5/source-2',continueTo:'#5/section-5-1'},
 '6':{id:'history',title:'万圣节案例中的 114.1%，原文叫什么？',options:['核销率','利润率','通票消耗率'],correct:2,explanation:'原文写“10.31 通票消耗率 114.1%”。分母口径未说明，必须保留原名并待核对，不能改成核销率。',source:'#6/source-40',continueTo:'#6/section-6-1'}
};
