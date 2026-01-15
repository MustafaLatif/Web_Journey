const express = require('express');
const app = express();
const PORT = 3000;

// Built-in middleware to parse JSON
app.use(express.json());

// Mock data (in real app, this would be in a database)
let products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Phone', price: 30000 }
];

// Middleware: log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET /api/products - get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id - get one product by ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST /api/products - add a new product
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - update a product
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const { name, price } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;
  res.json(product);
});

// DELETE /api/products/:id - delete a product
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send(); // 204 = No Content
});

app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`);
});
