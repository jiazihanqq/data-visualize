import Koa from 'koa';
import setting from './config/config';
import {InitManager} from './core';
import {router} from './api/v1/chart'

const index = new Koa();
index.use(router.routes());
// app.use(parser());
// InitManager.initCore(app);
InitManager.initDB();

index.listen(setting.port);
