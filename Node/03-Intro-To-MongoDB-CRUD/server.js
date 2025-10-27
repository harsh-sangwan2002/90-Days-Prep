const express = require('express');

const app = express();
const connectToDB = require('./utils/connectToDB');
const blogRouter = require('./routes/blog.route');

app.use(express.json());

app.use('/api/blogs', blogRouter);

app.listen(3000, async () => {
    await connectToDB();
    console.log("Backend server is running on port 3000");
})