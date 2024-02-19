const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {

        fullName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        confirmPassword: {
            type: String,
            required: false
        },
    },
    {
        timestamps: false
    }
)


const User = mongoose.model('User', userSchema)
module.exports = User