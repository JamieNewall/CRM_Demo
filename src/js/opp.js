import '../assets/style.css';
const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
const UIController = require('./uicontroller.js');
const inputController = require('./inputController');
const moment = require("moment");
const numeral = require("numeral");
import '../assets/bootstrap.min.css';
import image from '../assets/img/Praetura-Ventures-logo_white_rgb_small1.png';
const typeMapping = {
    one_OppName:"STRING", opp_Status:"STRING" ,one_PvLead:"STRING",opp_CurrentStage:"INTEGER",one_IntroDate:"DATEONLY",one_Introducer:"STRING",one_Referrer:"STRING",one_InvestmentAmount:"INTEGER",one_PreMoney:"INTEGER",one_TotalInvestment:"INTEGER",one_EquityPercentage:"FLOAT",one_Location:"STRING",one_Sector:"STRING",one_InvestmentStage:"STRING",one_InvestmentToDate:"INTEGER",one_Activity:"STRING",one_TargetCustomers:"STRING",
    two_NdaSigned:"BOOLEAN", two_TeamMembers:"STRING",three_CompanyDescription:"MULTILINE",
    three_PvSplit:"INTEGER",three_VpSplit:"INTEGER",three_FundAllocation:"INTEGER", three_proposalSentDateTeam: "DATEONLY",
    three_ProposalSentDateIc: "DATEONLY",
    three_IcMeetingDate: "DATEONLY",
    three_IcApproved:"BOOLEAN",
    four_PvInvestmentAmount:"INTEGER",
    four_PremoneyValuation: "INTEGER",
    four_TotalRoundAmount: "INTEGER",
    four_NonDilutedEquity: "FLOAT",
    //TODO check that this should be a string
    four_FullyDilutedEquity: "STRING",
    four_PriorReturn:"BOOLEAN",
    four_expectedCompletionDate: "DATEONLY",
    four_OfferTeamReviewer: "STRING",
    four_OfferReviewedDate: "DATEONLY",
    four_OfferIcReviewer: "STRING",
    four_OfferIcApprovedDate: "DATEONLY",
    four_OfferSentDate: "DATEONLY",
    five_financialExternalProviderEngaged:"BOOLEAN",five_financialSummary:"STRING",five_lawyersUsed:"STRING",
    five_LegalFee:"INTEGER",five_CompanyLawyer:"STRING",five_LegalSummary:"STRING",five_ArticlesSummary:"STRING",
    five_IaSummary:"STRING",five_CovenantSummary:"STRING",five_CddUsed:"STRING",five_CddFee:"INTEGER",five_CddSummary:"STRING",
    five_MddExternalProviderEngaged:"BOOLEAN",five_MddProvider:"STRING",five_MddFee:"INTEGER",five_MgtReferencesDone:"BOOLEAN",
    five_MddSummary:"STRING",five_KycConfirmedSignificantHolders:"BOOLEAN",five_KycDateCompleted:"DATEONLY",five_EisReviewed:"BOOLEAN",
    five_EisAdvisor:"STRING",five_EisSubmissionDate:"DATEONLY",five_DealSummaryDone:"BOOLEAN",five_DdReviewed:"BOOLEAN",
    five_DdReviewer:"STRING",five_DdReviewDate:"DATEONLY", six_DateFinalIc:"DATEONLY",six_InvestmentAmount:"INTEGER",six_Premoney:"INTEGER",six_TotalRound:"INTEGER",
    six_EquityFinal:"FLOAT",six_PriorReturn:"BOOLEAN",six_CommitteeDecision:"STRING",six_DecisionSupport:"STRING",
    seven_EisAssuranceReceived:"BOOLEAN",seven_DateEisReceived:"DATEONLY",seven_PortfolioIntroduced:"BOOLEAN",
    seven_PrDone:"BOOLEAN",seven_ReviewedManagementAccs:"BOOLEAN",seven_FinalLegalBible:"BOOLEAN",seven_AgreedBoard:"BOOLEAN",
    seven_SummarySent:"BOOLEAN", eight_CompletionDate: "DATEONLY",eight_EisOneSentDate: "DATEONLY",
    eight_EisThreeReceivedDate: "DATEONLY",
    eight_EisFiveSentDate: "DATEONLY", eight_EisFiveReceivedDate: "DATEONLY",
    eight_UploadedEisToPortal: "BOOLEAN", eight_SidecarInvestorOne:"STRING",
    eight_SidecarInvestorOneAmount:"FLOAT",
    eight_SidecarInvestorOneTransactionDate:"DATEONLY",
    eight_SidecarInvestorOneCompletionDate: "DATEONLY",
    eight_SidecarInvestorOneEquity:"FLOAT",
    eight_SidecarInvestorOneShares: "INTEGER",
    eight_SidecarInvestorTwo:"STRING",
    eight_SidecarInvestorTwoAmount:"FLOAT",
    eight_SidecarInvestorTwoTransactionDate:"DATEONLY",
    eight_SidecarInvestorTwoCompletionDate: "DATEONLY",
    eight_SidecarInvestorTwoEquity:"FLOAT",
    eight_SidecarInvestorTwoShares: "INTEGER",
    eight_VpInvestorOne: "STRING",
    eight_VpInvestorOneAmount: "FLOAT",
    eight_VpInvestorOneTransactionDate: "DATEONLY",
    eight_VpInvestorOneCompletionDate:"DATEONLY",
    eight_VpInvestorOneEquity: "FLOAT",
    eight_VpInvestorOneShares: "INTEGER",
    eight_VpInvestorTwo: "STRING",
    eight_VpInvestorTwoAmount: "FLOAT",
    eight_VpInvestorTwoTransactionDate: "DATEONLY",
    eight_VpInvestorTwoCompletionDate:"DATEONLY",
    eight_VpInvestorTwoEquity: "FLOAT",
    eight_VpInvestorTwoShares: "INTEGER",
    eight_VpInvestorThree: "STRING",
    eight_VpInvestorThreeAmount: "FLOAT",
    eight_VpInvestorThreeTransactionDate: "DATEONLY",
    eight_VpInvestorThreeCompletionDate:"DATEONLY",
    eight_VpInvestorThreeEquity: "FLOAT",
    eight_VpInvestorThreeShares: "INTEGER",
    eight_VpInvestorFour: "STRING",
    eight_VpInvestorFourAmount: "FLOAT",
    eight_VpInvestorFourTransactionDate: "DATEONLY",
    eight_VpInvestorFourCompletionDate:"DATEONLY",
    eight_VpInvestorFourEquity: "FLOAT",
    eight_VpInvestorFourShares: "INTEGER",
    eight_TrancheOneFund: "STRING",
    eight_TrancheTwoFund: "STRING",
    eight_TrancheThreeFund: "STRING",
    eight_TrancheOneAmount: "FLOAT",
    eight_TrancheTwoAmount: "FLOAT",
    eight_TrancheThreeAmount: "FLOAT",
    eight_TrancheOneTransactionDate: "DATEONLY",
    eight_TrancheTwoTransactionDate: "DATEONLY",
    eight_TrancheThreeTransactionDate: "DATEONLY",
    eight_TrancheOneCompletionDate: "DATEONLY",
    eight_TrancheTwoCompletionDate: "DATEONLY",
    eight_TrancheThreeCompletionDate: "DATEONLY",
    eight_TrancheOneShares: "INTEGER",
    eight_TrancheTwoShares: "INTEGER",
    eight_TrancheThreeShares: "INTEGER",
    eight_TrancheOneEquity: "FLOAT",
    eight_TrancheTwoEquity: "FLOAT",
    eight_TrancheThreeEquity: "FLOAT",
    decline_Dropdown: "STRING",
    decline_Rationale:"MULTILINE",
    decline_PersonCancelling: "STRING",
    decline_ToldFounders: "BOOLEAN",
    monitor_Dropdown: "STRING",
    monitor_Notes: "MULTILINE",
    monitor_FollowupDate: "DATEONLY"


}


const inputList = inputController.inputList;

function initMultiSelect(people) {
    let select = document.getElementById('two_TeamMembers');
    select.setAttribute('multiple','true');
    let options = select.children;
    if (people === '') {
        return;
    } else if(/[;#\d]/.test(people)) {
        //TODO to finish
        let cleansed = people.replace(/[;#\d]/g,'')
        console.log(cleansed);
        // cleansed.forEach((person)=>{
        //     options.forEach((option) => {
        //         if (option.value === person) {
        //             option.selected = true;
        //         } else {
        //             option.selected = false;
        //         }
        //     })
        // })

    }


}

function setButtonState(state) {

    if(state === 'Completed') {
        document.getElementById('dropdownMenuButton').remove()
    } else if (state === 'Monitored') {
    //    TODO to complete
    } else if (state === 'Declined') {
        document.getElementById('dropdownMenuButton').remove()
    }
}

function populateInputs(data) {

    for (let prop in data) {
        if(typeMapping[prop] === 'DATEONLY') {
            moment.locale('en-gb')
            data[prop] = moment(data[prop]).format('L');
        } if(typeMapping[prop] === 'FLOAT') {
            data[prop] = numeral(data[prop]).format('0 %');
        } if(typeMapping[prop] === 'FLOAT') {
            data[prop] = numeral(data[prop]).format('0 %');
        }


        // console.log(typeof data[prop], data[prop] , prop)
        let input = document.getElementById(prop)
        // console.log(input, data[prop])
        if ( input !== null) {
            input.value = data[prop];
        }

    }
}


import uicontroller from "./uicontroller";
// const materialize = require('materialize-css/dist/css/materialize.min.css');
// // // const bootstrapCSS = require('bootstrap/dist/css/bootstrap.min.css');
// const materializeJS = require('materialize-css/dist/js/materialize.min.js');

function disableFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.setAttribute('readonly','');
    })
    let selectInputs = document.querySelectorAll('select');
    selectInputs.forEach((select) => {
        select.setAttribute('disabled','');
    })

}




async function getInitData(){
    let url = window.location.href
    let match = url.match(/(?<=opportunity\/)\w+(?=%7D)/);
    let matchString = match[0].replace(/_/g,' ');
    let jsonObj = {value : matchString}
    const data = await fetch('/getOppData', {
        method: 'POST',
        body: JSON.stringify(jsonObj) ,
        headers: {"Content-Type":'application/json'}}).then((res) => {return res.json()} ).then((data) =>{
            const opp = data[0];



            document.querySelector('#navbar-logo').src = image;
            inputController.generateHtmlInputs(inputList);
            inputController.generateStageEightAllocationTable();

            UIController.setLoadState(opp.opp_CurrentStage);
            UIController.setFields(opp.opp_CurrentStage);
            UIController.loadEventListeners();
            disableFields();
            initMultiSelect(opp.two_TeamMembers)
            populateInputs(opp)
            setButtonState(opp.opp_Status)

        });

}






// UIController.setLoadState(8);
// UIController.setFields(8);
getInitData()

// document.getElementById('add-opp').addEventListener('click', () => {
//     fetch('/summary').then(data => data.text()).then((data) => console.log(data)).catch(() => console.log('Something went wrong'))
// })

