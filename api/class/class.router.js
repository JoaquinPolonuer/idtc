const {
  createClass,
  getClassByClassId,
  getClasses,
  deleteClass,
  updateClass,
  getClassByClassDivision
} = require("./class.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createClass);
router.get("/", checkToken, getClasses);
router.get("/:id_class", checkToken, getClassByClassId);
router.patch("/", checkToken, updateClass);
router.delete("/", checkToken, deleteClass);
router.post("/division", checkToken, getClassByClassDivision);
module.exports = router;
