const router = require('express').Router();
const {
    getBlogById,
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blog.controller');

router.get('/:blogId', getBlogById);
router.get('/', getAllBlogs);
router.post('/', createBlog);
router.put('/:blogId', updateBlog);
router.delete('/:blogId', deleteBlog);

module.exports = router;