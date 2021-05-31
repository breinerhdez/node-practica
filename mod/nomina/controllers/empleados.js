const express = require("express");
const app = express();

var lista = ["Diana", "Sofia"];

const saludar = (nombre) => `Hola, ${nombre}`;

// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//     msg: `Lista de empleados.`,
//     data: lista,
//   });
// });

app.get("/", function (req, res) {
  const [diana, sofia] = lista;
  console.log(diana, sofia);

  res.json({
    ok: true,
    msg: `Lista de empleados.`,
    data: lista,
  });
});

app.post("/", (req, res) => {
  const { nombre } = req.body;

  lista.push(nombre);

  res.json({
    ok: true,
    msg: `Se ha creado un registro satisfactoriamente`,
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  lista[id] = nombre;

  res.json({
    ok: true,
    msg: `Se ha modificado un registro satisfactoriamente el registro ${id}`,
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  // var listaTmp = [];
  lista = lista.filter((elemento, key) => {
    if (key != id) {
      // listaTmp.push(elemento);
      return elemento;
    }
  });

  // lista = listaTmp;

  res.json({
    ok: true,
    msg: `Se ha eliminado un registro satisfactoriamente el registro ${id}`,
  });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  lista.map((elemento, key) => {
    if (key == id) {
      res.json({
        ok: true,
        msg: `Se entrega información del registro ${id}`,
        data: saludar(elemento),
      });
    }
  });
});

module.exports = app;
