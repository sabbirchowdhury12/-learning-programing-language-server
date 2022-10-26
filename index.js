const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const allCourses = require('./data/data.json');


app.get('/', (req, res) => {
    res.send('hellow world');
});

app.get('/courses', (req, res) => {
    res.send(allCourses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedCourses = allCourses.find(courses => courses.id === id);
    res.send(selectedCourses);
});

app.listen(port, () => {
    console.log('my-news server is running');
});