const express = require("express");
const app = express();

app.use("/empleados", require("./nomina/controllers/empleados"));
app.use("/areas", require("./nomina/controllers/areas"));

module.exports = app;
