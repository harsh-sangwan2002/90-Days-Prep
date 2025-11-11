const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        let data = req.body;
        let user = await userModel.create(data);
        res.status(200).json({
            message: "User created successfully",
            data: user
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while creating the user",
            error: err
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            // compare password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                let uid = user['_id'];
                let token = jwt.sign({ payload: uid }, process.env.JWT_SECRET, { expiresIn: '1d' });
                // httpOnly - not accessible via js on frontend
                // secure - only via https
                res.cookie('login', token, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true });
                res.status(200).json({
                    message: "Login successful",
                    data: user
                })
            } else {
                res.status(401).json({
                    message: "Invalid credentials"
                })
            }

        } else {
            res.status(404).json({
                message: "User not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while logging in",
            error: err
        })
    }
}

const isAuthorized = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.role)) {
            next();
        } else {
            res.status(403).json({
                message: "User not authorized"
            })
        }
    }
}
module.exports = {
    signup,
    login,
    isAuthorized
}