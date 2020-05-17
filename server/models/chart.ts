import {INTEGER, STRING, DATE, BLOB} from "sequelize";

export class Chart {
    private db: any;

    constructor(sequelize: any) {
        this.db = sequelize;
        this.initChartDetail();
        this.initChartCategory();
    }

    initChartCategory() {
        this.db.define('chartCategory', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            type: STRING(32),
            chartMap: BLOB,
            properties: STRING,
        })
    }

    initChartDetail() {
        this.db.define('chartDetail', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: STRING,
            category: STRING,
            createTime: DATE,
            properties: STRING,
        });
    }
}

