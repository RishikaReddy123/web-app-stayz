const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        default:"https://images.unsphttpslash.com/photo-1730315775703-25dfdf1e8283?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: String,
        set: (v) => v === "" ? "https://images.unsphttpslash.com/photo-1730315775703-25dfdf1e8283?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D": v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listSchema.post("findOneAndDelete", async(list) => {
    if(list){
        await Review.deleteMany({_id: {$in: list.reviews}});
    }
});

const List = mongoose.model("List", listSchema);
module.exports = List;