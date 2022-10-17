const CategoryModel = require("../models/CategoryModel");

const CategoryController = {};

CategoryController.get_all_categories = async (req, res, next) => {
  const categories = await CategoryModel.find();
  res.json(categories);
};

CategoryController.create_category = async (req, res, next) => {
  const { category_name } = req.body;

  CategoryModel.create({ category_name }, (err) => {
    err ? res.send({ success: false }) : res.send({ success: true });
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
  const delete_category = await CategoryModel.findByIdAndDelete(req.body.id);
  delete_category ? res.send({ success: true }) : res.send({ success: false });
};
module.exports = CategoryController;
