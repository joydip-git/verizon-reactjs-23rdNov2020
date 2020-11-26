const fs = require('fs');
const filePath = 'productdata.json';

function readFromFile() {
    let data = [];
    try {
        let d = fs.readFileSync(filePath);
        if (d)
            data = JSON.parse(d);
    } catch (e) {

    }
    return data;
}

function writeIntoFile(data) {
    let status = false;
    try {
        fs.writeFileSync(filePath, JSON.stringify(data));
        status = true;
    } catch (e) {

    }
    return status;
}

module.exports = {
    read: readFromFile,
    write: writeIntoFile
}