const {
    create,
    getSubjectBySubjectId,
    getSubjects,
    deleteSubject,
    updateSubject
  } = require("./subject.service");
  
  module.exports = {
    createSubject: (req, res) => {
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
    getSubjectBySubjectId: (req, res) => {
      const id = req.params.id_subject;
      getSubjectBySubjectId(id, (err, results) => {
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
    getSubjects: (req, res) => {
      getSubjects((err, results) => {
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
    deleteSubject: (req, res) => {
      const data = req.body;
      deleteSubject(data, (err, results) => {
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
          data: "Subject deleted successfully"
        });
      });
    },
    updateSubject: (req, res) => {
      const body = req.body;
      
      updateSubject(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "failed to update Subject"
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    }  
    };