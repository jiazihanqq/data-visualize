import {sequelize as db} from '../core/db';
import {INTEGER, STRING, DATE, BLOB} from "sequelize";

export const chartCategory = db.define('chartCategory', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: STRING(32),
    chartMap: BLOB,
    properties: STRING,
});

export const chartDetail = db.define('chartDetail', {
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
