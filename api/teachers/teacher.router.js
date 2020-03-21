const {
    // createTeacher,
    // getTeacherByTeacherId,
    getTeachers,
    deleteTeacher,
    updateTeacher,
    getTeacherByTeacherDocument
  } = require("./teacher.controller");
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation");
  
  //router.post("/", checkToken, createStudent);
  router.get("/", checkToken, getTeachers);
  
  router.patch("/", checkToken, updateTeacher);
  router.delete("/", checkToken, deleteTeacher);
  router.post("/document", checkToken, getTeacherByTeacherDocument);
  module.exports = router;