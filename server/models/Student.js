const mongoose = require('mongoose') ;
const studentSchema  = new mongoose.Schema({
    Name : String ,
    Email : String   ,
    Age : Number ,
    Password : String 
})
const StudentModel = mongoose.model(
    "Student",
    studentSchema,
    "students"
);

module.exports = StudentModel;