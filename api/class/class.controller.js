const {
    create,
    getClassByClassId,
    getClasses,
    deleteClass,
    updateClass,
    getClassByClassDivision
  } = require("./class.service");
  
  module.exports = {
    createClass: (req, res) => {
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
    getClassByClassId: (req, res) => {
      const id = req.params.id_class;
      getClassByClassId(id, (err, results) => {
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
    deleteClass: (req, res) => {
      const data = req.body;
      deleteClass(data, (err, results) => {
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
    updateClass: (req, res) => {
      const body = req.body;
      
      updateClass(body, (err, results) => {
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
    getClassByClassDivision: (req, res) => {
        const body = req.body;
        getClassByClassDivision(body.division, (err, results) => {
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
      }
    };