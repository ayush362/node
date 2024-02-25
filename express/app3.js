const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
//  Req => Middleware => Res
// app.use([logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/api/product", (req, res) => {
  res.send("Products");
});
app.get("/api/item", (req, res) => {
  res.send("item");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
