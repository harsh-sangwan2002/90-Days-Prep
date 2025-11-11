let users = [
    {
        id: 1,
        name: "Abhishek",
    },
    {
        id: 2,
        name: "Jasbir",
    },
    {
        id: 3,
        name: "Kartik",
    }
]

const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const protectRoute = async (req, res, next) => {
    let token;
    if (req.cookies.login) {
        token = req.cookies.login;
        let payload = jwt.verify(req.cookies.login, process.env.JWT_SECRET);
        const user = await userModel.findById(payload.payload);
        req.role = user.role;
        req.id = user.id;
        next();
    } else {
        res.status(401).json({
            message: "User not logged in"
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json({
            message: "Users fetched successfully",
            data: allUsers
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while fetching users",
            error: err
        })
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.id;
        const user = await userModel.findById(id);
        res.status(200).json({
            message: "User fetched successfully",
            data: user
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while fetching user",
            error: err
        })
    }
}

const getUserById = (req, res) => {
    console.log(req.params.id);
    res.send("User id received");
}

const postUser = async (req, res) => {
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

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const dataToBeUpdated = req.body;
        const data = await userModel.findOneAndUpdate({ _id: id }, dataToBeUpdated);
        res.status(200).json({
            message: "User updated successfully",
            data
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while updating user",
            error: err
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findOneAndDelete(id);
        res.status(200).json({
            message: "User deleted successfully",
            data: user
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "User cannot be deleted",
            error: err
        })
    }
}

const getSignUp = (req, res, next) => {
    console.log('getSignUp called');
    // next();
    res.status(200).sendFile('./public/index.html', { root: __dirname });
}

// const middleware = (req, res, next) => {
//     console.log('Middleware1 encountered');
//     next();
// }

// const middleware2 = (req, res, next) => {
//     console.log('Middleware2 encountered');
//     // next();
//     res.json({
//         message: "Middleware2 ended req/res cycle"
//     })
// }

const getCookies = (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.status(200).send("Cookies has benn received");
}

const setCookies = (req, res) => {
    // res.setHeader('Set-Cookie', 'isLoggedIn=true');
    // httpOnly: true -> cookie cannot be accessed via client-side JS
    // sameSite: 'Strict' -> cookie will only be sent in requests originating from the same site
    res.cookie('isLoggedIn', true, { maxAge: 1000 * 60 * 60 * 24, secure: true, httpOnly: true });
    res.cookie('isPrimeMember', false, { maxAge: 1000 * 60 * 60 * 24, secure: true });
    res.status(200).send("Cookies has been set");
}

module.exports = {
    protectRoute,
    getUser,
    getUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    getSignUp,
    // middleware,
    // middleware2,
    getCookies,
    setCookies
}