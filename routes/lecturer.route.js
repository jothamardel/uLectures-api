const express = require('express');
const lecturerController = require('../controllers/lecturer.controller');
const router = express.Router();

router.post('/lecturer/register', lecturerController.lecturerRegistrationController);
router.post('/lecturer/course', lecturerController.createCourse);
router.post('/lecturer/content', lecturerController.createContent);

router.get('/lecturer', lecturerController.getAllLecturers);
router.get('/lecturer-details/:id', lecturerController.lecturerDetails);


module.exports = router;