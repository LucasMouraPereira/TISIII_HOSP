const Sequelize = require("sequelize");
const connection = require("../database/database");

const records = connection.define('records', {
    numeroSecretaria:{
        type: Sequelize.STRING,
        allowNull: false
    }, nome: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }, telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }, data_cadastro: {
        type: Sequelize.STRING,
        allowNull: false
    }, data_retorno: {
        type: Sequelize.STRING,
        allowNull: false
    }, status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// records.sync({force: false}).then(() => {
//     console.log("Tabela Criada");
// });

module.exports = records;