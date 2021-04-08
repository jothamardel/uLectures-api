const LecturerSchema = require('../model/lecturer.model');
const Hashschema = require('../model/hash.model');

exports.getAllLecturers = (req, res, next) => {
  LecturerSchema.find()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(err => res.status(400).json('Unsuccessful!'))
}

exports.lecturerRegistrationController = (req, res, next) => {
  console.log("Request========================>");
  console.log(req.body);
  const { name, email, phone, qualification, bio, photoUrl, hash } = req.body;
  new LecturerSchema({ name, email, phone, qualification, bio, photoUrl })
    .save()
    .then(userdata => {
      return new Hashschema({ email, hash, phone, id: userdata.lecturer_id })
        .save()
        .then(result => {
          console.log(result);
          res.status(200).json('Registeration successful!');
        })
        .catch(err => console.log(err))
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log(err)
      res.status(400).json("unsuccessful!");
    })
}


exports.lecturerCourse = (req, res, next) => {

}