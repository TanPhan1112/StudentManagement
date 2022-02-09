const router = require('express').Router();

const { getStudent, postStudent } = require("../controllers/studentController.js");
router
    .get('/:id', getStudent)
    .post('/', postStudent);
module.exports = router;