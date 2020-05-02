const express = require("express");

const controllers = require("./controllers");
const middlewares = require("./middlewares");
const routes = express.Router();

routes.get("/search", middlewares.hasQuery, controllers.Search.index);

module.exports = routes;
