const express = require('express');

const app = express();
const { renderBlogById, renderBlogs } = require('./controllers/blog.controller');
const connectToDB = require('./utils/connectToDB');
const blogRouter = require('./routes/blog.route');
const userRouter = require('./routes/user.route');

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/api/blogs', blogRouter);
app.get('/blog/list', renderBlogs);
app.use('/api/users', userRouter);
app.get('/blog/:id', renderBlogById);

app.listen(3000, async () => {
    await connectToDB();
    console.log("Backend server is running on port 3000");
})