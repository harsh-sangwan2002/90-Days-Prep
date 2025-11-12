const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = './views';
    console.log(`${req.method} request for ${req.url}`);

    // Set Content-Type based on file type
    if (req.url.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
    else res.setHeader('Content-Type', 'text/html');

    // Handle GET Requests
    if (req.method === 'GET') {
        switch (req.url) {
            case '/':
                path += '/index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += '/about.html';
                res.statusCode = 200;
                break;
            case '/style.css':
                path += '/style.css';
                res.statusCode = 200;
                break;
            case '/about-me':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                return; // Important: stop further execution
            default:
                path += '/404.html';
                res.statusCode = 404;
                break;
        }

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
                res.end('Error loading file');
            } else {
                res.end(data);
            }
        });
    }

    // Handle POST Requests
    else if (req.method === 'POST') {
        let body = '';

        // Receive data in chunks
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });

        // When all data is received
        req.on('end', () => {
            console.log('Received POST data:', body);

            // If data is in JSON format
            try {
                const parsedData = JSON.parse(body);
                console.log('Parsed JSON:', parsedData);
            } catch {
                console.log('Not JSON — probably form data');
            }

            // Send response back to client
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'POST request received', data: body }));
        });
    }

    // Handle Other Methods
    else {
        res.statusCode = 405; // Method Not Allowed
        res.end(`<h1>405 - Method Not Allowed</h1>`);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('✅ Server running on http://localhost:3000');
});
