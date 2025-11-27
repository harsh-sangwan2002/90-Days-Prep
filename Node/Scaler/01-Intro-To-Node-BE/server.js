const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/login') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({ message: "Login Page" }));
            res.end();
        }
        else if (req.method === 'POST') {

        }
    }

    else {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading page');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    }
});

const PORT = 3000, host = 'localhost';

server.listen(PORT, () => {
    console.log(`Server is running at http://${host}:${PORT}`);
});