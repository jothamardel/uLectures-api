const mongoose = require('mongoose');
const MUUID = require('uuid-mongodb');
const Schema = mongoose.Schema;


const studentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  student_id: {
    type: String,
    required: true,
    unique: true,
    default: () => MUUID.v4().toString()
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
  verified: {
    type: Boolean,
    default: false
  },
  matric_no: {
    type: String,
    unique: true
  },
  createdAt: {
    type: String,
    default: new Date()
  }
});


module.exports = mongoose.model('Student', studentSchema);