const express = require('express');
const app = express();
 app.use('',(res,req,next)=>{
    console.log('first')
    next()
 })
app.use(express.json());

// In-memory data (later you’ll use a database)
let courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Express' }
];

// GET /api/courses → get all courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// GET /api/courses/:id → get one course
app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) return res.status(404).send('Course not found');
  res.send(course);
});

// POST /api/courses → create a new course
app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.status(201).send(course);
});

// PUT /api/courses/:id → update a course
app.put('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) return res.status(404).send('Course not found');
  course.name = req.body.name;
  res.send(course);
});

// DELETE /api/courses/:id → delete a course
app.delete('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).send('Course not found');
  courses.splice(index, 1);
  res.send({ message: 'Course deleted' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
