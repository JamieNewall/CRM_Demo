import '../assets/style.css';
const TableController = require('./tablecontroller.js');
const UIController = require('./uicontroller');


import image from "../assets/img/Praetura-Ventures-logo_white_rgb_small1.png";


function buildTable() {
    let data =  fetch('/getData').then(res => {return res.json()}).then((res) => {


            UIController.buildSummaryTable(res);

        }).catch((err) => console.log(err))

}

function addFilterEventListeners() {
    let filters = document.querySelectorAll('select');
    filters.forEach((filter) => {
        filter.addEventListener('change',(e) =>{
                fetch(`/getFilteredData/${e.target.value}/${e.target.id}`, {
                method: 'POST'
                }).then(res => {return res.json()}).then((res) => {
                UIController.buildSummaryTable(res);
            })

        })

})
    document.querySelector('#search-input').addEventListener('keyup', () => {
        let rows = document.querySelectorAll('.summary-row');

        let searchVal = document.querySelector('#search-input').value.toLowerCase();
        rows.forEach((row) => {
            let test = row.classList;
            let arrTest = Array.from(test);
            let cleansedList = arrTest.filter(function(index){
                if (index.toLowerCase().includes(searchVal)){
                    return true;
                }
            });
            console.log(cleansedList)
                if(cleansedList.length > 0) {

                    row.style.display = 'table-row'

                } else {

                    row.style.display = 'none';
                }
            })
        });


    //TODO need to finish
    let paginationLinks = document.querySelectorAll('.pagination-link')
    paginationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {

            e.preventDefault();
            console.log(e.target.textContent);

            let startIndex = Number.parseInt(e.target.textContent);
            UIController.displayRows(startIndex)

        })
    })
    let back = document.querySelector('.pagination-back');
    let next = document.querySelector('.pagination-next');
    back.addEventListener('click', (e) => {

    })
    }

// Init page
document.querySelector('#navbar-logo').src = image;

TableController.filterToggle();
UIController.loadEventListeners();
buildTable();
addFilterEventListeners();



