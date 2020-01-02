const dbConnection = require('./util/database');
const Tester = require('./util/database');
const moment = require('moment');
const db = require('./util/database');

// console.log(readyData)
// console.log(db.readyData)
// db.opportunity.sync();

// db.readyData.forEach((item,index) => {
//     // if(item.one_OppName === null) {
//     //     console.log(index)
//     // }
//     console.log(item.one_OppName)
// })

function initPopulateDatabase(readyData, db) {
    readyData.forEach((item) => {
        try {
        db.create({
            one_OppName: item.one_OppName,
            one_PvLead: item.one_PvLead,
            status: 0,
            one_IntroDate: item.one_IntroDate,
            one_Introducer: item.one_Introducer,
            one_Referrer: item.one_Referrer,
            one_InvestmentAmount: item.one_InvestmentAmount,
            one_PreMoney: item.one_PreMoney,
            one_TotalInvestment: item.one_TotalInvestment,
            one_EquityPercentage: item.one_EquityPercentage,
            one_Location: item.one_Location,
            one_Sector: item.one_Sector,
            one_InvestmentStage: item.one_InvestmentStage,
            one_InvestmentToDate: item.one_InvestmentToDate,
            one_Activity: item.one_Activity,
            one_TargetCustomers: item.one_TargetCustomers
        }).then(() => console.log("DB successfully populated!")).catch((e)=>{console.log(e.message)})

        } catch (e) {
            console.log(`Failed to add: ${item}`)

        }
    })


}

initPopulateDatabase(db.readyData, db.opportunity)

// dbConnection.sequelize.query("UPDATE tester SET number = 700 WHERE number = 800")
//     .then((result) => console.log(result))
// .catch((err) => console.log(err))




//Looks at all models we defined and creates tables for us
// dbConnection.sequelize.sync({force:true})
//     .then( result => {
//
//     // app.listen(3000)
// })
// .catch(err => {
//     console.log(err)
// })

// dbConnection.Tester.create({
//     name: "Bob",
//     date: moment("31/12/2019", "DD-MM-YYYY"),
//     number: Number.parseInt("800.89%")
// }).then(result => console.log(result))
// .catch(err => console.log(err))

//
// // console.log(dbConnection.Tester.rawAttributes)
