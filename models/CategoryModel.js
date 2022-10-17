const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category_name: String,
});

const CategoryModel = mongoose.model("category", CategorySchema);

module.exports = CategoryModel;
