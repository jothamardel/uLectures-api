const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const lecturerRoute = require('./routes/lecturer.route');
require('dotenv').config();
const app = express();

const PORT = 5000;

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => res.send("uLectures ready to go!"));

app.use(lecturerRoute);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
  .catch(console.log)





// /lecturer/register POST
// /lecturer/course POST
// /student/register POST
// /student/login POST
// /student/verify POST
// /lecturer GET
// /lecturer/:id GET
// /lecturer/profile/:id POST
// /lecturer/course/:id GET
// /course/:id GET
// /lecturer/content/:id GET
// /student/payment POST
// /student/profile/:id GET