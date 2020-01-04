const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');


const app = express();
// const compiler = webpack(config);
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('', (req , res) => {
    console.log(req)
})

app.get('/help', (req,res) => {
    console.log('request received');
})



app.get('/', (req,res) => {
    res.set('content-type', 'text/event-stream');
    res.send('Hello Worldddd!!');
    // console.log(path.join(__dirname));
    // res.sendFile(path.resolve(__dirname,'/auth','/auth.html'));
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});