const pool = require("../../config/database");

module.exports = {

  create: (data, callback) => {
    pool.query(
      `insert into subjects(ds_subject) values(?)`,
      [data.ds_subject],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },  
  getSubjectBySubjectId: (id, callback) => {
    console.log(id);
    pool.query(
      `select * from subjects where id_subject = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  }, 
  getSubjects: callback => {
    pool.query(`select * from subjects`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  deleteSubject: (data, callback) => {   
      
    pool.query(
      `delete from subjects where id_subject = ?`,
      [data.id_subject],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  updateSubject: (data, callback) => {
    pool.query(
      `update subjects set ds_subject=? where id_subject=?`,
      [
        data.ds_subject,
        data.id_subject
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
