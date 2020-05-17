import Koa from 'koa';
import setting from './../config/config';
import {InitManager} from './core';
import parser from 'koa-bodyparser';

const app = new Koa();
app.use(parser());
InitManager.initCore(app);
InitManager.initDB();

app.listen(setting.port);
