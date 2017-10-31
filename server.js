const express = require("express");
const app     = express();
const path    = require("path");

app.use("/", express.static("public"));

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})