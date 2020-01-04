import '../assets/style.css';
const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min');
const UIController = require('./uicontroller.js');
const inputController = require('./inputController');
import '../assets/bootstrap.min.css';
import image from '../assets/img/Praetura-Ventures-logo_white_rgb_small1.png';

const inputList = inputController.inputList;
console.log(inputList);


import uicontroller from "./uicontroller";
// const materialize = require('materialize-css/dist/css/materialize.min.css');
// // // const bootstrapCSS = require('bootstrap/dist/css/bootstrap.min.css');
// const materializeJS = require('materialize-css/dist/js/materialize.min.js');


document.querySelector('#navbar-logo').src = image;
inputController.generateHtmlInputs(inputList);
inputController.generateStageEightAllocationTable();
//TODO need to take note of the stage before init here
UIController.setLoadState(8);
UIController.setFields(8);
UIController.loadEventListeners();
document.getElementById('add-opp').addEventListener('click', () => {
    fetch('/request').then(data => console.log(data)).catch(() => console.log('Something went wrong'))
})

