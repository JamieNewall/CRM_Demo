const Sequelize = require('sequelize');
const Model = Sequelize.Model;


const sequelize = new Sequelize('PV_Pipeline', 'postgres', 'pass123', {
    // gimme postgres, please!
    dialect: 'postgres'
})

//Connect to DB
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//Define the table we want

class Opportunities extends Model {}
    Opportunities.init({
            // attributes
            //Stage One Fields
            One_OppName:{type: Sequelize.STRING,allowNull:false, unique: true, primaryKey: true},
            One_PvLead:{type: Sequelize.STRING,allowNull:false},
            status:{type: Sequelize.STRING,allowNull:false},
            One_IntroDate:{type: Sequelize.DATEONLY,allowNull:true},
            One_Introducer:{type: Sequelize.STRING,allowNull:true},
            One_Referrer:{type: Sequelize.STRING,allowNull:true},
            One_InvestmentAmount:{type: Sequelize.INTEGER,allowNull:true},
            One_PreMoney:{type: Sequelize.INTEGER,allowNull:true},
            One_TotalInvestment:{type: Sequelize.INTEGER,allowNull:true},
            One_EquityPercentage:{type: Sequelize.FLOAT,allowNull:true},
            One_Location:{type: Sequelize.STRING,allowNull:false},
            One_Sector:{type: Sequelize.STRING,allowNull:false},
            One_InvestmentStage:{type: Sequelize.INTEGER,allowNull:false},
            One_InvestmentToDate:{type: Sequelize.INTEGER,allowNull:false},
            One_Activity:{type: Sequelize.STRING,allowNull:false},
            One_TargetCustomers:{type: Sequelize.STRING,allowNull:false}

        //    Stage Two Fields

        },
        {
        sequelize,
        modelName: 'Opportunities'
        // options
    })

// Opportunities.create({
//
// })

//Creates table in db and commits to it
Opportunities.sync();
    // .then(() => {
    //     return Opportunities.create({
    //         firstName: 'Jamie',
    //         lastName: 'Newall'
    //     })
    // })
//

// const NameObj = {name: 'Jamie'};
// setTimeout( (Name) => {
//     console.log(NameObj, typeof NameObj);
//     Opportunities.destroy({
//         where: {
//             firstName: [NameObj.name]
//         }
//     })
// },3000)


// My class with controller methods
// class SqlController {
//
//     initDb() {
//
//     }
//
//     addEntry() {
//
//     }
//
//




// }