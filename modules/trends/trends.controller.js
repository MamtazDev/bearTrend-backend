const Trends = require("./trends.model");


const addTrend = async (req, res) => {


    if (req.file) {
        req.body["image"] = req.file.path;
        console.log("Images", req.file.path)

    }
    try {
        const { image, title, description, trendsTopic, trendsTimeSpan, like } = req.body;

        const newTrend = new Trends({
            image,
            title,
            description,
            trendsTopic,
            trendsTimeSpan,
            like
        });
        const savedTrend = await newTrend.save();

        res.status(201).json(savedTrend);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getAllTrends = async (req, res) => {
    try {
        const allTrends = await Trends.find();
        res.status(200).json(allTrends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    addTrend,
    getAllTrends
};
