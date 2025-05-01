require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;

const postRoute = require("./routes/postRoute");

// Parse the body of the request
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});


// Connect to the DB
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
if (db) {
  console.log("Database Connection is Successful");
}

app.use("/api/v1", postRoute);

app.listen(port, () => {
  console.log(`Server is running...`);
});
