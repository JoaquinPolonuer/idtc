const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      "insert into users (user, password, hierarchy_id_hierarchy, document, first_name, last_name, profile_photo) values(?,?,?,?,?,?,?)",
      [
        data.user,
        data.password,
        data.hierarchy,
        data.document,
        data.first_name,
        data.last_name,
        data.profile_photo
      ],
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
      `select id_user,user, password, hierarchy_id_hierarchy, document, first_name, last_name, profile_photo from users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsersByUserDocument: (document, callback) => {
    pool.query(
      `select user, password, hierarchy_id_hierarchy, document, first_name, last_name, profile_photo from users where document = ?`,
      [document],
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
      `update users set user=?, password=?, hierarchy_id_hierarchy=?, document=?, first_name=?, last_name=?, profile_photo=? where id_user=?`,
      [
        data.user,
        data.password,
        data.hierarchy,
        data.document,
        data.first_name,
        data.last_name,
        data.profile_photo,
        data.id_user
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (data, callback) => {
    console.log(data.document);

    pool.query(
      `delete from users where id_user = ?`,
      [data.id_user],
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
      `select * from users where user = ?`,
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
