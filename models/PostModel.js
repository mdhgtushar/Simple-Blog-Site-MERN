const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  categories: {
    type: Array,
  },
  isFeatured: {
    type: Boolean,
  },
});

const PostModel = mongoose.model("post", PostSchema);

module.exports = PostModel;
