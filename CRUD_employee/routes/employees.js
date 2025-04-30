const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");

router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("employees/index", { employees });
});

router.get("/new", (req, res) => {
  res.render("employees/new");
});

router.post("/", async (req, res) => {
  await Employee.create(req.body);
  res.redirect("/employees");
});

router.get("/:id/edit", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render("employees/edit", { employee });
});

router.post("/:id/update", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/employees");
});

router.post("/:id/delete", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/employees");
});

module.exports = router;