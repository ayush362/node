const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
