const path = require('path');
const rawData = require(path.resolve(__dirname,'src','test','test','test'));

const finalData = rawData.rawData[0];

for (i in finalData) {
    console.log(typeof finalData[i])
}






