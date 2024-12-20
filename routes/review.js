const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const {listSchema, reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const List = require("../models/list.js");
const { isLoggedIn, validateReview, isOwner, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");




//Reviews
//post-review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//delete-review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;