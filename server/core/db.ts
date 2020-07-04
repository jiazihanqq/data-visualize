import config from "../../config/config";
import { ChartCategory } from "../models/chartCategory";
import { Sequelize } from "sequelize";
import {ChartJSON} from "../models/chartJSON";

const { dbName, host, port, user, password } = config.db;

export const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {},
});
new ChartCategory(sequelize);
new ChartJSON(sequelize);
