

// Select Option Arrays
const investmentDirectors = ["Andy Round", "Guy Weaver", "Mark Lyons"];
const iCReviewMembers = ["David Foreman","Mike Fletcher", "Peadar Oreilly","Rob Memmott"];
const legalDDProviders = ["Gateley","Hilldicks","Irwin Mitchell"];
const commercialDDProviders = ["PMSI","None","Other"];
const EisExperts = ["Phillip Hare", "Fairhurst"];
const targetCustomers = ["B2B","B2C","B2B2C"];
const investmentTeam = ["Andy Round","Ben Hatton","David Foreman","Guy Weaver","Jamie Newall","Louise Chapman","Mark Lyons","Myrto Lalacos","Pete Carway","Sim Landa"];
const venturePartners = ["VP1","VP2","VP3"];
const leadSource = ["Advisor Community", "HNW Investors / Venture Partner", "Inbound/Website Applications","Industry Events",
"Key Hubs / Accelerators", "Linkedin Cold Approach","Other VC / PE Intro","Personal Network (inc. Linkedin)","Portfolio Businesses"];
//TODO need to update these and VP array
const sectors = ["Sector 1","Sector 2"];
const investmentStage = ["Seed", "Early VC"];

//List of inputs to be created
const inputList = [{0:{one_OppName:"STRING"}},{1:{one_OppName:"STRING",
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
    }}, {5:{ five_financialExternalProviderEngaged:"RADIO",five_financialSummary:"TEXTAREA",five_lawyersUsed:legalDDProviders,
        five_LegalFee:"INTEGER",five_CompanyLawyer:"STRING",five_LegalSummary:"TEXTAREA",five_ArticlesSummary:"TEXTAREA",
        five_IaSummary:"TEXTAREA",five_CovenantSummary:"TEXTAREA",five_CddUsed:commercialDDProviders,five_CddFee:"INTEGER",five_CddSummary:"TEXTAREA",
        five_MddExternalProviderEngaged:"RADIO",five_MddProvider:"STRING",five_MddFee:"INTEGER",five_MgtReferencesDone:"RADIO",
        five_MddSummary:"TEXTAREA",five_KycConfirmedSignificantHolders:"RADIO",five_KycDateCompleted:"DATEONLY",five_EisReviewed:"RADIO",
        five_EisAdvisor:EisExperts,five_EisSubmissionDate:"DATEONLY",five_DealSummaryDone:"RADIO",five_DdReviewed:"RADIO",
        five_DdReviewer:investmentDirectors,five_DdReviewDate:"DATEONLY"}}]


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
    five_DdReviewer:"DD Internal Reviewer",five_DdReviewDate:"Date DD Review Conducted"
}

//TODO need validation for mandatory fields

// console.log(Object.keys(inputList[0])[0])

//TODO - add dividers - keep fieldSet but inject wrapper div in at start. close out wrapper div on exit of stage loop, unless
// comes across special keyword i.e. divider in inputList, then close out and add new wrapper field-divider. field set no longer a grid,
// but field-divider will be.


function generateHtmlInputs(inputList) {
    const formContainer = document.getElementsByClassName('form-controls')[0];

    inputList.forEach((stage,index) => {

        let currentStage = `stage-${Object.keys(inputList[index])[0]}-fields`;
        let stageFieldContainer = document.createElement('div');
        stageFieldContainer.classList.add("field-set");
        stageFieldContainer.id = currentStage;
        let htmlToInject='';


        for(field in inputList[index][Object.keys(inputList[index])]) {

            if (inputList[index][Object.keys(inputList[index])][field] === "STRING") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}:</label>
                         <input  id="${field}" type="text" class="validate form-control">
                         
                       </div>`;
                htmlToInject += html;

            }
            else if (inputList[index][Object.keys(inputList[index])][field] === "TEXTAREA") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}:</label>
                         <textarea id="${field}" type="text" class="validate form-control" rows="3"></textarea>
                         
                       </div>`;
                htmlToInject += html;
            }else if (inputList[index][Object.keys(inputList[index])][field] === "INTEGER" || inputList[index][Object.keys(inputList[index])][field] === "FLOAT") {
                let html = `<div class="form-group">
                          <label for="${field}\\">${fieldNameMapping[field]}:</label>
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
                    <label for="${field}">${fieldNameMapping[field]}:</label>
                    <select class="form-control" id="${field}">
                      <option value=""></option>
                      ${optionsHtml}
                    </select>
                  </div>`;
                    htmlToInject += html;

            } else if (inputList[index][Object.keys(inputList[index])][field] === "DATEONLY") {
                 let html = `<div class="form-group">
                    <label for="${field}">${fieldNameMapping[field]}:</label>
                    <input class="datepicker-ui validate form-control" id="${field}"/>

                    </div>`;
                htmlToInject += html;
            } else if (inputList[index][Object.keys(inputList[index])][field] === "RADIO") {
                let html = `<div class="form-group">
                <label for="">${fieldNameMapping[field]}</label>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${field}-yes" id="${field}-yes" value="TRUE">
                <label class="form-check-label" for="${field}">
                  Yes
                </label></div>
              
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${field}-no" id="${field}-no" value="FALSE">
                <label class="form-check-label" for="${field}-no">
                  No
                </label>
              </div></div>`;
              htmlToInject += html;
            } else if (inputList[index][Object.keys(inputList[index])][field] === "MULTISELECT") {
                // Think this is the only multiselect required, if more need to modify
                let html = `<div class="form-group">
                <label for="${field}">${fieldNameMapping[field]}</label>
                <select multiple class="form-control" id="${field}">
                <option value="Andy">Andy</option>
                <option value="Guy">Guy</option>
                <option value="Jamie">Jamie</option>
                <option value="Louise">Louise</option>
                <option value="Mark">Mark</option>
                <option value="Myrto">Myrto</option>
                <option value="Pete">Pete</option>     
                <option value="Sim">Sim</option>
                </select>
              </div>`;
              htmlToInject += html;
            }
            // else if (inputList[index][Object.keys(inputList[index])][field] === "FLOAT") {
            //
            // }
        }
        //Add Html
        stageFieldContainer.innerHTML = htmlToInject;
        formContainer.appendChild(stageFieldContainer);
        $( ".datepicker-ui" ).datepicker({
            dateFormat: "dd/mm/yy"
        });


    })

}


module.exports.generateHtmlInputs = generateHtmlInputs;
module.exports.inputList = inputList;