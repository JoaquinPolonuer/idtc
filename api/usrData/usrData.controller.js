const {
  getAttendanceByUserId,
  getMarksByUserId,
  getAttendance,
  getMarks
} = require("./usrData.service");

module.exports = {
  getAttendanceByUserId: (req, res) => {
    const id = req.params.id_user;
    getAttendanceByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getMarksByUserId: (req, res) => {
    const id = req.params.id_user;
    getMarksByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  getAttendance: (req, res) => {
    getAttendance((err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getMarks: (req, res) => {
    getMarks((err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        data: results
      });
    });
  }
};
