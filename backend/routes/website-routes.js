import express from "express";
import {
  createContent,
  getAllContent,
  getContentById,
  updateContent,
  deleteContent,
} from "../controllers/websiteController.js";

const router = express.Router();

router.post("/", createContent);
router.get("/", getAllContent);
router.get("/:id", getContentById);
router.put("/:id", updateContent);
router.delete("/:id", deleteContent);

export default router;
