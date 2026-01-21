const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Settings
app.set("view engine", 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('hello world');
});
// Home route - show files
// app.get('/', (req, res) => {
//   fs.readdir('./files', (err, files) => {
//     if (err) {
//       console.log(err);
//       return res.send("Error reading files");
//     }

//     res.render("index", { files: files });
//   });
// });

// Read single file
app.get('/files/:filename', (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    if (err) {
      console.log(err);
      return res.send("File not found");
    }

    res.send(filedata);
  });
});

// Create file
app.post('/create', (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(' ').join('')}.txt`,
    req.body.details,
    (err) => {
      if (err) {
        console.log(err);
        return res.send("Error creating file");
      }

      res.redirect('/');
    }
  );
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
