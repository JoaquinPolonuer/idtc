const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into user_login(user, password, hierarchy) values(?,?,?)`,
      [data.user, data.password, data.hierarchy],
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
      `select id_user, user, password, hierarchy from user_login`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsersByUserId: (id, callback) => {
    pool.query(
      `select id_user, user, password, hierarchy from user_login where id_user = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update user_login set user=?, password=?, hierarchy=? where id_user=?`,
      [data.user, data.password, data.hierarchy, data.id_user],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (data, callback) => {
    console.log(data.id);
    pool.query(
      `delete from user_login where id_user = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUserByUserEmail: (user, callback) => {
    pool.query(
      `select * from user_login where user = ?`,
      [user],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
};
