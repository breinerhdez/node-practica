const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: `Lista de empleados.`,
  });
});

module.exports = app;
