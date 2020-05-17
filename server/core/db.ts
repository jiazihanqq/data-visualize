import {Sequelize} from 'sequelize';
import config from "../../config/config";
import {Chart} from "../models/chart";

const {
    dbName,
    host,
    port,
    user,
    password,
} = config.db;

export const sequelize = new Sequelize(dbName, user, password, {
    dialect: "mysql",
    host,
    port,
    logging: true,
    timezone: '+08:00',
    define: {}
});
new Chart(sequelize);
