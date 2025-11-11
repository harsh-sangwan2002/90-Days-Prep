// UserRouter
const userRouter = require('express').Router();
const { getUser, getUserById, postUser, updateUser, deleteUser } = require('../controllers/user.controller');

userRouter.get('/', getUser)
    .get('/:id', getUserById)
    .post('/', postUser)
    .patch('/', updateUser)
    .delete('/', deleteUser);

module.exports = userRouter;