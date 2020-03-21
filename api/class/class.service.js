const pool = require("../../config/database");

module.exports = {
    create: (data, callback) => {
      pool.query(
        `insert into class(year, division) values(?,?)`,
        [data.year, data.division],
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
    getClassByClassId: (id, callback) => {
      console.log(id)
      pool.query(
        `select * from class where id_class = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results[0]);
        }
      );
    },
    updateClass: (data, callback) => {
      console.log(data)
      pool.query(
        
        `update class set year=?, division=? where id_class=?`,
        [data.year, data.division , data.id_class],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    deleteClass: (data, callback) => {
      console.log(data.id);
      pool.query(
        `delete from class where id_class = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    getClassByClassDivision: (division, callback) => {
      pool.query(
        `select * from class where division = ?`,
        [division],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results[0]);
        }
      );
    }
 
  };