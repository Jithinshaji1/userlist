const User = require('../models/usermodel');

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create(name, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message)
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.getById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.update(req.params.id, name, email);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.delete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getUserById, updateUser, deleteUser };
