import { Sequelize } from "sequelize";

const sequelize = new Sequelize('card_test', 'root', '23867459', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
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
