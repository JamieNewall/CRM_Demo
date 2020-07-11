const fs = require('fs');
const excel = require('xlsx');
const fileUrl = './excel_file/fields.xlsx';





const workbook = excel.readFile(fileUrl);
// change ref if sheet name changes
const worksheet = workbook.Sheets['Data_Dump'];

function getJsDateFromExcel(excelDate) {



    const date = new Date((excelDate - (25567 + 2))*86400*1000);
    // return date;
    return `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

}

// console.log(getJsDateFromExcel(43417));

function getDataFromSheet(startCol, startRow, endCol, endRow) {
    const data = [];
    const range = { s: { c: startCol, r: startRow }, e: { c: endCol, r: endRow } };
    for (let R = range.s.r; R <= range.e.r; ++R) {
        if (R === 0) {
            continue;
        }
        const dataObj = {};
        for (let C = range.s.c; C <= range.e.c; ++C) {
            //get cell ref
            let headerAddress = {c: C, r: 0};
            let cellAddress = {c: C, r: R};
            let headerref = excel.utils.encode_cell(headerAddress);
            let cellref = excel.utils.encode_cell(cellAddress);

            //Append { at beginning

                if (worksheet[cellref] === undefined || worksheet[cellref] === "NaN" || worksheet[cellref] === "null") {
                    dataObj[worksheet[headerref].v] = null;


                } else if (/\/+/.test(worksheet[cellref].w) && /\d{1,2}\/\d{1,2}\/\d{2,4}/.test(worksheet[cellref].w)) {
                    dataObj[worksheet[headerref].v] = getJsDateFromExcel(worksheet[cellref].v);

                } else {
                    dataObj[worksheet[headerref].v] = worksheet[cellref].v;

                }
               }

            data.push(dataObj);
            }
            return data;
        }




// Change col and row references inline with sheet
// on row reference add 2 to whatever the row number is in excel
const data = getDataFromSheet(0,0,225,780);
const dataExport = data;


fs.writeFile('./interimData.txt', data, (err) => {
    if (err) throw err;
    console.log('file saved');
})



module.exports.dataExport = dataExport;






