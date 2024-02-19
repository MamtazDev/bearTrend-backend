const { generateToken } = require('../../utils/auth');
const User = require('./user.model')
const bcrcypt = require("bcryptjs");

const registerUser = async (req, res) => {
    console.log(req.body);
    try {
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.status(403).send({
                message: `${req.body.email} is already Exist!`,
                status: 403,
            });
        } else {
            const newUser = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                password: bcrcypt.hashSync(req.body.password, 10),
                confirmPassword: bcrcypt.hashSync(req.body.password, 10),
            });

            const user = await newUser.save();
            const token = generateToken(user);

            res.status(200).send({
                message: "Account created successfully",
                status: 200,
                user,
                accessToken: token,
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            message: "Server error",
        });
    }
};


const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({
                success: false,
                type: "email",
                message: "User not found",
            });
        }
        if (user && bcrcypt.compareSync(req.body.password, user.password)) {
            return res.send({
                success: true,
                message: "Logged in successfully",
                status: 200,
                user    
            });
        } else {
            res.status(401).send({
                success: false,
                type: "password",
                message: "Invalid user or password",
                status: 401,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({
            status: 200,
            message: "Users get successfully",
            data: users
        })
    } catch (error) {
        res.status(203).send({
            message: err.message
        })
    }
}



module.exports = {
    registerUser,
    loginUser,
    getAllUsers
}