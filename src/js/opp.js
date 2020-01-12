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
        document.getElementById('edit-btn').remove();
    } else if (state === 'Monitor') {
        document.getElementById('edit-btn').parentNode.remove();
        document.getElementById('monitor-btn').parentNode.remove();
        document.getElementById('proceed-btn').parentNode.remove();
        let container = document.querySelector('.dropdown-menu');
        let wrapper = document.createElement('div');
        wrapper.innerHTML = `<a class="dropdown-item" href="#">
            <button type="button" id="reinstate-btn" class="btn">
            Reinstate Opportunity
        </button></a>`;
        // let html = wrapper.childNodes;
        // console.log(wrapper)
        container.insertBefore(wrapper.firstChild,container.children[0])
    } else if (state === 'Declined') {
        document.getElementById('dropdownMenuButton').remove();
        document.getElementById('edit-btn').remove();
    }
}

function populateInputs(data) {

    for (let prop in data) {
        if(typeMapping[prop] === 'DATEONLY') {
            moment.locale('en-gb')
            data[prop] = moment(data[prop]).format('DD/MM/YYYY');
        } if(typeMapping[prop] === 'FLOAT') {
            if(data[prop] < 1) {
                data[prop] = (data[prop] * 100).toFixed(2);
            } else {
            // console.log(data[prop], prop)
            }
        } if(typeMapping[prop] === 'BOOLEAN') {
            if (data[prop] === 'Yes' || data[prop] === 'true' || data[prop] === 'yes') {
                document.getElementById(`${prop}-yes`).checked = true;
            } else if (data[prop] === 'No' || data[prop] === 'false'|| data[prop] === 'no') {
                document.getElementById(`${prop}-no`).checked = true;
            }


        }


        // console.log(typeof data[prop], data[prop] , prop)
        let input = document.getElementById(prop)
        // console.log(input, data[prop])
        if ( input !== null) {
            input.value = data[prop];
        }

    }
}

function moveToMonitor() {

    let data ={};
    data.one_OppName = document.getElementById('one_OppName').value;

    data.opp_Status = 'Monitor'

    fetch('/updateOpportunity', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {"Content-Type": "application/json"}}).then(() => {
        // UIController.setFields(nextStage);
       hideModal();
       setButtonState('Monitor')
        let reinstate = document.getElementById('reinstate-btn');
        reinstate.addEventListener('click',reinstateOpp)


    })
        .catch((e) => {
            console.log(e)
            alert(e)
        })
}

function reinstateOpp() {
    let data ={};
    data.one_OppName = document.getElementById('one_OppName').value;

    data.opp_Status = 'Active'

    fetch('/updateOpportunity', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {"Content-Type": "application/json"}}).then(() => {
        // UIController.setFields(nextStage);

        hideModal();
        location.reload();
    })
        .catch((e) => {
            console.log(e)
            alert(e)
        })
}

function declineOpp() {
    let data ={};
    data.one_OppName = document.getElementById('one_OppName').value;

    data.opp_Status = 'Declined'

    fetch('/updateOpportunity', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {"Content-Type": "application/json"}}).then(() => {
        // UIController.setFields(nextStage);
        setButtonState('Declined')
        hideModal();
    })
        .catch((e) => {
            console.log(e)
            alert(e)
        })
}

function hideModal() {
    document.getElementById('monitor-btn-no').click();
    document.getElementById('decline-btn-no').click();
    document.getElementById('proceed-no-btn').click();
    disableFields();
   // document.querySelectorAll('.modal').forEach((modal) => {
   //     modal.style.display = 'none';
   //     modal.className = 'modal fade';
   //
   // })
   //  let backdrop = document.getElementsByClassName('modal-backdrop')[0]
   //  backdrop.classList.remove('show');
   //  backdrop.style.display = 'none';
   //  document.querySelector('body').removeAttribute('class');
   //  document.querySelector('body').removeAttribute('style');
   }

function getCurrentStage() {
    let container = document.querySelector('.grid-container');
    console.log(container.children.length);
    return container.children.length
}

function proceedToNextStage() {

    let data ={};
    data.one_OppName = document.getElementById('one_OppName').value;
    let nextStage = getCurrentStage()

    data.opp_CurrentStage = nextStage;
    console.log(data)
    fetch('/updateOpportunity', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {"Content-Type": "application/json"}}).then(() => {
            // UIController.setFields(nextStage);
            hideModal();
            UIController.setFields(nextStage);
            UIController.proceedStage(nextStage);

    })
        .catch((e) => {
            console.log(e)
            alert(e)
        })
}

function oppAddEventListeners(data) {
    let proceed = document.getElementById('proceed-yes-btn');
    let monitor = document.getElementById('monitor-btn-yes');
    let decline = document.getElementById('decline-btn-yes');
    let reinstate = document.getElementById('reinstate-btn');
    proceed.addEventListener('click', proceedToNextStage)
    monitor.addEventListener('click',moveToMonitor)
    decline.addEventListener('click', declineOpp)
    try {
    reinstate.addEventListener('click',reinstateOpp)
    } catch(e) {

    }
}


function disableFields() {
    let inputs = document.querySelectorAll('input , textarea');
    inputs.forEach((input) => {
        input.setAttribute('disabled','true');
    })
    let selectInputs = document.querySelectorAll('select');
    selectInputs.forEach((select) => {
        select.setAttribute('disabled','');
    })

}

function editFields() {
    let inputs = document.querySelectorAll('input , textarea');
    inputs.forEach((input) => {
        input.removeAttribute('disabled');
    })
    let selectInputs = document.querySelectorAll('select');
    selectInputs.forEach((select) => {
        select.removeAttribute('disabled');
    })
}

function editFieldModalSetup() {
    let monitor = document.getElementById('monitor-btn').parentNode;
    let decline = document.getElementById('decline-btn').parentNode;
    monitor.addEventListener('click', () => {
        editFields()
        console.log('triggered')
    })
    decline.addEventListener('click', () => {
        editFields()
    })

}

function editBtnLoad() {
    let btn = document.getElementById('edit-btn');
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'Edit'){
            e.target.textContent = 'Save';
            editFields();
         } else {
            e.target.textContent = 'Edit'
            disableFields();
            let data = {};
            let inputs = document.querySelectorAll('input , select, textarea');
            inputs.forEach((input) => {
                if (input.value ==="") {
                    data[input.id] = null;
                } else {
                    data[input.id] = input.value;
                }})
            console.log(data);
            fetch('/updateOpportunity', {
                method: 'POST',
                body:JSON.stringify(data),
                headers: {"Content-Type": "application/json"}}).then()
                    .catch((e) => {
                        console.log(e)
                        alert(e)
                    })
            }

        }
)
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
            editBtnLoad();
            initMultiSelect(opp.two_TeamMembers)
            populateInputs(opp)
            console.log(opp.opp_Status)
            setButtonState(opp.opp_Status)
            oppAddEventListeners(opp);
            editFieldModalSetup();


        }).then((data) => {

    })

}






// UIController.setLoadState(8);
// UIController.setFields(8);
getInitData()

// document.getElementById('add-opp').addEventListener('click', () => {
//     fetch('/summary').then(data => data.text()).then((data) => console.log(data)).catch(() => console.log('Something went wrong'))
// })

