import express from "express";
import Blog from "../model/blog-model.js";
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default route;
