const express = require("express");
const app = express();

app.use("/nomina", require("./nomina/router"));

module.exports = app;
