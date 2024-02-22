
const mongoose = require('mongoose')

const { trendsTimeSpans, trendsTopics } = require('./trends.constant')

const trendsScema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        trendsTopic: {
            type: trendsTopics,
            required: true
        },
        trendsTimeSpan: {
            type: trendsTimeSpans,
            required: true
        },
        like: {
            type: String,
            required: false,
            default:0
        }
    },
    {
        timestamps: true,
    }
)

const Trends = mongoose.model('Trends', trendsScema)

module.exports = Trends