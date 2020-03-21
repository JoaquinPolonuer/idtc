const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    let sentence = "";
    let values = [];
    let flag = true;
    switch (data.hierarchy) {
      case "student":
        sentence =
          "insert into students(first_name, last_name, profile_photo, users_document) values(?,?,?,?)";
        values = [
          data.first_name,
          data.last_name,
          data.profile_photo,
          data.document
        ];
        break;
      case "teacher" == data.hierarchy:
        sentence =
          "insert into teachers(first_name, last_name, profile_photo, users_document) values(?,?,?,?)";
        values = [
          data.first_name,
          data.last_name,
          data.profile_photo,
          data.document
        ];
        break;
      default:
        console.log("Hierarchy does not match tables");
        flag = false;
    }
    if (flag) {
      pool.query(
        "insert into users (user, password, hierarchy, document) values(?,?,?,?)",
        [data.user, data.password, data.hierarchy, data.document],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          //return callback(null, results);
        }
      );

      pool.query(sentence, values, (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      });
    }
  },
  getUsers: callback => {
    pool.query(
      `select document, user, password, hierarchy from users`,
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
      `select document, user, password, hierarchy from users where document = ?`,
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
      `update users set user=?, password=?, hierarchy=? where document=?`,
      [data.user, data.password, data.hierarchy, data.document],
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
      `delete from users where document = ?`,
      [data.document],
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
