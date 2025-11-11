// UserRouter
const userRouter = require('express').Router();
const { protectRoute, getUser, getUsers, updateUser, deleteUser } = require('../controllers/user.controller');
const { signup, login } = require('../controllers/auth.controller');

// user options
userRouter.route('/:id')
    .patch(updateUser)
    .delete(deleteUser)

// user signup
userRouter.route('/signup')
    .post(signup)

userRouter.route('/login')
    .post(login)

// profilePage
userRouter.route('/userProfile')
    .get(protectRoute, getUser)

// admin specific routes
userRouter.route('')
    .get(protectRoute, getUsers)

module.exports = userRouter;