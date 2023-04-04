import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    name: String,
    brand:String
});

module.exports = mongoose.model("product", productSchema);