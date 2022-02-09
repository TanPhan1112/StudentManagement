const mongoose = require("mongoose");
// const { ExamSchema } = require("./exam");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: { type: String },
    instructorName: { type: String }
    // grades: [ExamSchema]
});

exports.course = mongoose.model('Course', CourseSchema);
exports.CourseSchema = CourseSchema;