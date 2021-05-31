const express = require("express");
const app = express();

app.use("/empleados", require("./controllers/empleados"));
app.use("/areas", require("./controllers/areas"));

module.exports = app;
