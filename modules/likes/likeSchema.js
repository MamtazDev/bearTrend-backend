// Like schema
const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Trends' },
    like: {
        type: Number,
        required: true,
        default: 0

    }
});

const Like = mongoose.model('Like', likeSchema)



module.exports = Like