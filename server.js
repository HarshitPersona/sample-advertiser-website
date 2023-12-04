const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/js/personascript", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.get("/js/lpscript", (req, res) => {
  res.sendFile(__dirname + "/landing-page-script.js");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sample-landing-page.html");
});

app.listen(PORT, () => {
  console.log("Server is up on " + PORT);
});
