const { registerUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = require('express').Router();

router.post('/register', registerUser)
    .post('/login', loginUser)
    .get('/:id', getUser)
    .put('/:id', updateUser)
    .delete('/:id', deleteUser);

module.exports = router;