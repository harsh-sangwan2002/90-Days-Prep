const router = require("express").Router();
const { addTheatre, getAllTheatres, getTheatreById, updateTheatre, deleteTheatre } = require('../controllers/theatre.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

router.post('/', authMiddleware, addTheatre)
    .get('/', getAllTheatres)
    .get('/:id', getTheatreById)
    .put('/:id', authMiddleware, updateTheatre)
    .delete('/:id', authMiddleware, deleteTheatre);

module.exports = router;