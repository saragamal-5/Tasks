const express = require("express");
const PageController = require("../controllers/page.controller");
const router = express.Router();

router.get("/contact", PageController.contact);

module.exports = router;
