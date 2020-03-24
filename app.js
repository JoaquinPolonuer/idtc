require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/users/user.router");
//const studentRouter = require("./api/students/student.router");
const classRouter = require("./api/class/class.router");
const usrDataRouter = require("./api/usrData/usrData.router");
const classStudent = require("./api/studentclass/studentclass.router");
const subjectRouter = require("./api/subjects/subject.router");
app.use(express.json());

app.use("/api/users", userRouter);
//app.use("/api/students", studentRouter);
app.use("/api/class", classRouter);
app.use("/api/usrData", usrDataRouter);
app.use("/api/studentclass", classStudent);
app.use("/api/subjects", subjectRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
