const List = require("../models/list");

module.exports.index = async (req, res) => {
    const allLists = await List.find({});
    res.render("lists/index.ejs", {allLists});
};

module.exports.renderNewForm = (req, res) => {
    res.render("lists/new.ejs");
};

module.exports.showList = async (req, res) => {
    let {id} = req.params;
    const list = await List.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!list){
        req.flash("error", "List doesn't exist!");
        res.redirect("/lists");
    }
    res.render("lists/show.ejs", {list});
};

module.exports.createList = async (req, res) => {
    // let result = listSchema.validate(req.body);
    // console.log(result);
    // if(result.error){
    //     throw new ExpressError(400, result.error);
    // }
    if(!req.body.list){
        throw new ExpressError(400, "Send valid data!");
    }
    //let {title, description, image, price, country, location} = req.body;
    let list = req.body.list;
    const newList = new List(req.body.list);
    newList.owner = req.user._id;
    await newList.save();
    req.flash("success", "New List created");
    res.redirect("/lists");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const list = await List.findById(id);
    if(!list){
        req.flash("error", "List doesn't exist!");
        res.redirect("/lists");
    }
    res.render("lists/edit.ejs", {list});
};

module.exports.updateList = async (req, res) => {
    if(!req.body.list){
        throw new ExpressError(400, "Send valid data!");
    }
    let {id} = req.params;
    await List.findByIdAndUpdate(id, {...req.body.list});
    req.flash("success", "List updated");
    res.redirect(`/lists/${id}`);
};

module.exports.destroyList = async (req, res) => {
    let {id} = req.params;
    let deletedList = await List.findByIdAndDelete(id);
    req.flash("success", "List deleted");
    res.redirect("/lists");
};