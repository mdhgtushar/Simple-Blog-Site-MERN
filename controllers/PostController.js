const PostController = {};

PostController.get_all = (req, res, next) => {
  res.send("succes from controller");
};

module.exports = PostController;
