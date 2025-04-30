const express = require("express");
const PageController = require("../controllers/page.controller");
const router = express.Router();

router.get("/about", PageController.about);

module.exports = router;
