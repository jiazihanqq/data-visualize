import {INTEGER, STRING} from "sequelize";
import {chartCategorySQL} from "../SQL/chartCategory";
import {asyncForEach} from "../utils";

export class ChartCategory {
  private db: any;
  static model: any;

  constructor(sequelize: any) {
    this.db = sequelize;
    this.createCategory();
  }

  async createCategory() {
      ChartCategory.model = this.db.define(
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
              await ChartCategory.model.create(record);
            });
          },
        },
      }
    );
  }
}
