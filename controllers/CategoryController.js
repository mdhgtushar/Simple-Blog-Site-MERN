const CategoryModel = require("../models/CategoryModel");

const CategoryController = {};

CategoryController.get_all_categories = async (req, res, next) => {
  const categories = await CategoryModel.find();
  res.json(categories);
};

CategoryController.create_category = async (req, res, next) => {
  const { category_name } = req.body;
  let sampleFile;
  let uploadPath;
  sampleFile = req.files.image;
  uploadPath = __dirname + "/uploads/" + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    CategoryModel.create({ category_name, image: sampleFile.name }, (err) => {
      err ? res.send({ success: false }) : res.send({ success: true });
    });
  });
};

CategoryController.update_category = async (req, res, next) => {
  const { id, category_name } = req.body;
  const update_category = await CategoryModel.findByIdAndUpdate(id, {
    category_name,
  });
  update_category ? res.send({ success: true }) : res.send({ success: false });
};

CategoryController.delete_category = async (req, res, next) => {
  console.log(req.query.id);
  const delete_category = await CategoryModel.findByIdAndDelete(req.query.id);
  delete_category ? res.send({ success: true }) : res.send({ success: false });
};
module.exports = CategoryController;
