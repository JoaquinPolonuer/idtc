const pool = require("../../config/database");

module.exports = {
    createEvent: (data, callback) => {
      pool.query(
        `insert into events(id_class, id_user, id_subject, date, title, ds_event, event_category_id_category) values(?,?,?,?,?,?,?)`,
        [data.id_class, data.id_user, data.id_subject, data.date, date.title, date.ds_event, data.event_category_id_category],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },  
    
    updateEvent: (data, callback) => {
      console.log(data)
      pool.query(
        
        `update events set id_class=?, id_user=?, set id_subject=?, set date=?,  set title=?, set ds_event=?, set event_category_id_category=?,  where id_event=?`,
        [data.id_class, data.id_user, data.id_subject, data.date, date.title, date.ds_event, data.event_category_id_category, data.id_event],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },
    deleteEvent: (data, callback) => {
      console.log(data.id);
      pool.query(
        `delete from events where id_event = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    },

    //métodos relacionados a event_category

    createEventCategory: (data, callback) => {
        pool.query(
          `insert into event_category(ds_category) values(?)`,
          [ds_category],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      getEventCategories: callback => {
        pool.query(
          `select * from event_category`,
          [],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      getEventCategoryById: (id_category, callback) => {
        pool.query(
          `select * from event_category where id_category = ?`,
          [id_category],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results[0]);
          }
        );
      },
      updateEventCategory: (data, callback) => {
        console.log(data)
        pool.query(
          
          `update event_category set ds_category=?,  where id_category=?`,
          [data.id_category],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      deleteEventCategory: (data, callback) => {
        console.log(data.id);
        pool.query(
          `delete from event_category where id_category = ?`,
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