const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
      pool.query(
        `insert into studentclass(id_class, id_user) values(?,?)`,
        [data.id_class, data.id_user],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getClasses: callback => {
      pool.query(
        `select * from class`,
        [],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getUsers: callback => {
        pool.query(
          `select * from users`,
          [],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
    updateStudentClass: (data, callback) => {
      console.log(data)
      pool.query(
        
        `update studentclass set year=?, division=?, set document=?, set first_name=?, where id_class=? AND id_user=?`,
        [data.year, data.division , data.document, data.first_name, data.id_user, data.id_class],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    deleteStudentClass: (data, callback) => {
      console.log(data.id);
      pool.query(
        `delete from studentclass where id_class = ? AND id_user = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
 
  };