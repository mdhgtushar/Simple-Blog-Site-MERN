const express = require("express");
const PostController = require("../controllers/PostController");

const ClientRoute = express.Router();

ClientRoute.get("/posts", PostController.get_all);

module.exports = ClientRoute;
