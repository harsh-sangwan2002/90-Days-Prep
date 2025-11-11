const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello, World!</h1>');
    // res.end();
    let path = './views';
    console.log(req.url);

    if (req.url.endsWith('css'))
        res.setHeader('Content-Type', 'text/css')

    else
        res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200; // OK
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200; // OK
            break;
        case '/style.css':
            path += '/style.css';
            res.statusCode = 200; // OK
            break;
        case '/about-me':
            path += '/about.html';
            res.statusCode = 301; // Redirected Permanently
            res.setHeader('Location', '/about');
            break;
        default:
            path += '/404.html';
            res.statusCode = 404; // Not Found
            break;
    }

    fs.readFile(path, (err, data) => {

        if (err)
            console.log(err);

        else {
            res.end(data);
        }
    });
})

// localhost is a loopback address that points to the local machine
// ports are used to differentiate between multiple services running on the same machine
server.listen(3000, 'localhost', () => {
    console.log("Backend server is running on port 3000");
})