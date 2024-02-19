
const mongoose = require('mongoose')
const { trendsRTimeSpans, trendsTopics } = require('./trends.constant')

const trendsScema = new mongoose.Schema(
    {
        image: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: false
        },
        trendsTopic: {
            type: trendsTopics,
            require: false
        },
        trendsRTimeSpan: {
            type: trendsRTimeSpans,
            require: false
        },
        like: {
            type: String,
            require: false
        }
    },
    {
        timestamps: false
    }
)

const Trends = mongoose.model('Trends', trendsScema)
module.exports = Trends