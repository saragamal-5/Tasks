require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set("view engin", "ejs");

const homeRoute = require("./routes/home.js");
const aboutRoute = require("./routes/about.js");
const postRoute = require("./routes/sample-post.js");
const contactRoute = require("./routes/contact.js");

app.use(homeRoute);
app.use(aboutRoute);
app.use(postRoute);
app.use(contactRoute);

app.listen(port);
