const Sequelize = require('sequelize');

//import connection to DB
const sequelize = require("/util/database");

// const Opportunity = sequelize.define('opportunities', {
//     one_OppName:{type: Sequelize.STRING,allowNull:false, unique: true, primaryKey: true},
//     one_PvLead:{type: Sequelize.STRING,allowNull:true},
//     status:{type: Sequelize.STRING,allowNull:false},
//     one_IntroDate:{type: Sequelize.DATEONLY,allowNull:true},
//     one_Introducer:{type: Sequelize.STRING,allowNull:true},
//     one_Referrer:{type: Sequelize.STRING,allowNull:true},
//     one_InvestmentAmount:{type: Sequelize.INTEGER,allowNull:true},
//     one_PreMoney:{type: Sequelize.INTEGER,allowNull:true},
//     one_TotalInvestment:{type: Sequelize.INTEGER,allowNull:true},
//     one_EquityPercentage:{type: Sequelize.FLOAT,allowNull:true},
//     one_Location:{type: Sequelize.STRING,allowNull:true},
//     one_Sector:{type: Sequelize.STRING,allowNull:true},
//     one_InvestmentStage:{type: Sequelize.INTEGER,allowNull:true},
//     one_InvestmentToDate:{type: Sequelize.INTEGER,allowNull:true},
//     one_Activity:{type: Sequelize.STRING,allowNull:true},
//     one_TargetCustomers:{type: Sequelize.STRING,allowNull:true}
// }, {freezeTableName: true})
//
// module.exports = Opportunity;