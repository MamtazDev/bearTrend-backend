
const mongoose = require('mongoose')

const { trendsTimeSpans, trendsTopics } = require('./trends.constant')

const trendsScema = new mongoose.Schema(
    {
        image: {
            type: String,
            require: false
        },
        title: {
            type: String,
            require: false
        },
        description: {
            type: String,
            require: false
        },
        trendsTopic: {
            type: trendsTopics,
            require: false
        },
        trendsTimeSpan: {
            type: trendsTimeSpans,
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