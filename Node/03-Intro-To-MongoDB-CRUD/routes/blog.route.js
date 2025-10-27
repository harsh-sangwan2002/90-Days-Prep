const { getAllBlogs, getBlogById, createBlog, deleteBlog } = require('../controllers/blog.controller');
const router = require('express').Router();

router.get('/', getAllBlogs)
    .get('/:id', getBlogById)
    .post('/', createBlog)
    .delete('/:id', deleteBlog);

module.exports = router;