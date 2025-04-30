const express = require("express");
const PageController = require("../controllers/page.controller");
const router = express.Router();

router.get("/", PageController.index);

module.exports = router;
