const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

const connectToDB = require('./utils/connectToDB');
const userRouter = require('./routes/user.route');

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});