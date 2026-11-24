
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require("./models/Student");
const jwt = require("jsonwebtoken") ;
const app = express();


app.use(express.json());
app.use(cors());

app.post("/login" ,(req , res) =>{
    const{Email,Password} = req.body
    StudentModel.findOne({Email : Email})
    .then(
        user => {
            if(user){
                if(user.Password === Password){
                    const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1d" });
                    res.json({status: "success"}, token) ;
                }else{
                    res.json({ status: "fail", message: "password is incorrect" });
                }

            }else{
                 res.json({ status: "fail", message: "the email is not exist" });
            }
        }
    )
}
)
    

app.post("/register", async (req, res) => {
    try {
        const student = await StudentModel.create(req.body);

        console.log("Student saved successfully:", student);

        res.status(201).json(student);

    } catch (err) {
        console.log("Database Error:", err);
        res.status(500).json(err.message);
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/student")
    .then(() => {
        console.log("MongoDB Connected Successfully!");

        app.listen(3001, () => {
            console.log("Server running on port 3001");
        });
    })
    .catch(err => {
        console.log("MongoDB Connection Error:", err);
    });
