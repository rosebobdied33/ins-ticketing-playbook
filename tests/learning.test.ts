import {test} from 'node:test';
import assert from 'node:assert/strict';
import {gradeAnswer,chapterLinks} from '../src/content/learning.ts';

test('answers distinguish unselected, wrong, correct and invalid choices',()=>{
 const q={options:['只提价','升级体验','只扩库存'],correct:1};
 assert.equal(gradeAnswer(q,null),'unanswered');
 assert.equal(gradeAnswer(q,0),'incorrect');
 assert.equal(gradeAnswer(q,1),'correct');
 assert.equal(gradeAnswer(q,3),'unanswered');
});
test('chapter navigation stays within home and six chapters',()=>{
 assert.deepEqual(chapterLinks(1),{previous:0,next:2});
 assert.deepEqual(chapterLinks(3),{previous:2,next:4});
 assert.deepEqual(chapterLinks(6),{previous:5,next:0});
 assert.throws(()=>chapterLinks(0));
});
