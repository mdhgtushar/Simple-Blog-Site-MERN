const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const PostController = require("../controllers/PostController");

const ClientRoute = express.Router();

//posts routes
ClientRoute.get("/posts", PostController.get_all_posts);
ClientRoute.get("/posts/featured", PostController.get_featured_posts);
ClientRoute.post("/posts", PostController.create_post);
ClientRoute.patch("/posts", PostController.update_post);
ClientRoute.delete("/posts", PostController.delete_post);

//categories routes
ClientRoute.get("/category", CategoryController.get_all_categories);
ClientRoute.post("/category", CategoryController.create_category);
ClientRoute.patch("/category", CategoryController.update_category);
ClientRoute.delete("/category", CategoryController.delete_category);

module.exports = ClientRoute;
