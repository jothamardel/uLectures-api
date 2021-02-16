const LecturerSchema = require('../model/lecturer.model');

exports.lecturerRegistrationController = (req, res, next) => {
  const { name, email, phone, qualification, bio } = req.body;
  new LecturerSchema({ name, email, phone, qualification, bio })
    .save()
    .then(console.log)
    .catch(console.log)
}


exports.lecturerCourse = (req, res, next) => {

}