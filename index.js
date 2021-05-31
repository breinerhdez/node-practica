const express = require("express");
const app = express();

app.use(require("./mod/router"));

app.listen(4500, () => {
  console.log("Server running on port 4500");
});
