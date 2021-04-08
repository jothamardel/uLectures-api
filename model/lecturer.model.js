const mongoose = require('mongoose');
const MUUID = require('uuid-mongodb');

const Schema = mongoose.Schema;


const lecturerSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  qualification: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  lecturer_id: {
    type: String,
    required: true,
    default: () => MUUID.v4().toString(),
    unique: true
  }
});

module.exports = mongoose.model('Lecturer', lecturerSchema);