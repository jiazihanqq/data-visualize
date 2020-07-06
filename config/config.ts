interface IDBConfig {
  dbName: string;
  host: string;
  port: number;
  user: string;
  password: string;
}
export const dev_setting: { db: IDBConfig; port: number } = {
  db: {
    host: "localhost",
    port: 3306,
    dbName: "data_visualize",
    user: "root",
    password: "1qaz@WSX",
  },
  port: 8081,
};
export const prod_setting: { db: IDBConfig; port: number } = {
  db: {
    host: "localhost",
    port: 3306,
    dbName: "data_visualize",
    user: "root",
    password: "1qaz@WSX",
  },
  port: 8081,
};
