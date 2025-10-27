const getBlogById = (req, res) => {
    const blogId = req.params.blogId;
    res.send({ id: blogId, title: `Blog ${blogId}` })
}

const getAllBlogs = (req, res) => {
    res.send([
        { id: 1, title: "Blog 1" },
        { id: 2, title: "Blog 2" }
    ]);
}

const createBlog = (req, res) => {
    const newBlog = {
        id: Date.now(),
        title: req.body.title
    };
    res.status(201).send(newBlog);
}

const updateBlog = (req, res) => {
    const updatedBlog = {
        id: req.params.blogId,
        title: req.body.title
    };
    res.send(updatedBlog);
}

const deleteBlog = (req, res) => {
    res.send({ message: `Blog with ID ${req.params.blogId} deleted` });
}

module.exports = {
    getBlogById,
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}