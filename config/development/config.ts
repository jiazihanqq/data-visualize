import {IDBConfig} from "../config";

const port = 8081;
const db:IDBConfig = {
    host: 'localhost',
    port: 3306,
    dbName:'data_visualize',
    user:'root',
    password:'root',
};
export const dev_setting = {
    db, port,
};
