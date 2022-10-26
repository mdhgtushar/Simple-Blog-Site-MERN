const PostModel = require("../models/PostModel");

const PostController = {};

PostController.get_all_posts = async (req, res, next) => {
  const posts = await PostModel.find();
  res.send(posts);
};
PostController.get_single_post = async (req, res, next) => {
  const post = await PostModel.findById(req.query.id);
  res.send(post);
};

PostController.get_featured_posts = async (req, res, next) => {
  const posts = await PostModel.find({ isFeatured: true });
  res.send(posts);
};

PostController.create_post = async (req, res, next) => {
  const { title, description, isFeatured } = req.body;
  let sampleFile;
  let uploadPath;
  sampleFile = req.files.image;
  uploadPath = __dirname + "/uploads/posts/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    PostModel.create(
      { title, description, isFeatured, image: sampleFile.name },
      (err) => {
        !err && res.send({ success: true });
        err && res.send({ success: false });
      }
    );
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
  const posts = await PostModel.findByIdAndDelete(req.query.id);
  posts ? res.send({ success: true }) : res.send({ success: false });
};

module.exports = PostController;
