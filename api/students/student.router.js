const {
    createStudent,
    getStudentByStudentId,
    getStudents,
    deleteStudent,
    updateStudent,
    getStudentByStudentDocument
    
  } = require("./student.controller");
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation");
  
  //router.post("/", checkToken, createStudent);
  router.get("/", checkToken, getStudents);
  router.get("/:id_student", checkToken, getStudentByStudentId);
  router.patch("/", checkToken, updateStudent);
  router.delete("/", checkToken, deleteStudent);  
  router.post("/document", checkToken, getStudentByStudentDocument);
  module.exports = router;