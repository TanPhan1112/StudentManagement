const router = require('express').Router();

const { getCourse, postCourse } = require("../controllers/courseController.js");
router
    .get('/', getCourse)
    .post('/', postCourse);
module.exports = router;