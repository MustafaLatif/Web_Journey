const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// ─── CONFIG ──────────────────────────────────────────

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // form data
app.use(express.json()); // JSON API

// ─── FAKE DB: BOOKS ──────────────────────────────────

let books = [
  { id: 1, title: "The Node.js Guide", author: "Ali", price: 25 },
  { id: 2, title: "Express in Practice", author: "Sara", price: 30 },
];

// Helper: next available ID
function getNextId() {
  return books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
}

// ─── MIDDLEWARE ──────────────────────────────────────

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// ─── ROUTES ──────────────────────────────────────────

// 1. Homepage (EJS)
app.get("/", (req, res) => {
  const query = req.query.q?.trim().toLowerCase();
  let filteredBooks = books;

  if (query) {
    filteredBooks = books.filter(
      b => b.title.toLowerCase().includes(query) || 
           b.author.toLowerCase().includes(query)
    );
  }

  res.render("index", {
    books: filteredBooks,
    query: req.query.q || ""
  });
});

// 2. REST API: GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// 3. REST API: GET one book
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

// 4. Show create form (EJS)
app.get("/create", (req, res) => {
  res.render("create");
});

// 5. Create book (REST API)
app.post("/books", (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || price == null) {
    return res.status(400).json({ error: "Title, author, price required" });
  }

  const newBook = {
    id: getNextId(),
    title,
    author,
    price: Number(price)
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// 6. Update book (REST API)
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  const { title, author, price } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (price != null) book.price = Number(price);

  res.json(book);
});

// 7. Delete book (REST API)
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deletedBook = books.splice(index, 1)[0];
  res.json({ message: "Book deleted", book: deletedBook });
});

// 8. Optional: Handle 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// ─── START SERVER ────────────────────────────────────

app.listen(3000, () => {
  console.log("Book Store running at http://localhost:3000");
});
