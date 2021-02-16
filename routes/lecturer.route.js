const express = require('express');
const lecturerController = require('../controllers/lecturer.controller');
const router = express.Router();

router.post('/lecturer/register', lecturerController.lecturerRegistrationController);
router.post('/lecturer/course')


module.exports = router;