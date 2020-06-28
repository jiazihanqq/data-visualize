import requireDirectory from "require-directory";
import Router from "koa-router";
import {sequelize} from "./db";
export class InitManager {
    // 入口方法
    static initCore(app: any) {
        InitManager.initLoadRouters(app);
    }
    //  初始化路由
    static initLoadRouters(app: any) {
        const apiDirectory = `./../api`;
            requireDirectory(module, apiDirectory, {
            visit: (obj:any) => {
                const route = obj.default;
                if (route instanceof Router) {
                    app.use(route.routes());
                }
            }
        });
    }

    //  初始化数据库
    static initDB() {
        sequelize.authenticate().then(() => {
            console.log('链接正常')
        }).catch(() => {
            console.log('链接错误！')
        });
        sequelize.sync({force: true}).then(() => {
            console.log('sync ok');
        });
    }
}
