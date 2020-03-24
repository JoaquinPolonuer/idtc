const pool = require("../../config/database");

module.exports = {

  uploadAbsence: (data, callback) => {
    pool.query(
      `insert into attendance(period, date, status, users_id_user) values(?,?,?,?)`,
      [data.period, data.date, data.status, data.users_id_user],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  uploadMark: (data, callback) => {
    pool.query(
      `insert into marks(mark, subjects_id_subject, users_id_user) values(?,?,?)`,
      [data.mark, data.subjects_id_subject, data.users_id_user],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAttendanceByUserId: (id, callback) => {
    console.log(id);
    pool.query(
      `select * from attendance where users_id_user = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getMarksByUserId: (id, callback) => {
    console.log(id);
    pool.query(
      `select * from marks where users_id_user = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getAttendance: callback => {
    pool.query(`select * from attendance`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getMarks: callback => {
    pool.query(`select * from marks`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  }
};
