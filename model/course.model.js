const mongoose = require('mongoose');
const MUUID = require('uuid-mongodb');
const Schema = mongoose.Schema;


const courseSchema = Schema({
  title: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  unit: {
    type: String
  },
  course_id: {
    type: String,
    unique: true,
    required: true,
    default: () => MUUID.v4().toString()
  },
  lecturer_id: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true,
    default: "700"
  }
});


module.exports = mongoose.model('Course', courseSchema);