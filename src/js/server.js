// import UIController from './uicontroller.js';
// import TableController from './tablecontroller.js';
// import '../css/style.css';
// import Icon from '../assets/img/Praetura-Ventures-logo_white_rgb_small1.png'



const express = require('express');
const webpack = require('webpack');
const path = require('path');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const config = require('../webpack.config.js');


const app = express();
// const compiler = webpack(config);
const port = process.env.PORT || 8080;



// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   historyApiFallback: true, 
//   hot: true,
//   open: true

// }));

// app.use(webpackHotMiddleware(compiler, {
//   path: 'http://localhost:8080/__webpack_hmr',
//   heartbeat: 10*1000,
//   reload: true,
//   hot: true
// }));

// console.log('Hello World');

app.get('*', (req,res) => {
  res.set('content-type', 'text/event-stream');
  res.send('Hello Worldddd!!');
  // console.log(path.join(__dirname));
  // res.sendFile(path.resolve(__dirname,'/auth','/auth.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});