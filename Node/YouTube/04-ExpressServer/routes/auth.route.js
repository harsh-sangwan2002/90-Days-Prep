// AuthRouter
const authRouter = require('express').Router();
const { getUsers, postUser, updateUser, deleteUser } = require('../controllers/auth.controller');

authRouter.route('/signup')
    // .get(middleware, getSignUp, middleware2)
    .get(getUsers)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = authRouter;