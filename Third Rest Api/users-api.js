const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory "database" (pretend this is MongoDB later)
let users = [
  { id: 1, name: 'Ali', email: 'ali@example.com' },
  { id: 2, name: 'Sana', email: 'sana@example.com' }
];

// GET /users → get all users
app.get('/users', (req, res) => {
  res.send(users);
});

// GET /users/:id → get one user
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send({ message: 'User not found' });
  res.send(user);
});

// POST /users → create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Simple validation
  if (!name || !email) {
    return res.status(400).send({ message: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).send(newUser);
});

// PUT /users/:id → update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).send({ message: 'User not found' });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.send(user);
});

// DELETE /users/:id → delete a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).send({ message: 'User not found' });

  users.splice(index, 1);
  res.send({ message: 'User deleted successfully' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
