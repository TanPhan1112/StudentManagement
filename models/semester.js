const mongoose = require("mongoose");
const { StudentSchema } = require("./student");

const Schema = mongoose.Schema;

const SemesterSchema = new Schema({
    semester: { type: String },
    students: [StudentSchema]
});

SemesterSchema.static('findAllSemesters', function() {
    return this.find({}, 'semester');
});

SemesterSchema.static('findAllStudents', function(semester) {
    return this.find({ semester: semester }, 'students');
});

exports.semester = mongoose.model('Semester', SemesterSchema);