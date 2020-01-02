// const rawData = require('./rawData');
const path = require('path');
const rawData = require(path.resolve(__dirname,'src','Praetura_Pipeline_App_V3','Personal Projects','Excel_Json_Extractor'));
// console.log(rawData);
const finalData = rawData.rawData[0];

for (i in finalData) {
    console.log(typeof finalData[i])
}






