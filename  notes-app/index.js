const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const port = 8080;
const NoteModel = require('./models/note'); // rename to avoid confusion

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());

// GET all notes
app.get('/notes', async (req, res) => {
    try {
        const notes = await NoteModel.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new note
app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    try {
        const newNote = new NoteModel({ title, content });
        await newNote.save();

        // Backup to local file system
        const backupDir = path.join(__dirname, 'backup');
        if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir);
        fs.writeFileSync(path.join(backupDir, `${title}.txt`), content || '');

        res.json(newNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Connect to MongoDB and start server
mongoose.connect('mongodb://mongodb_url/notesdb')
  .then(() => {
      console.log('MongoDB connected!');
      app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
