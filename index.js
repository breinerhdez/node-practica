const express = require("express");
const app = express();

app.use("/empleados", require("./controllers/empleados"));
app.use("/areas", require("./controllers/areas"));

app.listen(4500, () => {
  console.log("Server running on port 4500");
});
