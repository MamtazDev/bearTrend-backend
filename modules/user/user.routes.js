const express = require("express");
const { registerUser, loginUser, getAllUsers } = require("./user.controller");


const router = express.Router();
router.post('/signUp', registerUser)
router.post('/login', loginUser)
router.get('/getAllUser', getAllUsers)


module.exports = router;