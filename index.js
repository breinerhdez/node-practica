const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.use(require("./mod/router"));

app.listen(4500, () => {
  console.log("Server running on port 4500");
});
