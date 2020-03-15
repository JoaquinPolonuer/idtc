const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    let sentence = ""
    let values = []
    pool.query(
      "insert into user_login(user, password, hierarchy) values(?,?,?)",
      [data.user, data.password, data.hierarchy],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        //return callback(null, results);
      }
      
    );
    switch(data.hierarchy){
      case "student":
        sentence = "insert into students(first_name, last_name, document, profile_photo) values(?,?,?,?)";
        values = [data.first_name, data.last_name, data.document, data.profile_photo];
        break;
      case "teacher" == data.hierarchy:
        sentence = "insert into teachers(first_name, last_name, document, profile_photo) values(?,?,?,?)";
        break;
      default:
        console.log("Hierarchy does not match tables")
      }
    pool.query(
      sentence,
      values,
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
    console.log(data.id_user);
    pool.query(
      `delete from user_login where id_user = ?`,
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
