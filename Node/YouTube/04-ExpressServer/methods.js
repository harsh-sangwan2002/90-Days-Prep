const express = require('express');

const app = express();
// middleware to parse JSON bodies
app.use(express.json());

const { connectToDB } = require('./utils/connectToDB');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

// routes
app.use('/users', userRouter);
app.use('/auth', authRouter);

// query
app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(users);
})

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

app.listen(3000, async () => {
    try {
        await connectToDB();
        console.log('Backend server is running on port 3000');
    } catch (err) {
        console.log("Error while starting the server.")
    }
})