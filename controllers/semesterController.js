const { semester } = require("../models/semester.js");

exports.getSemesters = (req, res) => {
    semester.findAllSemesters()
        .then(results => {
            res.send(results);
        })
        .catch(error => {
            res.status(500).send("no semester found!");
        });
};

exports.postSemester = (req, res) => {
    let semesterSave = new semester({
        semester: req.body.semester
    });
    semesterSave.save(error => {
        if (error) {
            console.log(error);
            process.exit();
        }
        else {
            res.set('Content-location', req.originalUrl);
            res.send({
                url: req.originalUrl + "/" + semesterSave.id,
                data: semesterSave
            });
        }
    });
};