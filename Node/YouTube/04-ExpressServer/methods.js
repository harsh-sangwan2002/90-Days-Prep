const express = require('express');
const mongoose = require('mongoose');

const app = express();
// middleware to parse JSON bodies
app.use(express.json());

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
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Minimum length of password must be 8'],
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: [8, 'Minimum length of password must be 8'],
    }
})
const userModel = mongoose.model('User', userSchema);

// UserRouter
const userRouter = require('express').Router();
app.use('/users', userRouter);

// AuthRouter
const authRouter = require('express').Router();
app.use('/auth', authRouter);

const getUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json({
            message: "Users fetched successfully",
            data: allUsers
        })
    } catch (err) {
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
        res.status(500).json({
            message: "User cannot be deleted",
            error: err
        })
    }
}

const middleware = (req, res, next) => {
    console.log('Middleware1 encountered');
    next();
}

const middleware2 = (req, res, next) => {
    console.log('Middleware2 encountered');
    // next();
    res.json({
        message: "Middleware2 ended req/res cycle"
    })
}

const getSignUp = (req, res, next) => {
    console.log('getSignUp called');
    // next();
    res.status(200).sendFile('./public/index.html', { root: __dirname });
}

// userRouter.get('/', getUser)
//     .get('/:id', getUserById)
//     .post('/', postUser)
//     .patch('/', updateUser)
//     .delete('/', deleteUser);


authRouter.route('/signup')
    // .get(middleware, getSignUp, middleware2)
    .get(getUsers)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser);

// query
app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(users);
})

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hsangwan2002:Samay%40229@cluster0.18c099y.mongodb.net/")
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error while connecting to MongoDB", err);
    }
}

app.listen(3000, async () => {
    try {
        await connectToDB();
        console.log('Backend server is running on port 3000');
    } catch (err) {
        console.log("Error while starting the server.")
    }
})