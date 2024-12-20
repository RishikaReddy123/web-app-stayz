const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {listSchema, reviewSchema} = require("../schema.js");
const List = require("../models/list.js");
const {isLoggedIn, isOwner, validateList} = require("../middleware.js");

const listController = require("../controllers/list.js");



//index route
router.get("/", wrapAsync(listController.index));

//new route
router.get("/new", isLoggedIn, listController.renderNewForm);


//show route
router.get("/:id", wrapAsync(listController.showList) );

//create route
router.post("/", isLoggedIn, validateList, wrapAsync(listController.createList));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listController.renderEditForm));

//update route
router.put("/:id", isLoggedIn, isOwner, validateList, wrapAsync(listController.updateList) );

//Delete route
router.delete("/:id", isLoggedIn, wrapAsync(listController.destroyList) );

module.exports = router;