const router = require('express').Router();
const semesterRouter = require("./semesters.js");
router.use('/semesters', semesterRouter);
const studentRouter = require("./students.js");
router.use('/students', studentRouter);
const courseRouter = require("./courses.js");
router.use('/courses', courseRouter);
module.exports = router;