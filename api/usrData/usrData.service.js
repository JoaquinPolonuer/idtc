const pool = require("../../config/database");

module.exports = {
  getAttendanceByUserId: (id, callback) => {
    console.log(id);
    pool.query(
      `select *from attendance where users_id_user = ?`,
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
