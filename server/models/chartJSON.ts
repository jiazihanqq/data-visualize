import { DATE, INTEGER, STRING } from "sequelize";
import { chartCategorySQL } from "../SQL/chartCategory";
import { asyncForEach } from "../utils";
import { chartJSONSQL } from "../SQL/chartJSON";

export class ChartJSON {
  private db: any;
  public chartCategoryModel: any;

  constructor(sequelize: any) {
    this.db = sequelize;
    this.createJSON();
    this.createCategory();
  }

  async createCategory() {
    this.chartCategoryModel = this.db.define(
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
          afterSync: () => {
            asyncForEach(chartCategorySQL, async (record) => {
              await this.chartCategoryModel.create(record);
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
          afterSync: () => {
            asyncForEach(chartJSONSQL, async (record) => {
              await chartJSON.create(record);
            });
          },
        },
      }
    );
  }
}
