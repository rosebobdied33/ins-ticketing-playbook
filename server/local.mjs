import {createServer} from 'node:http';
import {createHandler} from './handler.mjs';
createServer(createHandler({username:process.env.HANDBOOK_USERNAME,passwordHash:process.env.HANDBOOK_PASSWORD_HASH,sessionSecret:process.env.HANDBOOK_SESSION_SECRET,secure:false})).listen(5174,'127.0.0.1',()=>console.log('Secure handbook local preview: http://127.0.0.1:5174'));
