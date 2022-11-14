const express = require('express');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    next(); // THIS IS DIFFERENT
  });
  
  const { getPostsByTagName } = require('../db');
  
  // UPDATE
  tagsRouter.get('/', async (req, res) => {
    const tags = await getPostsByTagName();
  
    res.send({
      tags
    });
  });
  module.exports = tagsRouter;