import {test} from 'node:test';
import assert from 'node:assert/strict';
import {scryptSync} from 'node:crypto';
import {credentialsMatch,createSession,verifySession,safeAssetPath} from '../server/auth.mjs';
const config={username:'test-reader',passwordHash:'salt:'+scryptSync('fixture-password','salt',64).toString('hex'),sessionSecret:'test-secret-which-is-long-enough-for-tests'};
test('credentials accept only matching account and password',()=>{
 assert.equal(credentialsMatch('test-reader','fixture-password',config),true);
 assert.equal(credentialsMatch('other','fixture-password',config),false);
 assert.equal(credentialsMatch('test-reader','wrong',config),false);
});
test('signed sessions reject tampering, expiry and changed secrets',()=>{
 const token=createSession(config,1000);
 assert.equal(verifySession(token,config,1001),true);
 assert.equal(verifySession(token+'x',config,1001),false);
 assert.equal(verifySession(token,config,1000+8*60*60),false);
 assert.equal(verifySession(token,{...config,sessionSecret:'different'},1001),false);
});
test('asset allowlist blocks traversal and source files',()=>{
 assert.equal(safeAssetPath('/'),'index.html');
 assert.equal(safeAssetPath('/assets/index-abc.js'),'assets/index-abc.js');
 for(const path of ['/src/content/source.json','/../private-dist/index.html','/assets/../index.html','/assets/%2e%2e/index.html','/.env','/assets/a.js.map'])assert.equal(safeAssetPath(path),null);
});
