const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1><a href="/api/products">prodcuts</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
  // res.send("hello world");
});

app.get("/api/products/:ProductID", (req, res) => {
  const { ProductID } = req.params;
  console.log(ProductID);
  const singleProduct = products.find(
    (product) => product.id === Number(ProductID)
  );
  if (!singleProduct) {
    res.status(404).send("product not found");
  }
  res.json(singleProduct);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
