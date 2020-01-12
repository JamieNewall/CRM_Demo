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

    let paginationLinks = document.querySelectorAll('.added-pagination')
    paginationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {

            e.preventDefault();
            e.target.parentNode.parentNode.childNodes.forEach((node) => {
                if (node.classList !== undefined) {
                    node.classList.remove('active');
                }
            })
            e.target.parentNode.classList.toggle('active');




            let startIndex = Number.parseInt(e.target.textContent);
            UIController.displayRows(startIndex)



        })
    })

    let back = document.querySelector('.pagination-back');
    let next = document.querySelector('.pagination-next');
    back.addEventListener('click', (e) => {
        e.preventDefault();
        let target = document.querySelector('.pagination li.active');
        let paginationLength = document.querySelectorAll('.pagination-link').length
        let nextTarget = target.previousSibling;
        console.log(nextTarget.textContent)
        if (Number.parseInt(target.textContent) > 1) {
            target.classList.remove('active');
            nextTarget.firstChild.click();
            nextTarget.classList.add('active');
        }
        e.stopImmediatePropagation();
        e.preventDefault();
    })
    next.addEventListener('click', (e) => {


        let target = document.querySelector('.pagination li.active');
        let paginationLength = document.querySelectorAll('.pagination-link').length
        let nextTarget = target.nextSibling;


        if (Number.parseInt(target.textContent) < paginationLength ) {
            target.classList.remove('active');
            console.log(nextTarget)
            nextTarget.firstChild.click();
            console.log('clicked')
            nextTarget.classList.add('active');
        }
        e.stopImmediatePropagation();
        e.preventDefault();
    })
}


function addFilterEventListeners() {

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
        let page = document.querySelector('.pagination li.active').textContent;
        UIController.displayRows(page)
        //makes pagination strict
        // let testEntries =[];
        // tableEntries.forEach((entry) => {
        //     if (entry.style.display === 'table-row') {
        //         testEntries.push(entry)
        //     }
        // })
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
    paginationHandler();
})





