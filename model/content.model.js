const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = Schema({
  course_id: {
    type: String,
    unique: true,
    required: true
  },
  // lecturer_id: {
  //   type: String,
  //   unique: true,
  //   required: true
  // },
  video: [
    {
      video_title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true,
        unique: true
      }
    }
  ]
});


module.exports = mongoose.model('Content', contentSchema);