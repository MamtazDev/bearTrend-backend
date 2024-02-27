const Like = require("./likeSchema");

const addLike = async (req, res) => {

    const { userId, postId } = req.body;
    try {
        const existingLike = await Like.findOne({ user: userId, post: postId });

        if (existingLike) {
            return res.status(400).json({ message: 'You already liked this post.' });
        }

        const newLike = new Like({ user: userId, post: postId });
        await newLike.save();

        res.status(201).json({ message: 'Like added successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const removeLike = async (req, res) => {

    const { userId, postId } = req.body;

    try {
        const like = await Like.findOneAndDelete({ user: userId, post: postId });

        if (!like) {
            return res.status(404).json({ message: 'Like not found.' });
        }

        res.json({ message: 'Like removed successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    addLike,
    removeLike
};

