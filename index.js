const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is test node!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT);

module.exports = app;
