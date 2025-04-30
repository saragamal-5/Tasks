const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  salary: Number,
  gender: String
});
module.exports = mongoose.model("Employee", employeeSchema);