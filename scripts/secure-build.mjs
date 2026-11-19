import {cp,mkdir} from 'node:fs/promises';
await mkdir('private-dist',{recursive:true});
await cp('dist','private-dist',{recursive:true});
await mkdir('public',{recursive:true});
