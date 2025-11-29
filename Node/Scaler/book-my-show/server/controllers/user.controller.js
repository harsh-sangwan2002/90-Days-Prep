const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone, role } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const newUser = new User({
            name,
            email,
            password,
            phone,
            role
        });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("password email");
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
            return res.status(401).json({
                message: "Invalid credentials"
            });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.setHeader('token', token);
        res.status(200).json({
            message: "Login successful",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
}

const getUserDetails = async (req, res) => {
    try {
        const token = req.headers['token'];
        console.log(token);
        res.status(200).json({
            token
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({
            message: "User deleted successfully",
            user
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    deleteUser,
    getUserDetails
}