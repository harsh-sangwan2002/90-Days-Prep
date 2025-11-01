const express = require('express');

const app = express();
app.use(express.json());

const userRouter = require('./routes/user.route');
const connectToDb = require('./utils/connectToDB');

app.use('/api/users', userRouter);

app.listen(3000, async () => {
    await connectToDb();
    console.log("Backend server is running on port 3000");
})