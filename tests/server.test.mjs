import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {scryptSync} from 'node:crypto';
import {mkdtemp,writeFile,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHandler} from '../server/handler.mjs';
test('server enforces login for HTML and assets; logout, origins and missing config fail safely',async()=>{
 const root=await mkdtemp(join(tmpdir(),'handbook-test-'));await mkdir(join(root,'assets'));await writeFile(join(root,'index.html'),'PROTECTED-HANDBOOK');await writeFile(join(root,'assets/app.js'),'PROTECTED-CONTENT');
 const config={username:'fixture',passwordHash:'salt:'+scryptSync('fixture-password','salt',64).toString('hex'),sessionSecret:'a-secure-test-signing-secret-32-characters',secure:false};
 const server=createServer(createHandler(config,root));await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 try{
  let r=await fetch(base);assert.equal(r.status,200);assert.ok(!(await r.text()).includes('PROTECTED-HANDBOOK'));assert.match(r.headers.get('cache-control'),/no-store/);
  for(const path of ['/assets/app.js','/src/content/source.json','/private-dist/index.html','/api/handbook'])assert.equal((await fetch(base+path)).status,401);
  const post=(password,origin=base)=>fetch(base+'/login',{method:'POST',headers:{Origin:origin,'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({username:'fixture',password}),redirect:'manual'});
  assert.equal((await post('wrong')).status,401);assert.equal((await post('fixture-password','https://evil.example')).status,403);
  r=await post('fixture-password');assert.equal(r.status,303);const cookie=r.headers.get('set-cookie');assert.match(cookie,/HttpOnly/);assert.match(cookie,/SameSite=Lax/);const auth={headers:{Cookie:cookie.split(';')[0]}};
  assert.equal(await (await fetch(base,auth)).text(),'PROTECTED-HANDBOOK');assert.equal(await(await fetch(base+'/assets/app.js',auth)).text(),'PROTECTED-CONTENT');assert.equal((await fetch(base+'/.env',auth)).status,404);
  r=await fetch(base+'/logout',{method:'POST',headers:{...auth.headers,Origin:base},redirect:'manual'});assert.equal(r.status,303);assert.match(r.headers.get('set-cookie'),/Max-Age=0/);
 }finally{await new Promise(resolve=>server.close(resolve));await rm(root,{recursive:true,force:true})}
 const closed=createServer(createHandler({}));await new Promise(resolve=>closed.listen(0,'127.0.0.1',resolve));try{assert.equal((await fetch(`http://127.0.0.1:${closed.address().port}`)).status,503)}finally{await new Promise(resolve=>closed.close(resolve))}
});
