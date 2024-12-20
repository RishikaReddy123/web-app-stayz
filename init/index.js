const mongoose = require("mongoose");
const initData = require("./data.js");
const List = require("../models/list.js");

const MONGO_URL="mongodb://127.0.0.1:27017/stayz";

main().then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await List.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6762eaf10cf97827d93842cf"}));
    await List.insertMany(initData.data);
    console.log("data initialized");
}

initDB();