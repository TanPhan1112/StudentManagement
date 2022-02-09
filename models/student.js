const mongoose = require("mongoose");
const { CourseSchema } = require("./course");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    studentID: { type: Number },
    stdFirstName: { type: String },
    stdLastName: { type: String },
    stdProgram: { type: String },
    courses: [CourseSchema]
});

exports.student = mongoose.model('Student', StudentSchema);
exports.StudentSchema = StudentSchema;