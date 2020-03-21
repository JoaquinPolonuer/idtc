const pool = require("../../config/database");

module.exports = {
  // create: (data, callback) => {
  //   pool.query(
  //     `insert into students(first_name, last_name, document, profile_photo) values(?,?,?,?)`,
  //     [data.first_name, data.last_name, data.document, data.profile_photo],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },
  getTeachers: callback => {
    pool.query(`select * from teachers`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  // getStudentByStudentId: (id, callback) => {
  //   console.log(id);
  //   pool.query(
  //     `select * from students where users_document = ?`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results[0]);
  //     }
  //   );
  // },
  updateTeacher: (data, callback) => {
    console.log(data);
    pool.query(
      `update teachers set first_name=?, last_name=?, profile_photo=? where users_document=?`,
      [
        data.first_name,
        data.last_name,
        data.profile_photo,
        data.users_document
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteTeacher: (data, callback) => {
    console.log(data.users_document);
    pool.query(
      `delete from teachers where users_document = ?`,
      [data.users_document],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getTeacherByTeacherDocument: (document, callback) => {
    pool.query(
      `select * from teachers where users_document = ?`,
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
