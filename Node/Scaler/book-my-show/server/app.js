const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const connectDB = require('./config/db');
const userRouter = require('./routes/user.route');

app.use('/api/users', userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});