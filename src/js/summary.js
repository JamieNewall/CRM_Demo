import '../assets/style.css';
const TableController = require('./tablecontroller.js');
const UIController = require('./uicontroller');


import image from "../assets/img/Praetura-Ventures-logo_white_rgb_small1.png";

// Init page
document.querySelector('#navbar-logo').src = image;
TableController.filterToggle();
UIController.loadEventListeners();
