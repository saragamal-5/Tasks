const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const employeeRoutes = require("./routes/employees");

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb://127.0.0.1:27017/employees-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" Connected to MongoDB"))
.catch(err => console.error(" DB connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.redirect("/employees");
});


app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
