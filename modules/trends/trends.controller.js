const Trends = require("./trends.model");



const addTrend = async (req, res) => {

    if (req.file) {
        req.body["image"] = req.file.path;
        console.log("Images", req.file.path)
    }

    try {
        const { image, title, description, trendsTopic, trendsTimeSpan, like } = req.body;

        const trendsTopicArray = trendsTopic.split(',').map(topic => topic.trim());

        const userId = req.body.id;

        const newTrend = new Trends({
            image,
            title,
            description,
            trendsTopic: trendsTopicArray,
            trendsTimeSpan,
            like,
            user: userId
        });

        const savedTrend = await newTrend.save();

        res.status(201).json(savedTrend);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllTrends = async (req, res) => {
    try {
        const allTrends = await Trends.find().populate('user');
        res.status(200).json(allTrends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateLikes = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params)
        const { like } = req.body;

        let trend = await Trends.findById(id);
        console.log(trend)

        if (!trend) {
            return res.status(404).json({ message: 'Trend post not found' });
        }
        trend.like = like;
        const updatedTrend = await trend.save();

        res.status(200).json(updatedTrend);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    addTrend,
    getAllTrends,
    updateLikes
};
