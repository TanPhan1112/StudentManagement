const { course } = require("../models/course.js");
const { semester } = require("../models/semester.js");

exports.getCourse = (req, res) => {
    semester.find({ 'semester': req.query.semester }, 'students').exec()
        .then(results => {
            if (req.query.stdId.length !== 0) {
                for (let i = 0; i < results.length; i++) {
                    for (let j = 0; j < results[i].students.length; j++) {
                        if (results[i].students[j].studentID == req.query.stdId) {
                            res.send(results[i].students[j]);
                        }
                    }
                }
            }
        })
        .catch(error => {
            res.status(500).send("no course found!");
        });
};

exports.postCourse = (req, res) => {
    semester.find({ "semester": req.body.semester, "students.studentID": req.body.studentID }, "students").exec()
        .then(semesterFound => {
            for (let i = 0; i < semesterFound.length; i++) {
                for (let j = 0; j < semesterFound[i].students.length; j++) {
                    if (semesterFound[i].students[j].studentID == req.body.studentID) {
                        const courseSave = new course({
                            courseName: req.body.courseName,
                            instructorName: req.body.instructorName
                        });
                        semesterFound[i].students[j].courses.push(courseSave);
                        semesterFound[i].save(error => {
                            if (error) {
                                console.log(error);
                                process.exit();
                            }
                            else {
                                res.send(courseSave);
                            }
                        });
                    }
                }
            }
        })
        .catch(error => {
            res.status(500).send("no student found!");
        });
};