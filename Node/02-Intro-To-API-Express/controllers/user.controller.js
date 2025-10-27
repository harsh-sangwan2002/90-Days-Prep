const getUserById = (req, res) => {
    const userId = req.params.userId;
    res.send({ id: userId, name: `User ${userId}` })
}

const getAllUsers = (req, res) => {
    res.send([
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" }
    ]);
}

const createUser = (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name
    };
    res.status(201).send(newUser);
}

const updateUser = (req, res) => {
    const updatedUser = {
        id: req.params.userId,
        name: req.body.name
    };
    res.send(updatedUser);
}

const deleteUser = (req, res) => {
    res.send({ message: `User with ID ${req.params.userId} deleted` });
}

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}