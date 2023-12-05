
import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./env.config";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: Number(DB_PORT) || undefined
});

const testConnection = async ()=> {

    try {
        
        await sequelize.authenticate();

        console.log('The database is connected!!!');

    } catch (error) {

        console.log('There is an error with the connection.');
        
    }

}

testConnection();

export default sequelize;
