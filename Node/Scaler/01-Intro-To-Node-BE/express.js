const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/api/users', (req, res) => {
    const users = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
    return;
})

app.listen(3000, () => {
    console.log("Backend server is running on port 3000");
})