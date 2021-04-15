const express = require("express");
const recipeRouter = require("./router");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;
