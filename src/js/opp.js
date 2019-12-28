import '../assets/style.css';
const bootstrap = require('bootstrap');
const UIController = require('./uicontroller.js');
import '../assets/style.css';

import image from '../assets/img/Praetura-Ventures-logo_white_rgb_small1.png';
import uicontroller from "./uicontroller";
const materialize = require('materialize-css/dist/css/materialize.min.css');
// const bootstrapCSS = require('bootstrap/dist/css/bootstrap.min.css');
const materializeJS = require('materialize-css/dist/js/materialize.min.js');


document.querySelector('#navbar-logo').src = image;

UIController.setLoadState(3);
UIController.setFields(3);
UIController.loadEventListeners();

