import '../assets/style.css';
const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
import '../assets/bootstrap.min.css';
import image from '../assets/img/Praetura-Ventures-logo_white_rgb_small1.png';
const inputController = require('./inputController');
const uiController = require('./uicontroller');
const mandatoryFields = inputController.mandatoryFields;
//Get stage one fields
const inputList = inputController.inputList[1];
const inputArr = [];
inputArr.push(inputList)

function checkMandatory() {
    let inputs = document.querySelectorAll('input, select');
    let val;

    for (let i=0; i < inputs.length; i++) {

        if (mandatoryFields[inputs[i].id]) {
            if (inputs[i].value === undefined || inputs[i].value === null || inputs[i].value === "" || inputs[i].value === " ") {
                inputs[i].parentNode.classList.add('mandatory-msg');

               val = new Promise((resolve,reject) => {
                    setTimeout(function () {
                        inputs[i].parentNode.classList.remove('mandatory-msg');
                        resolve(false);
                    }, 3000)
                })
                break;




            } else {
               val = new Promise((resolve, reject) => {
                    resolve(true);
                })


            }
    }


    }
    return val;

}

async function checkMandatoryHandler(promise) {
    let ans = promise.then((data) => {
        return data
    })


    return ans
}







document.querySelector('#navbar-logo').src = image;
uiController.loadEventListeners();

inputController.generateHtmlInputs(inputArr)

document.getElementById('add-btn').addEventListener('click',  async (e) => {
   // console.log(checkMandatoryHandler(checkMandatory()).then((ans) => {console.log(ans)}))
    if (await checkMandatoryHandler(checkMandatory()).then((ans) => {return ans})===true) {

        let data = {};
        let inputs = document.querySelectorAll('input , select');
        inputs.forEach((input) => {
            if (input.value ==="") {
                data[input.id] = null;
            } else {
                data[input.id] = input.value;

            }

        })

        fetch('/postOpportunity' , {
            method: 'POST',
            body: JSON.stringify(data) ,
            headers: {"Content-Type":'application/json'}
        }).then().catch((e) => {
            console.log(e);
            alert(e);

        })

        let addBtn = document.getElementById('add-link');
        addBtn.setAttribute('href','/html/summary.html')
        addBtn.click()

    } else {
        alert('Something went wrong!')
    }
})

