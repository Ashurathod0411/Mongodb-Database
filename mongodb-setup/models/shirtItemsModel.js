const mongoose = require("mongoose");
const shirtItemsSchema = new mongoose.Schema(
  {
    productName: String,
    price: Number,
  },
  {
    collection: "shirtItemsCollection",
  });

const shirtItemsModel = mongoose.model("shirtItems", shirtItemsSchema);
module.exports = shirtItemsModel;

