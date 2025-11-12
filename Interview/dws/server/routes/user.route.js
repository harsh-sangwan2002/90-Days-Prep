const router = require('express').Router();
const { registerUser, loginUser, logoutUser, protect } = require('../controllers/user.controller');

router.post('/register', registerUser)
    .post('/login', loginUser)
    .post('/logout', protect, logoutUser);

module.exports = router;