const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
    if (err)
        console.log(err);

    else
        console.log(data.toString());
})

fs.writeFile('file2.txt', 'Hello World!', (err) => {

    if (err)
        console.log(err);
})

fs.appendFile('file2.txt', '\nAppended Text', (err) => {

    if (err)
        console.log(err);
})

fs.unlink('file2.txt', (err) => {

    if (err)
        console.log(err);
})

fs.rename('file.txt', 'newfile.txt', (err) => {

    if (err)
        console.log(err);
})

fs.mkdir('newDir', (err) => {

    if (err)
        console.log(err);
})