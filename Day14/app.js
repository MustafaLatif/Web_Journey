const express = require("express");
const App = express();
const PORT = 3030;

let products = [
  { id: 1, name: "mustafa", age: 20 },
  { id: 1, name: "mustafa", age: 20 },
  { id: 1, name: "mustafa", age: 20 },
];

App.use((res, req, next) => {
  console.log(`${req.method}${req.url}`);
  next();
});
App.get("/products", (req, res) => {
  res.json(products);
});
// GET/ api/ products
App.get("/api/product/id", (res, req) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "product not found" });
  }
});
//POST/api/products -all anew  product
App.post("/api/products", (res, req) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }
  const newProduct = {
    id: products.lenght + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
//PUT/ api/products/:id -update a product
App.put("/api/product/:id", (res, req) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "product not found" });
  }
  const { name, price } = req.body;
  product.name = name || product.name;
  product.price = price || products.price;
  res.json(product);
});
// DELETE /api/products/:id - delete a product
App.delete("/api/products/:id", (res, req) => {
  const id = parseInt(res.params.id);
  const index =products.findIndex(p => p.id ===id);
  if(index===-1){
    return res.status(404).json({error:'product not found'});
  }
  products.splice(index,1);
  res.status(204).send();
});
App.listen(PORT,()=>{
      console.log(`REST API running on http://localhost:${PORT}`);

})