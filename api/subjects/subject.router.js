const {
    createSubject,
    getSubjectBySubjectId,
    getSubjects,
    deleteSubject,
    updateSubject
    
  } = require("./subject.controller");
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation");
  
  router.post("/", checkToken, createSubject);
  router.get("/", checkToken, getSubjects);
  router.get("/:id_subject", checkToken, getSubjectBySubjectId);
  router.patch("/", checkToken, updateSubject);
  router.delete("/", checkToken, deleteSubject);
  
  module.exports = router;
  