const express = require('express');

const app = express();
app.use(express.json());

const userRouter = require('./routes/user.route');
const blogRouter = require('./routes/blog.route');

app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
    console.log("Backend server is running on port 3000");
})