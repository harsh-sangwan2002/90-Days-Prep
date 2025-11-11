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

const getUser = async (req, res) => {
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
        const dataToBeUpdated = req.body;
        const user = await userModel.findOneAndUpdate({ email: dataToBeUpdated.email }, dataToBeUpdated);
        res.status(200).json({
            message: "User updated successfully",
            data: user
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
        const dataToBeDeleted = req.body
        const user = await userModel.findOneAndDelete(dataToBeDeleted);
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

module.exports = {
    getUser,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    getSignUp,
    // middleware,
    // middleware2
}