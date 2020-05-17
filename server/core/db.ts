import {Sequelize} from 'sequelize';
import config from "../../config/config";

const {
    dbName,
    host,
    port,
    user,
    password,
} = config.db;

export const sequelize = new Sequelize(dbName,user,password,{
    dialect: "mysql",
    host,
    port,
    logging: false,
    timezone: '+08:00',
    define: {

    }
});

sequelize.authenticate().then(()=>{
    console.log('链接正常')
}).catch(()=>{
    console.log('链接错误！')
})

// 同步到数据库
sequelize.sync({force:true}).then(()=>{
    console.log('sync ok');
});
