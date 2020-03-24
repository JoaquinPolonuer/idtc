const {
  getAttendanceByUserId,
  getMarksByUserId,
  getAttendance,
  getMarks,
  uploadAbsence,
  uploadMark
} = require("./usrData.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/uploadAbsence", checkToken, uploadAbsence);
router.post("/uploadMark", checkToken, uploadMark);
router.get("/marks/:id_user", checkToken, getMarksByUserId);
router.get("/attendance/:id_user", checkToken, getAttendanceByUserId);
router.get("/attendance", checkToken, getAttendance);
router.get("/marks", checkToken, getMarks);
module.exports = router;
