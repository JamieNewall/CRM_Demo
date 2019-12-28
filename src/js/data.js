
const dataJson = '[{"One_OppName":"Jamie","One_PvLead":"Ian"},{"One_OppName":"Bob","One_PvLead":"jeff"}]';

const dataJsonObj = JSON.parse(dataJson);

console.log(dataJsonObj[1].One_OppName);

class TemplateObj {
    constructor() {
        this.One_OppName = 'Jamie';
        this.One_PvLead = 'Ian';
        this.One_IntroDate = '2019-12-28';
        this.One_Introducer = 'bob';
        this.One_Referrer = 'kerry';
        this.One_InvestmentAmount = 1000000;
        this.One_PreMoney = 5000000;
        this.One_TotalInvestment = 2000000;
        this.One_EquityPercentage = 9.09;
        this.One_Location = 'Manchester';
        this.One_Sector = 'Retail';
        this.One_InvestmentStage = 'Venture';
        this.One_InvestmentToDate = 1000000;
        this.One_Activity = 'ecommerce';
        this.One_TargetCustomers = 'B2B';
    }
    }

const entryOne = new TemplateObj();
const entryTwo = new TemplateObj();



const data = [entryOne,entryTwo];

data.forEach((obj) => {

});
