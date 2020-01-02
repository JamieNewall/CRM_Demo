const Sequelize = require('sequelize');
const excel = require('xlsx');



const data = require('../../util/getExcel.js');
console.log(data);

class dbController {
    constructor() {

    }

    static populateDB(data) {
        const opp = data[0];


        Opportunities.create({
            One_OppName: opp.One_OppName,
            One_PvLead: opp.One_PvLead,
            status: '0',
            One_IntroDate: opp.One_IntroDate,
            One_Introducer: opp.One_Introducer,
            One_Referrer: opp.One_Referrer,
            One_InvestmentAmount: opp.One_InvestmentAmount,
            One_PreMoney: opp.One_PreMoney,
            One_TotalInvestment: opp.One_TotalInvestment,
            One_EquityPercentage: opp.One_EquityPercentage,
            One_Location: opp.One_Location,
            One_Sector: opp.One_Sector,
            One_InvestmentStage: opp.One_InvestmentStage,
            One_InvestmentToDate: opp.One_InvestmentToDate,
            One_Activity: opp.One_Activity,
            One_TargetCustomers: opp.One_TargetCustomers
        })


    }
}






