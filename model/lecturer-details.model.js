const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lecturerDetailsSchema = Schema({
  lecturer_id: {
    type: String,
    required: true,
    unique: true
  },
  rating: {
    type: Number,
    default: 0
  },
  admin: {
    type: Boolean,
    default: true
  },
  institution: {
    type: String
  },
  faculty: {
    type: String
  },
  dept: {
    type: String
  },
  category: {
    type: String
  }
});


module.exports = mongoose.model('LectureDetail', lecturerDetailsSchema);