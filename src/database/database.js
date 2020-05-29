const Sequelize = require("sequelize");

const connection = new Sequelize('hosp', 'root', 'Lucas24056401', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;