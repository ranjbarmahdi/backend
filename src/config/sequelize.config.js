import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    logging: false,
});

(async function checkSequelizeConnection() {
    try {
        console.log('Connect to database successfully.');
    } catch (e) {
        console.log('Can not connect to database :', e);
    }
})();

export default sequelize;
