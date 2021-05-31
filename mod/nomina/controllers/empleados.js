const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: `Lista de empleados.`,
  });
});

app.post("/", (req, res) => {
  res.json({
    ok: true,
    msg: `Se ha creado un registro satisfactoriamente`,
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    ok: true,
    msg: `Se ha modificado un registro satisfactoriamente el registro ${id}`,
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    ok: true,
    msg: `Se ha eliminado un registro satisfactoriamente el registro ${id}`,
  });
});

module.exports = app;
