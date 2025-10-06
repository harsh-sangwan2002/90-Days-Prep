const fs = require('fs');

const filePromise = fs.promises.readFile('f1.txt', 'utf8');

filePromise.then(data => {
    console.log(data);
}).catch(err => {
    console.error('Error reading file:', err);
});