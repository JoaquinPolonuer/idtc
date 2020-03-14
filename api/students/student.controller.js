const {
    create,
    getStudentByStudentId,
    getStudents,
    deleteStudent,
    updateStudent,
    getStudentByStudentDocument
  } = require("./student.service");
  
  module.exports = {
    createStudent: (req, res) => {
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
    getStudentByStudentId: (req, res) => {
      const id = req.params.id_student;
      getStudentByStudentId(id, (err, results) => {
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
    getStudents: (req, res) => {
      getStudents((err, results) => {
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
    deleteStudent: (req, res) => {
      const data = req.body;
      deleteStudent(data, (err, results) => {
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
          data: "Student deleted successfully"
        });
      });
    },
    updateStudent: (req, res) => {
      const body = req.body;
      
      updateStudent(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "failed to update student"
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    getStudentByStudentDocument: (req, res) => {
        
        getStudentByStudentDocument(body.document, (err, results) => {
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