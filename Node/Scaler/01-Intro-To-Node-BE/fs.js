const fs = require('fs');

const demoFileData = fs.readFileSync('demo.txt', 'utf8');
console.log(demoFileData);

fs.appendFileSync('demo.txt', '\nAppended line.');
console.log('Appended a new line to demo.txt');

const updatedFileData = fs.readFileSync('demo.txt', 'utf8');
console.log(updatedFileData);

fs.mkdirSync('newDir');
fs.writeFileSync('newDir/index.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
`);