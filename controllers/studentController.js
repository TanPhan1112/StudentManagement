const { student } = require("../models/student.js");
const { semester } = require("../models/semester.js");

exports.getStudent = (req, res) => {
    semester.findAllStudents(req.params.id)
        .then(results => {
            res.send(results);
        })
        .catch(error => {
            res.status(500).send("no student found!");
        });
};

exports.postStudent = (req, res) => {
    semester.findOne({ "semester": req.body.semester }).exec()
        .then(semesterFound => {
            const studentSave = new student({
                studentID: req.body.studentID,
                stdFirstName: req.body.stdFirstName,
                stdLastName: req.body.stdLastName,
                stdProgram: req.body.stdProgram
            });
            semesterFound.students.push(studentSave);
            semesterFound.save(error => {
                if (error) {
                    console.log(error);
                    process.exit();
                }
                else {
                    res.set('Content-location', req.originalUrl);
                    res.send({
                        url: req.originalUrl + "/" + studentSave.id,
                        data: studentSave
                    });
                }
            });
        })
        .catch(error => {
            res.status(500).send("no semester found!");
        });
};