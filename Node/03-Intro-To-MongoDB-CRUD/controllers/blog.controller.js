const blogModel = require('../models/blog.model');

const renderBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.render('blogList', { blogs });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

const renderBlogById = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }
        res.render('blogDetail', { blog });
    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json({ blogs });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ blog });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const createBlog = async (req, res) => {
    try {
        const { title, author, content } = req.body;
        const newBlog = new blogModel({ title, author, content });
        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await blogModel.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { renderBlogById, renderBlogs, getAllBlogs, getBlogById, createBlog, deleteBlog };