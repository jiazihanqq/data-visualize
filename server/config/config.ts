import {dev_setting , prod_setting } from '../../config/config';

interface IDBConfig {
    dbName:string,
    host: string,
    port: number;
    user:string,
    password:string,
}
export interface IConfig {
    port: number;
    db: IDBConfig;
}
// fixme 写法好撮
let config: IConfig = {
    port: 0,
    db: {
        dbName:'',
        host: '',
        port: 0,
        user:'',
        password:'',
    }
};
if (process.env.NODE_ENV === 'development') {
    config = dev_setting;
} else if (process.env.NODE_ENV === 'production') {
    config = prod_setting;
}
export default config;
