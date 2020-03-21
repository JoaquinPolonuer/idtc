const {
    create,
    getTeacherByTeacherId,
    getTeachers,
    deleteTeacher,
    updateTeacher,
    getTeacherByTeacherDocument
  } = require("./teacher.service");
  
  module.exports = {
    // createStudent: (req, res) => {
    //   const body = req.body;
      
    //   create(body, (err, results) => {
    //     if (err) {
    //       console.log(err);
    //       return res.status(500).json({
    //         success: 0,
    //         message: "database connection error"
    //       });
    //     }
    //     return res.status(200).json({
    //       success: 1,
    //       data: results
    //     });
    //   });
    // },
    getTeacherByTeacherId: (req, res) => {
      const id = req.params.id_student;
      getTeacherByTeacherId(id, (err, results) => {
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
    getTeachers: (req, res) => {
      getTeachers((err, results) => {
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
    deleteTeacher: (req, res) => {
      const data = req.body;
      deleteTeacher(data, (err, results) => {
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
          data: "Teacher deleted successfully"
        });
      });
    },
    updateTeacher: (req, res) => {
      const body = req.body;
      
      updateTeacher(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "failed to update teacher"
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    getTeacherByTeacherDocument: (req, res) => {
        const body = req.body;     
        
        getTeacherByTeacherDocument(body.document, (err, results) => {
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