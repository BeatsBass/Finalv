'use strict';

const fs = require('fs');

fs.readFile('list.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student.length);
});

console.log('This is after the read call');