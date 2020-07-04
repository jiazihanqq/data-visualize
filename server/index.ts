import Koa from 'koa';
import setting from './../config/config';
import {InitManager} from './core';
import {router} from './api/v1/chart'

const app = new Koa();
app.use(router.routes());
// app.use(parser());
// InitManager.initCore(app);
InitManager.initDB();

app.listen(setting.port);
