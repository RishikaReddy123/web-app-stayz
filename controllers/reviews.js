const List = require("../models/list");
const Review = require("../models/review");

module.exports.createReview = async(req, res) => {
    let list = await List.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    list.reviews.push(newReview);

    await newReview.save();
    await list.save();


    req.flash("success", "New Review created");
    res.redirect(`/lists/${list._id}`);

};

module.exports.destroyReview = async (req, res)=> {
    let {id, reviewId} = req.params;
    await List.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted");
    res.redirect(`/lists/${id}`);
};