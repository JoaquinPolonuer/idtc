const {
    create,
    getClasses,
    getUsers,
    deleteStudentClass,
    updateStudentClass,
  } = require("./studentclass.controller");
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation");
  
  router.post("/create", checkToken, create);
  router.get("/", checkToken, getClasses);
  router.get("/students", checkToken, getUsers);
  router.patch("/", checkToken, updateStudentClass);
  router.delete("/", checkToken, deleteStudentClass);
  module.exports = router;
  