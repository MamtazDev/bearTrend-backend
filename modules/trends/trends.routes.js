const express = require("express");
const { addTrend,getAllTrends } = require("./trends.controller");

const router = express.Router();

router.post('/postTrends', addTrend)
router.get('/getAllTrends', getAllTrends)

module.exports = router;