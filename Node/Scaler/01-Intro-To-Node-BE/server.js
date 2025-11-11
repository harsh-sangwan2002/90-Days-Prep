const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let filePath = '';

    console.log(req.url);

    if (req.url == '/')
        filePath = path.join(__dirname, '/index.html');

    else if (req.url == '/about')
        filePath = path.join(__dirname, '/about.html');

    if (req.url == '/api/users') {
        const users = [
            { name: 'John Doe', age: 30 },
            { name: 'Jane Smith', age: 25 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
        return;
    }

    else
        fs.readFile(filePath, (err, data) => {
            if (err)
                res.end('Error loading file.');
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
})

server.listen(3000, () => {
    console.log('Backend server is listening on port 3000.');
})