require("@babel/polyfill");
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
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));



app.get('/help', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/dist','/html','summary.html'));
    
})

app.get('/getData' , async function(req,res) {
    console.log('endpoint hit')
    let data = await DbController.getAllData();
    let state = {person:"Person",location:"Location",status:"Active",stage:"Stage"}
    data = DbController.filterData(data , 'status-filter', 'Active', state)
    let sortData = DbController.sortData(data, "DESC",'opp_CurrentStage');
    res.json(sortData);

});

app.post('/getFilteredData/:filter/:filterItem' , async function(req,res) {
    console.log('filter endpoint hit')
    let data = await DbController.getAllData();
    let state = req.body;

    let filteredData = DbController.filterData(data,req.params.filterItem ,req.params.filter, state)

    res.json(filteredData);

});

app.post('/getOppData', async (req,res) => {
    let opp = req.body;
    let data = await DbController.getOppData(opp.value);
    console.log(data);
    res.json(data)
})

app.get('/opportunity/:opp' , (req, res) => {
    console.log('opp route hit');
    res.sendFile(path.resolve(__dirname,'dist','html','opp.html'));
})

app.post( '/postOpportunity',async (req,res) => {
    console.log('end hit for add')
    let data = req.body;
    console.log(data)
    data.opp_CurrentStage = 0;
    data.opp_Status = 'Active'
    await DbController.createOpportunity(data)
    res.send();

})

app.post('/updateOpportunity' , async (req,res) => {
    console.log('updating opp')
    let data = req.body;

    await DbController.updateOpportunity(data);
    res.send();
})

app.get( '/summary',(req,res) => {
    res.sendFile(path.resolve(__dirname,'dist','html','summary.html'))
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});