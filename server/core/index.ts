import requireDirectory from "require-directory";
import Router from "koa-router";
import {chartDetail, chartCategory} from '../models/chart';

export class InitManager {
    // 入口方法
    static initCore(app: any) {
        InitManager.initLoadRouters(app);
    }

    static initLoadRouters(app: any) {
        const apiDirectory = `${process.cwd()}/app/api`;
        requireDirectory(module, apiDirectory, {
            visit: obj => {
                if (obj instanceof Router) {
                    app.use(obj.routes);
                }
            }
        });
    }

    static initDB() {

    }
}
