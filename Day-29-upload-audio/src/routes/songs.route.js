const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");

const songController = require("../controller/song.controller");

router.post("/" , upload.single("song"),songController.uploadSongs);

module.exports = router;