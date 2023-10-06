const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath = '/Users/yashgupta/Developer/Book-Store/CSV2JSON/books.csv';
const outputJsonPath = '/Users/yashgupta/Developer/Book-Store/CSV2JSON/books.json';

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    fs.writeFileSync(outputJsonPath, JSON.stringify(jsonObj, null, 4));
    console.log("Conversion Complete!");
});
