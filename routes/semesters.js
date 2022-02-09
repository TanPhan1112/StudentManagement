const router = require('express').Router();

const { getSemesters, postSemester } = require("../controllers/semesterController.js");
router
    .get('/', getSemesters)
    .post('/', postSemester);
module.exports = router;