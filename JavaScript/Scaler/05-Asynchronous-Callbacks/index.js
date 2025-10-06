const fs = require('fs');

console.log("A");

// Asynchronous Callbacks
fs.readFile('f1.txt', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

fs.readFile('f2.txt', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

console.log('B');