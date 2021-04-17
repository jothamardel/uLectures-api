const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const lecturerRoute = require('./routes/lecturer.route');
const app = express();



app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
  })
  res.send("uLectures ready to go!");
});

app.use(lecturerRoute);

module.exports = app;