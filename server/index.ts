import Koa from 'koa';
import setting from './../config/config';
import {InitManager} from './core';
import parser from 'koa-bodyparser';
console.log(0)
const app = new Koa();


app.use(parser());
console.log(1);
InitManager.initCore(app);
console.log(2)
InitManager.initDB();

app.listen(3000);
// app.listen(setting.port);
