
const express = require("express");

const {addLike, removeLike } = require("./likeController");


const router = express.Router();

router.put('/add', addLike)
router.put('/remove', removeLike)

module.exports = router;