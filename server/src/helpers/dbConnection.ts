import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect: 'mssql',
    database:process.env.DB_NAME,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD
})



export default db

