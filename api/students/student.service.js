const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
      pool.query(
        `insert into students(first_name, last_name, document, profile_photo) values(?,?,?,?)`,
        [data.first_name, data.last_name, data.document, data.profile_photo],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getStudents: callback => {
      pool.query(
        `select * from students`,
        [],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getStudentByStudentId: (id, callback) => {
      console.log(id)
      pool.query(
        `select * from students where id_student = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results[0]);
        }
      );
    },
    updateStudent: (data, callback) => {
      console.log(data)
      pool.query(
        
        `update students set first_name=?, last_name=?, document=?, profile_photo=? where id_student=?`,
        [data.first_name, data.last_name, data.document, data.profile_photo , data.id_student],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    deleteStudent: (data, callback) => {
      console.log(data.id);
      pool.query(
        `delete from students where id_student = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getStudentByStudentDocument: (document, callback) => {
      pool.query(
        `select * from students where document = ?`,
        [document],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results[0]);
        }
      );
    }
 
  };