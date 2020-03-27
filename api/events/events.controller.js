const {
    createEvent,    
    deleteEvent,
    updateEvent,
    createEventCategory,    
    deleteEventCategory,
    updateEventCategory,
    getEventCategories,
    getEventCategoryById
  } = require("./events.service");
  
  module.exports = {
    createEvent: (req, res) => {
      const body = req.body;
      
      createEvent(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "database connection error"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },   
    deleteEvent: (req, res) => {
      const data = req.body;
      deleteEvent(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "record not found"
          });
        }
        return res.json({
          success: 1,
          data: "Event deleted successfully"
        });
      });
    },
    updateEvent: (req, res) => {
      const body = req.body;
      
      updateEvent(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "failed to update event"
          });
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },


    //métodos de event_category 
    createEventCategory: (req, res) => {
        const body = req.body;
        
        createEventCategory(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "database connection error"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },   
      deleteEventCategory: (req, res) => {
        const data = req.body;
        deleteEventCategory(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "record not found"
            });
          }
          return res.json({
            success: 1,
            data: "Event Category deleted successfully"
          });
        });
      },
      updateEventCategory: (req, res) => {
        const body = req.body;
        
        updateEventCategory(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "failed to update event category"
            });
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      getEventCategories: (req, res) => {
        getEventCategories((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
    
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getEventCategoryById: (req, res) => {
        const body = req.body;
        getEventCategoryById(body.id_category, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "record not found"
            });
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },


    };