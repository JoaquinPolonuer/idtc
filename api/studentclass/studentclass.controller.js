const {
    create,
    getClasses,
    getUsers,
    deleteStudentClass,
    updateStudentClass,
  } = require("./studentclass.service");
  
  module.exports = {
    create: (req, res) => {
      const body = req.body;
      
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    getClasses: (req, res) => {
      getClasses((err, results) => {
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
    deleteStudentClass: (req, res) => {
      const data = req.body;
      deleteStudentClass(data, (err, results) => {
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
          data: "Class deleted successfully"
        });
      });
    },
    updateStudentClass: (req, res) => {
      const body = req.body;
      
      updateStudentClass(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "failed to update class"
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },

    };