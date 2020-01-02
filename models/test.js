const Sequelize = require('sequelize');

//import connection to DB
const sequelize = require("/util/database");

//Define a model
const Tester = sequelize.define('tester', {
    Name:{type: Sequelize.STRING,allowNull:false, unique: true, primaryKey: true},
    Date:{type: Sequelize.DATEONLY,allowNull:true},
    Number:{type: Sequelize.DOUBLE,allowNull:false}
}, {freezeTableName: true})

module.exports = Tester;

