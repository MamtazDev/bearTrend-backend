const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: false
        },
        password: {
            type: String,
            require: false
        },

    },
    {
        timestamps: false
    }
)


const User = mongoose.model('User', userSchema)
module.exports = User