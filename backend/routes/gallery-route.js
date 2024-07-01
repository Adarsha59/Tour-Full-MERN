import express from "express";
import Gallery from "../model/gallery-model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.find({});
    res.status(200).json(gallery);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
