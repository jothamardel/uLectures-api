const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = Schema({
  course_id: {
    type: String,
    unique: true,
    required: true
  },
  students: [String]
});

module.exports = mongoose.model('Payment', paymentSchema);