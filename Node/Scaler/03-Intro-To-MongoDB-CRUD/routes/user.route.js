const router = require('express').Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller');

router.get('/:id', getUserById)
    .get('/', getUsers)
    .post('/', createUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser);

module.exports = router;