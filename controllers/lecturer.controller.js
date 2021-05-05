const LecturerSchema = require('../model/lecturer.model');
const Hashschema = require('../model/hash.model');
const CourseSchema = require('../model/course.model');
const ContentSchema = require('../model/content.model');
const bcrypt = require('bcrypt');

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
      const saltRounds = 10;
      const password = bcrypt.hashSync(hash, saltRounds);
      return new Hashschema({ email, hash: password, phone, id: userdata.lecturer_id })
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


exports.lecturerDetails = (req, res, next) => {
  console.log(req.params)
  LecturerSchema.find({ lecturer_id: req.params.id })
    .then(lecturer => {
      const lecturerDetails = [...lecturer];
      CourseSchema.find({ lecturer_id: req.params.id })
        .then(res => {
          console.log("Result=========>", res);
          // if (!res.length) return;
          lecturerDetails = [...lecturerDetails, ...res]
        })
        .catch(err => console.log('unable to find.'))
      console.log(lecturerDetails);
      res.status(200).json(lecturerDetails);
    })
    .catch(err => res.status(400).json([]))
}


exports.createCourse = (req, res, next) => {
  new CourseSchema({
    ...req.body
  })
    .save()
    .then(data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json('Unable to create course.')
    })
}


exports.createContent = (req, res, next) => {
  console.log(req.body)
  new ContentSchema({
    ...req.body
  })
    .save()
    .then(data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json('Unable to create content.')
    })
}