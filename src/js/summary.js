import '../assets/style.css';
const TableController = require('./tablecontroller.js');
const UIController = require('./uicontroller');


import image from "../assets/img/Praetura-Ventures-logo_white_rgb_small1.png";




function setInitState() {
    document.getElementById('status-filter').value = 'Active';

    UIController.displayRows(0);
    console.log('init')

}

function getState() {
    let stage = document.getElementById('stage-filter').value;
    let status = document.getElementById('status-filter').value;
    let location = document.getElementById('location-filter').value;
    let person = document.getElementById('person-filter').value;

    const state = {};
    state.stage = stage;
    state.status = status;
    state.location = location;
    state.person = person;

    return state;
}

function paginationHandler() {
    //TODO need to finish back and next btns
    let paginationLinks = document.querySelectorAll('.pagination-link')
    paginationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {

            e.preventDefault();
            link.setAttribute('active:','active');


            let startIndex = Number.parseInt(e.target.textContent);
            UIController.displayRows(startIndex)



        })
    })

    let back = document.querySelector('.pagination-back');
    let next = document.querySelector('.pagination-next');
    back.addEventListener('click', (e) => {
        e.preventDefault();

    })
}

//TODO use getState and send all states to get all filters data. onload only get active still
//TODO on state change on desc/asc on headers , filter dom dont refetch
function addFilterEventListeners() {
     console.log('addEvent listeners')
    let filters = document.querySelectorAll('select');
    filters.forEach((filter) => {
        filter.addEventListener('change',(e) =>{
                let state = getState();
                fetch(`/getFilteredData/${e.target.value}/${e.target.id}`, {
                method: 'POST',
                    body: JSON.stringify(state),
                    headers: {"Content-Type":'application/json'}
                }).then(res => {return res.json()}).then((res) => {
                UIController.buildSummaryTable(res);
                UIController.createPagination(res.length);
                UIController.displayRows(0);
                paginationHandler();

            })

        })

})
    document.querySelector('#search-input').addEventListener('keyup', () => {
        let tableEntries = document.querySelectorAll('.summary-row');
        let searchVal = document.querySelector('#search-input').value.toLowerCase();
        tableEntries.forEach((row) => {
            if (row.textContent.toLowerCase().includes(searchVal)) {
                row.style.display = 'table-row';
            } else {
                row.style.display = 'none';
            }
        })




        });



    }

// Init page
document.querySelector('#navbar-logo').src = image;

TableController.filterToggle();
UIController.loadEventListeners();
UIController.buildTable().then(() => {
    addFilterEventListeners();
    setInitState();
})





