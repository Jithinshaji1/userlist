const express = require('express');
const { createUser, getUserById, updateUser, deleteUser } = require('../Controllers/usercontroller');
const verifyToken = require('../middilwares/authmiddleware');

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "You have accessed a protected route", user: req.user });
});
module.exports = router;