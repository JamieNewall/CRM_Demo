const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const DbControllerModule = require('./src/js/dbController');
const DbController = DbControllerModule.dbController;


const app = express();
// const dataBase = require('./util/database');

// const DB = dataBase.opportunity;
// const compiler = webpack(config);
const port = process.env.PORT || 3000;





//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));



// const val = DB.findAll().then((data) => data)
// console.log(val);
// app.get('', (req , res) => {
//     console.log(req)
// })

app.get('/help', (req,res) => {
    // res.sendFile(path.join(__dirname, '/dist','/html','summary.html'));
    res.sendFile(path.join(__dirname, '/dist','/html','summary.html'));
    // res.redirect('/html/add.html');
})

app.get('/getData' , async function(req,res) {
    console.log('endpoint hit')
    let data = await DbController.getAllData();
    data = DbController.filterData(data , 'status-filter', 'Active')
    let sortData = DbController.sortData(data, "DESC",'opp_CurrentStage');
    res.json(sortData);

});

app.post('/getFilteredData/:filter/:filterItem' , async function(req,res) {
    console.log('filter endpoint hit')
    let data = await DbController.getAllData();
    let filteredData = DbController.filterData(data,req.params.filterItem ,req.params.filter)

    res.json(filteredData);

});



app.get('/', (req,res) => {
    res.set('content-type', 'text/event-stream');
    res.send('Hello Worldddd!!');
    // console.log(path.join(__dirname));
    // res.sendFile(path.resolve(__dirname,'/auth','/auth.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});