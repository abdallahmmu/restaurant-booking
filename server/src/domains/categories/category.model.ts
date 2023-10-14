import  db  from "../../helpers/dbConnection";
import { DataTypes } from "sequelize";


export const categoryModel = db.define('categories', {
    category_name: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey:true,
        allowNull: false
    }
})

