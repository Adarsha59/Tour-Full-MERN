import express from "express";
import {
  createContent,
  getAllContent,
  getContentById,
  updateContent,
  deleteContent,
} from "../controllers/websiteController.js";

import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

/* ADMIN ONLY */
router.post("/", requireAuth, createContent);

/* PUBLIC */
router.get("/", getAllContent);

/* PUBLIC */
router.get("/:id", getContentById);

/* ADMIN ONLY */
router.put("/:id", requireAuth, updateContent);

/* ADMIN ONLY */
router.delete("/:id", requireAuth, deleteContent);

export default router;
