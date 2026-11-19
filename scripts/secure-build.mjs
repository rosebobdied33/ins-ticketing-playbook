import {cp,mkdir,writeFile} from 'node:fs/promises';
await mkdir('private-dist',{recursive:true});
await cp('dist','private-dist',{recursive:true});
await mkdir('public',{recursive:true});
// Vercel requires a non-empty output directory; only crawler policy is public.
await writeFile('public/robots.txt','User-agent: *\nDisallow: /\n');
