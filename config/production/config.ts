import {IDBConfig} from "../config";

const port = 8081;
const db:IDBConfig= {
    host: '',
    port: 0,
    dbName:'',
    user:'',
    password:'',
};
export const prod_setting = {
    db, port,
}
