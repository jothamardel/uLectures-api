const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();


const PORT = 5000;

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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