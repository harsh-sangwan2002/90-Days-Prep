const router = require('express').Router();
const { registerUser, loginUser, deleteUser, getUserDetails } = require('../controllers/user.controller');

router.get('/', getUserDetails)
    .post('/register', registerUser)
    .post('/login', loginUser)
    .delete('/:id', deleteUser);

module.exports = router;