
const selectOptions = ["Jamie", "Ben", "Nicole", "Ian", "Kate"];

const inputList = [{0:{name:"STRING"}},{1:{one_OppName:selectOptions,
    one_PvLead:"DATEONLY",one_IntroDate:"DATEONLY",one_Introducer:"STRING",one_Referrer:"STRING",
    one_InvestmentAmount:"INTEGER",one_PreMoney:"INTEGER",one_TotalInvestment:"INTEGER",one_EquityPercentage:"FLOAT",
    one_Location:"STRING",one_Sector:"STRING",one_InvestmentStage:"STRING",one_InvestmentToDate:"INTEGER",
    one_Activity:"STRING",one_TargetCustomers:"STRING"}},{2:{two_NdaSigned:"RADIO",two_TeamMembers:"MULTISELECT"}},{3:{three_CompanyDescription:"TEXTAREA",
    three_PvSplit:"INTEGER",three_VpSplit:"INTEGER",three_FundAllocation:"INTEGER"}}]

//TODO need to add multi select and radio fields to the below
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
    two_TeamMembers: 'Who is the deal team?',
    three_CompanyDescription:"Short Company Description",
    three_PvSplit:"PV Allocation Split (%)",
    three_VpSplit:"Venture Partner Allocation Split (%)",
    three_FundAllocation:"Total Allocation (%)"
}



// console.log(Object.keys(inputList[0])[0])

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
                let html = `<div class="form-group"><div class="form-check">
                <input class="form-check-input" type="radio" name="${field}-yes" id="${field}-yes" value="TRUE">
                <label class="form-check-label" for="${field}">
                  Yes
                </label>
              </div>
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
                <label for="${filed}">${fieldNameMapping[field]}</label>
                <select multiple class="form-control" id="${field}">
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