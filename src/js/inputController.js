

// Select Option Arrays
const investmentDirectors = ["Andy Round", "Guy Weaver", "Mark Lyons"];
const iCReviewMembers = ["David Foreman","Mike Fletcher", "Peadar Oreilly","Rob Memmott"];
const legalDDProviders = ["Gateley","Hilldicks","Irwin Mitchell"];
const commercialDDProviders = ["PMSI","None","Other"];
const EisExperts = ["Phillip Hare", "Fairhurst"];
const targetCustomers = ["B2B","B2C","B2B2C"];
const investmentTeam = ["Andy Round","Ben Hatton","David Foreman","Guy Weaver","Jamie Newall","Louise Chapman","Mark Lyons","Myrto Lalacos","Pete Carway","Sim Landa"];
const venturePartners = ["David Allanson","Mark Austin","Martin Bates","Jonathan Bell","Joanna Bond",
    "Christopher Carter","Darren Carter","Stephen Caunce","Paul Chambers","Paul Dewinter",
    "Sunil Dhall","Mark Dickinson","James Ellis","Mahmoud Faghini","Michael Fletcher","David Foreman",
    "Colin Garnett","Simon Gold","Andrew Huntley Jacobs","Paul Jefferson","Paul Kenyon","Richard Logan",
    "Simon Lord","Kim Lucas","Nikhil Mankodi","Thomas Meikle","Robert Memmott","David Moore","Iain Morgan",
    "Richard Nevinson","Carolyn Nevinson","Sean O'Driscoll","Peadar O'Reilly","Simon Radford","Ashley Ramrachia",
    "Stephen Sealey","Richard Sehayek","Clifford Siegel","Stephen Stuart","Thomas Wood"];
const leadSource = ["Advisor Community", "HNW Investors / Venture Partner", "Inbound/Website Applications","Industry Events",
"Key Hubs / Accelerators", "Linkedin Cold Approach","Other VC / PE Intro","Personal Network (inc. Linkedin)","Portfolio Businesses"];
const ICDecision = ['Approved','Monitor','Rejected'];
const funds = ["EIS 2019", "EIS 2020","Evergreen Drawdown 1","Evergreen Drawdown 2"];
const sideCarFunds = ["Tim Bulmer", "Simon Gold"];
//TODO need to update these and VP array
const sectors = ["Advertising, Marketing and Publishing","Aerospace, Defence and Space Tech",
    "AI and Big Data","Bio Tech and Pharmaceuticals","Digital Media and Content",
    "E-commerce","Education Technology","Electronics and Hardware","Energy, Environment and Clean Tech",
    "Fashion and Design","Fast Moving Consumable Goods","Film, Theatre and Entertainment","Financial and Professional Services",
    "Financial Technology","Gaming","Healthcare and Digital Health","HR and Recruitment","Leisure, Hospitality and Tourism",
    "Manufacturing and Engineering","Mining and Materials","Mobile and Telecoms","Property and Construction","Security and Cyber Security",
    "Social Enterprise","Software as a Service","Transport and Logistics"];
const investmentStage = ["Seed", "Early VC"];

//List of inputs to be created
const inputList = [{0:{}},{1:{one_OppName:"STRING",
    one_PvLead:investmentTeam,one_IntroDate:"DATEONLY",one_Introducer:leadSource,one_Referrer:venturePartners,
    one_InvestmentAmount:"INTEGER",one_PreMoney:"INTEGER",one_TotalInvestment:"INTEGER",one_EquityPercentage:"FLOAT",
    one_Location:"STRING",one_Sector:sectors,one_InvestmentStage:investmentStage,one_InvestmentToDate:"INTEGER",
    one_Activity:"STRING",one_TargetCustomers:targetCustomers}},{2:{two_NdaSigned:"RADIO",two_TeamMembers:"MULTISELECT"}},{3:{three_CompanyDescription:"TEXTAREA",
    three_PvSplit:"INTEGER",three_VpSplit:"INTEGER",three_FundAllocation:"INTEGER",three_proposalSentDateTeam:"DATEONLY",
        three_ProposalSentDateIc: "DATEONLY", three_IcMeetingDate: "DATEONLY", three_IcApproved:"RADIO"}},{4:{
        four_PvInvestmentAmount:"INTEGER",four_PremoneyValuation: "INTEGER",four_TotalRoundAmount: "INTEGER",four_NonDilutedEquity: "FLOAT",
        //TODO check that this should be a string
        four_FullyDilutedEquity: "STRING", four_PriorReturn:"RADIO", four_expectedCompletionDate: "DATEONLY", four_OfferTeamReviewer: investmentDirectors,
        four_OfferReviewedDate: "DATEONLY",four_OfferIcReviewer: iCReviewMembers, four_OfferIcApprovedDate: "DATEONLY", four_OfferSentDate: "DATEONLY"
    }}, {5:{ divider1:"Financial DD:",five_financialExternalProviderEngaged:"RADIO",five_financialSummary:"TEXTAREA", divider2:"Legal DD:",five_lawyersUsed:legalDDProviders,
        five_LegalFee:"INTEGER",five_CompanyLawyer:"STRING",five_LegalSummary:"TEXTAREA",five_ArticlesSummary:"TEXTAREA",
        five_IaSummary:"TEXTAREA",five_CovenantSummary:"TEXTAREA",divider3:"Commercial DD:",five_CddUsed:commercialDDProviders,five_CddFee:"INTEGER",five_CddSummary:"TEXTAREA",
        divider4:"Management DD:",five_MddExternalProviderEngaged:"RADIO",five_MddProvider:"STRING",five_MddFee:"INTEGER",five_MgtReferencesDone:"RADIO",
        five_MddSummary:"TEXTAREA",divider5:"KYC Checks:",five_KycConfirmedSignificantHolders:"RADIO",five_KycDateCompleted:"DATEONLY",divider6:"EIS Compliance:",five_EisReviewed:"RADIO",
        five_EisAdvisor:EisExperts,five_EisSubmissionDate:"DATEONLY",divider7:"DD Review:",five_DealSummaryDone:"RADIO",five_DdReviewed:"RADIO",
        five_DdReviewer:investmentDirectors,five_DdReviewDate:"DATEONLY"}},{6:{six_DateFinalIc:"DATEONLY",six_InvestmentAmount:"INTEGER",six_Premoney:"INTEGER",six_TotalRound:"INTEGER",
        six_EquityFinal:"FLOAT",six_PriorReturn:"RADIO",six_CommitteeDecision:ICDecision,six_DecisionSupport:"MULTILINE"}},{7:{seven_EisAssuranceReceived:"RADIO",seven_DateEisReceived:"DATEONLY",seven_PortfolioIntroduced:"RADIO",
        seven_PrDone:"RADIO",seven_ReviewedManagementAccs:"RADIO",seven_FinalLegalBible:"RADIO",seven_AgreedBoard:"RADIO",
        seven_SummarySent:"RADIO"}},{8:{divider1:"EIS Admin:",eight_CompletionDate:"DATEONLY",eight_EisOneSentDate:"DATEONLY",eight_EisThreeReceivedDate:"DATEONLY",
        eight_EisFiveSentDate:"DATEONLY",eight_EisFiveReceivedDate:"DATEONLY",eight_UploadedEisToPortal:"RADIO",divider2:"Deal Allocation Summary:",
        divider3:"SideCar Allocations:",eight_SidecarInvestorOne:sideCarFunds, eight_SidecarInvestorOneAmount:"INTEGER", eight_SidecarInvestorOneTransactionDate:"DATEONLY",
        eight_SidecarInvestorOneCompletionDate: "DATEONLY", eight_SidecarInvestorOneEquity:"FLOAT", eight_SidecarInvestorOneShares: "INTEGER",
        eight_SidecarInvestorTwo:sideCarFunds, eight_SidecarInvestorTwoAmount:"INTEGER", eight_SidecarInvestorTwoTransactionDate:"DATEONLY",
        eight_SidecarInvestorTwoCompletionDate: "DATEONLY", eight_SidecarInvestorTwoEquity:"FLOAT", eight_SidecarInvestorTwoShares: "INTEGER", divider4:"Venture Partner Allocations:",
        eight_VpInvestorOne: venturePartners, eight_VpInvestorOneAmount: "INTEGER",eight_VpInvestorOneTransactionDate: "DATEONLY", eight_VpInvestorOneCompletionDate:"DATEONLY",
        eight_VpInvestorOneEquity: "FLOAT", eight_VpInvestorOneShares: "INTEGER", eight_VpInvestorTwo: venturePartners, eight_VpInvestorTwoAmount: "INTEGER",
        eight_VpInvestorTwoTransactionDate: "DATEONLY", eight_VpInvestorTwoCompletionDate:"DATEONLY",eight_VpInvestorTwoEquity: "FLOAT", eight_VpInvestorTwoShares: "INTEGER",
        eight_VpInvestorThree: venturePartners,eight_VpInvestorThreeAmount: "INTEGER", eight_VpInvestorThreeTransactionDate: "DATEONLY",
        eight_VpInvestorThreeCompletionDate:"DATEONLY", eight_VpInvestorThreeEquity: "FLOAT", eight_VpInvestorThreeShares: "INTEGER",
        eight_VpInvestorFour: venturePartners, eight_VpInvestorFourAmount: "INTEGER", eight_VpInvestorFourTransactionDate: "DATEONLY", eight_VpInvestorFourCompletionDate:"DATEONLY",
        eight_VpInvestorFourEquity: "FLOAT",  eight_VpInvestorFourShares: "INTEGER"
    }}]

const mandatoryFields = {one_OppName:true,
    one_PvLead:false,one_IntroDate:false,one_Introducer:false,one_Referrer:false,
    one_InvestmentAmount:false,one_PreMoney:false,one_TotalInvestment:false,one_EquityPercentage:false,
    one_Location:false,one_Sector:false,one_InvestmentStage:false,one_InvestmentToDate:false,
    one_Activity:false,one_TargetCustomers:false}


//Labels for fields
const fieldNameMapping = {
    one_OppName: 'Opportunity Name',
    one_PvLead: 'Praetura Lead',
    one_IntroDate: 'Introduction date',
    one_Introducer: 'Lead Source',
    one_Referrer: 'Referrer',
    one_InvestmentAmount: 'Praetura Investment Amount Requested',
    one_PreMoney: 'Pre-money valuation',
    one_TotalInvestment: 'Total Investment Amount',
    one_EquityPercentage: 'Equity ',
    one_Location: 'Location',
    one_Sector: 'Sector',
    one_InvestmentStage: 'Investment stage',
    one_InvestmentToDate: 'Investment to date',
    one_Activity: 'Company activity',
    one_TargetCustomers: 'Company target customers',
    two_NdaSigned: 'Have we signed an NDA?',
    two_TeamMembers: 'Who else is in the deal team?',
    three_CompanyDescription:"Short Company Description",
    three_PvSplit:"PV Allocation Split (%)",
    three_VpSplit:"Venture Partner Allocation Split (%)",
    three_FundAllocation:"Total Allocation (%)",
    three_proposalSentDateTeam:"Date IC Paper Sent For Team Review",
    three_ProposalSentDateIc: "Date IC Paper Sent to IC",
    three_IcMeetingDate: "Date of IC Meeting",
    three_IcApproved:"Approved by IC?",
    four_PvInvestmentAmount:"Praetura Investment Amount",
    four_PremoneyValuation: "Pre-money Valuation",
    four_TotalRoundAmount: "Total Round",
    four_NonDilutedEquity: "Equity % (excludes EMI/CDIs/Options etc.)",
    //TODO check that this should be a string
    four_FullyDilutedEquity: "Fully Diluted Equity % (including all convertibles)",
    four_PriorReturn:"Do we have a prior return?",
    four_expectedCompletionDate: "Expected Completion Date",
    four_OfferTeamReviewer: "Offer Reviewed By Investment Director",
    four_OfferReviewedDate: "Date Of ID Review",
    four_OfferIcReviewer: "Offer Reviewed By IC Member",
    four_OfferIcApprovedDate: "Date of IC Review",
    four_OfferSentDate: "Date Offer Sent to Founders",
    five_financialExternalProviderEngaged:"Financial DD completed Externally?",five_financialSummary:"Financial DD Summary",five_lawyersUsed:"PV - Lawyers Used",
    five_LegalFee:"Legal Fee",five_CompanyLawyer:"Legal Provider Used On Otherside",five_LegalSummary:"LDD Summary",five_ArticlesSummary:"AoA Summary",
    five_IaSummary:"Investment Agreement Summary",five_CovenantSummary:"Investor Covenant Summary",five_CddUsed:"CDD Provider",five_CddFee:"CDD Fee",five_CddSummary:"CDD Summary",
    five_MddExternalProviderEngaged:"MDD External Provider Engaged?",five_MddProvider:"MDD Provider",five_MddFee:"MDD Fee",five_MgtReferencesDone:"Have We Referenced Management?",
    five_MddSummary:"MDD Summary",five_KycConfirmedSignificantHolders:"KYC Confirmed on Shareholders with 10%+ Holding?",five_KycDateCompleted:"Date KYC Completed",five_EisReviewed:"Has The EIS AA been Completed and Reviewed?",
    five_EisAdvisor:"Reviewed By",five_EisSubmissionDate:"Date EIS AA Submitted",five_DealSummaryDone:"Deal 2 Page Summary Ready?",five_DdReviewed:"DD and Legals Reviewed For Completeness?",
    five_DdReviewer:"DD Internal Reviewer",five_DdReviewDate:"Date DD Review Conducted", six_DateFinalIc:"Date of Final IC",six_InvestmentAmount:"PV Investment",six_Premoney:"Premoney Valuation",six_TotalRound:"Total Round",
    six_EquityFinal:"PV Equity %",six_PriorReturn:"Do We Have a Prior Return?",six_CommitteeDecision:"Investment Committee Decision",six_DecisionSupport:"IC Rationale",
    seven_EisAssuranceReceived:"Have We Received EIS AA?",seven_DateEisReceived:"Date AA Received",seven_PortfolioIntroduced:"Has We Introduced the Portfolio Team?",
    seven_PrDone:"Have We Arranged PR With Marketing?",seven_ReviewedManagementAccs:"Have We Reviewed The Latest Management Accounts?",seven_FinalLegalBible:"Have We Received and Saved Final Legal Bible?",seven_AgreedBoard:"Have We Agreed Who Will Take The Observer and ID Board Seat?",
    seven_SummarySent:"Have We Sent The Completion Memo to Marketing?", eight_CompletionDate: "Date Deal Completed",
    eight_EisOneSentDate: "Date EIS 1 Sent", eight_EisThreeReceivedDate: "Date EIS 3 Received",
    eight_EisFiveSentDate: "Date EIS 5 Sent", eight_EisFiveReceivedDate: "Date EIS 5 Received",
    eight_UploadedEisToPortal: "Have We Uploaded EIS Certificates to Investor Portal?",
    eight_SidecarInvestorOne:"Name of 1st Sidecar Investor",
    eight_SidecarInvestorOneAmount:"Amount Invested",
    eight_SidecarInvestorOneTransactionDate:"Transaction Date",
    eight_SidecarInvestorOneCompletionDate: "Completion Date",
    eight_SidecarInvestorOneEquity:"Equity %",
    eight_SidecarInvestorOneShares: "Number of Shares Bought",
    eight_SidecarInvestorTwo:"Name of 2nd Sidecar Investor",
    eight_SidecarInvestorTwoAmount:"Amount Invested",
    eight_SidecarInvestorTwoTransactionDate:"Transaction Date",
    eight_SidecarInvestorTwoCompletionDate: "Completion Date",
    eight_SidecarInvestorTwoEquity:"Equity %",
    eight_SidecarInvestorTwoShares: "Number of Shares Bought",
    eight_VpInvestorOne: "VP1 Name", eight_VpInvestorOneAmount: "VP1 Amount Invested",
    eight_VpInvestorOneTransactionDate: "VP1 Transaction Date",
    eight_VpInvestorOneCompletionDate:"VP1 Completion Date",
    eight_VpInvestorOneEquity: "VP1 Equity %",  eight_VpInvestorOneShares: "VP1 Shares bought",
    eight_VpInvestorTwo: "VP2 Name", eight_VpInvestorTwoAmount: "VP2 Amount Invested",
    eight_VpInvestorTwoTransactionDate: "VP2 Transaction Date",
    eight_VpInvestorTwoCompletionDate:"VP2 Completion Date",
    eight_VpInvestorTwoEquity: "VP2 Equity %",  eight_VpInvestorTwoShares: "VP2 Shares bought",
    eight_VpInvestorThree: "VP3 Name", eight_VpInvestorThreeAmount: "VP3 Amount Invested",
    eight_VpInvestorThreeTransactionDate: "VP3 Transaction Date",
    eight_VpInvestorThreeCompletionDate:"VP3 Completion Date",
    eight_VpInvestorThreeEquity: "VP3 Equity %",  eight_VpInvestorThreeShares: "VP3 Shares bought",
    eight_VpInvestorFour: "VP4 Name", eight_VpInvestorFourAmount: "VP4 Amount Invested",
    eight_VpInvestorFourTransactionDate: "VP4 Transaction Date",
    eight_VpInvestorFourCompletionDate:"VP4 Completion Date",
    eight_VpInvestorFourEquity: "VP4 Equity %",  eight_VpInvestorFourShares: "VP4 Shares bought",
}

//TODO need validation for mandatory fields

// console.log(Object.keys(inputList[0])[0])

//TODO - add dividers - keep fieldSet but inject wrapper div in at start. close out wrapper div on exit of stage loop, unless
// comes across special keyword i.e. divider in inputList, then close out and add new wrapper field-divider. field set no longer a grid,
// but field-divider will be.


function addAsterisk(field) {
    if(field === 'one_PvLead') {
        console.log(mandatoryFields[field])
    }
    if (mandatoryFields[field]) {
        return `<span class="red-asterisk">*</span>`
    } else {
        return '';
    }
}

function generateHtmlInputs(inputList) {
    const formContainer = document.getElementsByClassName('form-controls')[0];

    inputList.forEach((stage,index) => {

        let currentStage = `stage-${Object.keys(inputList[index])[0]}-fields`;
        let stageFieldContainer = document.createElement('div');
        stageFieldContainer.classList.add("field-set");
        stageFieldContainer.id = currentStage
        let wrapperId = `stage-${Object.keys(inputList[index])[0]}-first-divider`;
        let htmlToInject= `<div class="field-divider-wrapper" id="${wrapperId}">`;


        for(field in inputList[index][Object.keys(inputList[index])]) {

            if (/divider\d/.test(field)) {
                let dividerId = `${inputList[index][Object.keys(inputList[index])][field]}-divider`
                htmlToInject += `</div><h3 class="divider-headers">${inputList[index][Object.keys(inputList[index])][field]}</h3><hr class="divider-hr">
                                <div class="field-divider-wrapper" id="${dividerId}">`;
                continue;
            }
            else if (inputList[index][Object.keys(inputList[index])][field] === "STRING") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                         <input  id="${field}" type="text" class="validate form-control">
                         
                       </div>`;
                htmlToInject += html;

            }
            else if (inputList[index][Object.keys(inputList[index])][field] === "TEXTAREA") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                         <textarea id="${field}" type="text" class="validate form-control" rows="3"></textarea>
                         
                       </div>`;
                htmlToInject += html;
            }else if (inputList[index][Object.keys(inputList[index])][field] === "INTEGER" || inputList[index][Object.keys(inputList[index])][field] === "FLOAT") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                         <input  id="${field}" type="number" class="validate form-control">
                         
                       </div>`;
                htmlToInject += html;
            } else if(typeof inputList[index][Object.keys(inputList[index])][field] === "object") {
                // Populates select boxes
                    let selectArr = inputList[index][Object.keys(inputList[index])][field];
                    let optionsHtml;
                    selectArr.forEach((value) =>{
                        let optionValue = `<option value="${value}">${value}</option>`;
                        optionsHtml += optionValue;

                    })

                    let html = `<div class="form-group">
                    <label for="${field}">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                    <select class="form-control" id="${field}">
                      <option value=""></option>
                      ${optionsHtml}
                    </select>
                  </div>`;
                    htmlToInject += html;

            } else if (inputList[index][Object.keys(inputList[index])][field] === "DATEONLY") {
                 let html = `<div class="form-group">
                    <label for="${field}">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                    <input class="datepicker-ui validate form-control" id="${field}"/>

                    </div>`;
                htmlToInject += html;
            } else if (inputList[index][Object.keys(inputList[index])][field] === "RADIO") {
                let html = `<div class="form-group">
                <label for="">${fieldNameMapping[field]}${addAsterisk(field)}</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${field}-yes" id="${field}-yes" value="true">
                <label class="form-check-label" for="${field}">
                  Yes
                </label></div>
              
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${field}-no" id="${field}-no" value="false">
                <label class="form-check-label" for="${field}-no">
                  No
                </label>
              </div></div>`;
              htmlToInject += html;
            } else if (inputList[index][Object.keys(inputList[index])][field] === "MULTISELECT") {
                // Think this is the only multiselect required, if more need to modify
                let html = `<div class="form-group">
                <label for="${field}">${fieldNameMapping[field]}${addAsterisk(field)}:</label>
                <select multiple class="form-control" id="${field}">
                <option value="Andy Round">Andy Round</option>
                <option value="Guy Weaver">Guy Weaver</option>
                <option value="Jamie Newall">Jamie Newall</option>
                <option value="Louise Chapman">Louise Chapman</option>
                <option value="Mark Lyons">Mark Lyons</option>
                <option value="Myrto Lalacos">Myrto Lalacos</option>
                <option value="Pete Carway">Pete Carway</option>     
                <option value="Sim Landa">Sim Landa</option>
                </select>
              </div>`;
              htmlToInject += html;
            }
            // else if (inputList[index][Object.keys(inputList[index])][field] === "FLOAT") {
            //
            // }
        }
        //Add Html
        htmlToInject += `</div>`;
        stageFieldContainer.innerHTML = htmlToInject;
        formContainer.appendChild(stageFieldContainer);
        $( ".datepicker-ui" ).datepicker({
            dateFormat: "dd/mm/yy"
        });



    })

}

function insertSelect(optionsArr, FieldName){

    let optionsHtml;
    optionsArr.forEach((option) => {
        optionsHtml+= `<option value="option">${option}</option>`
    })

    let htmlToInsert = `
    <select class="form-control" id="${field}">
          <option value=""></option>
          ${optionsHtml}
    </select>
    `;


    return htmlToInsert;

}

function insertDate(FieldName) {
    let html = `
                    <input class="datepicker-ui validate form-control" id="${FieldName}"/>

                    `;
    return html;
}

function insertIntegerInput(FieldName) {
    let html = `
                         
         <input  id="${FieldName}" type="number" class="validate form-control">                        
                     
    `;
    return html;
}


function generateModals() {

}

function generateStageEightAllocationTable(){

    let entryPoint = document.getElementById("Deal Allocation Summary:-divider");

    let htmlToInsert = `<table id="eight-table">
  <tr class="eight-table-row">
    <th class="td-padding" id="eight-table-header">Fund Allocation Summary</th>
    <th class="td-padding">Tranche 1</th>
    <th class="td-padding">Tranche 2</th>
    <th class="td-padding">Tranche 3</th>
    
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">EIS Fund</td>
    <td class="td-padding">${insertSelect(funds,"eight_TrancheOneFund")}</td>
    <td class="td-padding">${insertSelect(funds,"eight_TrancheTwoFund")}</td>
    <td class="td-padding">${insertSelect(funds,"eight_TrancheThreeFund")}</td>
    
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">Amount</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheOneAmount")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheTwoAmount")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheThreeAmount")}</td>
  
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">Transaction Date</td>
    <td class="td-padding">${insertDate("eight_TrancheOneTransactionDate")}</td>
    <td class="td-padding">${insertDate("eight_TrancheTwoTransactionDate")}</td>
    <td class="td-padding">${insertDate("eight_TrancheThreeTransactionDate")}</td>
   
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">Completion Date</td>
    <td class="td-padding">${insertDate("eight_TrancheOneCompletionDate")}</td>
    <td class="td-padding">${insertDate("eight_TrancheTwoCompletionDate")}</td>
    <td class="td-padding">${insertDate("eight_TrancheThreeCompletionDate")}</td>   
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">Number of Shares</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheOneShares")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheTwoShares")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheThreeShares")}</td>   
  </tr>
  <tr class="eight-table-row">
    <td class="td-padding">Equity (%)</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheOneEquity")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheTwoEquity")}</td>
    <td class="td-padding">${insertIntegerInput("eight_TrancheThreeEquity")}</td>   
  </tr>
</table>`;

    entryPoint.innerHTML = htmlToInsert;
    $( ".datepicker-ui" ).datepicker({
        dateFormat: "dd/mm/yy"
    });

}


module.exports.generateHtmlInputs = generateHtmlInputs;
module.exports.generateStageEightAllocationTable = generateStageEightAllocationTable;
module.exports.inputList = inputList;
module.exports.mandatoryFields = mandatoryFields;