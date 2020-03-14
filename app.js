require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/users/user.router");
const studentRouter = require("./api/students/student.router");

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
