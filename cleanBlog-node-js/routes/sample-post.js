const express = require("express");
const PageController = require("../controllers/page.controller");
const router = express.Router();

router.get("/sample-post", PageController.samplePost);

module.exports = router;
