import  db from "../../helpers/dbConnection";
import { DataTypes } from "sequelize";




export const userModel = db.define("users",{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    f_name:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    l_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobile:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    avatar:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    user_role:{
        type:DataTypes.INTEGER,
        defaultValue:3
    }
})
