const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();

const connectToDb = require('./utils/connectToDB');
const userRouter = require('./routes/user.route');
const theatreRouter = require('./routes/theatre.route');

app.use('/api/users', userRouter);
app.use('/api/theatres', theatreRouter);

app.listen(3000, async () => {
    await connectToDb();
    console.log("Backend server is running on port 3000");
})