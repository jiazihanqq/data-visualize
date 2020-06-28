import { DATE, INTEGER, STRING } from "sequelize";
export class Chart {
  private db: any;

  constructor(sequelize: any) {
    this.db = sequelize;
    this.createJSON();
    this.createCategory();
  }

  async createCategory() {
    const chartCategory = this.db.define(
      "chartCategory",
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type: STRING(32),
        chartMap: STRING,
        properties: STRING,
      },
      {
        hooks: {
          afterSync: async () => {
            await chartCategory.create({
              type: "bar",
              chartMap: "STRING",
              properties: "STRING",
            });
          },
        },
      }
    );
  }

  createJSON() {
    const chartJSON = this.db.define(
      "chartJSON",
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: STRING,
        category: STRING,
        properties: STRING,
      },
      {
        hooks: {
          afterSync: async () => {
            await chartJSON.create({
              name: "bar",
              category: "STRING",
              properties: "STRING",
            });
          },
        },
      }
    );
  }
}
