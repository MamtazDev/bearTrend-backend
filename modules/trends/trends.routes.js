const express = require("express");
const { addTrend,getAllTrends,updateLikes } = require("./trends.controller");
const { upload } = require("../../config/multerConfig");

const router = express.Router();

router.post('/postTrends', upload.single("image"), addTrend)
router.get('/getAllTrends', getAllTrends)
router.put('/updateLikes/:id', updateLikes)

module.exports = router;