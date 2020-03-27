const {
    createEvent,    
    deleteEvent,
    updateEvent,
    createEventCategory,
    deleteEventCategory,
    updateEventCategory,
    getEventCategories,
    getEventCategoryById
  } = require("./events.controller");
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation");
  
  //métodos para tabla events
  router.post("/", checkToken, createEvent);  
  router.patch("/", checkToken, updateEvent);
  router.delete("/", checkToken, deleteEvent);
  //métodos para tabla event_categories
  router.post("/event_category", checkToken, createEventCategory);
  router.patch("/event_category", checkToken, updateEventCategory);
  router.delete("/event_category", checkToken, deleteEventCategory);
  router.get("/event_category", checkToken, getEventCategories);
  router.get("/event_category/id", checkToken, getEventCategoryById);
  
  module.exports = router;