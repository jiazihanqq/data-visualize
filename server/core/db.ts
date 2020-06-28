import config from "../../config/config";
import { Chart } from "../models/chart";
import { Sequelize } from "sequelize";

const { dbName, host, port, user, password } = config.db;

export const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host,
  port,
  logging: true,
  timezone: "+08:00",
  define: {},
});
sequelize.sync({ force: true });
new Chart(sequelize);
