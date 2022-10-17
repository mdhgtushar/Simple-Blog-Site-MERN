const PostModel = require("../models/PostModel");

const PostController = {};

PostController.get_all_posts = async (req, res, next) => {
  const posts = await PostModel.find();
  res.send(posts);
};
PostController.get_featured_posts = async (req, res, next) => {
  const posts = await PostModel.find({ isFeatured: true });
  res.send(posts);
};

PostController.create_post = async (req, res, next) => {
  const { title, description, isFeatured } = req.body;
  PostModel.create({ title, description, isFeatured }, (err) => {
    !err && res.send({ success: true });
    err && res.send({ success: false });
  });
};
PostController.update_post = async (req, res, next) => {
  const { id, title, description, isFeatured } = req.body;
  const posts = await PostModel.findByIdAndUpdate(id, {
    title,
    description,
    isFeatured,
  });
  res.send(posts);
};

PostController.delete_post = async (req, res, next) => {
  const posts = await PostModel.findByIdAndDelete(req.body.id);
  res.send(posts);
};

module.exports = PostController;
