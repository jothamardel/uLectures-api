const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const durationSchema = Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  duration: [
    {
      course_id: {
        type: String,
      },
      time: {
        type: String,
        default: new Date()
      }
    }
  ]
});


module.exports = mongoose.model('Duration', durationSchema);