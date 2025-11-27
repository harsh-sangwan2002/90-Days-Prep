const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// middlewares
const middleware1 = (req, res, next) => {
    console.log(req.method, req.url);
    console.log('Middleware 1 executed');
    next();
};

const middleware2 = (req, res, next) => {
    console.log(req.method, req.url);
    console.log('Middleware 2 executed');
    next();
};

const performSanity = (req, res, next) => {

    if (!req.body.name || !req.body.password) {
        return res.status(400).send('Name and password are required');
    }

    console.log('Sanity check passed');
    next();
};

app.use(middleware1);
app.use(middleware2);
// Sample route
app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

// login route
app.get('/login', (req, res) => {
    res.send("Please login");
})

app.post('/login', performSanity, (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

// path params
app.get('/profile/:username', (req, res) => {
    console.log(req.params);
    const username = req.params.username;
    res.send(`Profile page of ${username}`);
});

// query params
app.get('/electronics', (req, res) => {
    console.log(req.query);
    const item = req.query.item;
    res.send(`Search results for: ${item}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});