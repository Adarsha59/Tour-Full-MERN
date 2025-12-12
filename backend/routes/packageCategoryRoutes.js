import express from "express";
import {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/packageCategoryController.js";

import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

/* ADMIN ONLY */
router.post("/create", requireAuth, createCategory);

/* PUBLIC */
router.get("/", getAllCategories);

/* PUBLIC */
router.get("/:id", getSingleCategory);

/* ADMIN ONLY */
router.put("/:id", requireAuth, updateCategory);

/* ADMIN ONLY */
router.delete("/:id", requireAuth, deleteCategory);

export default router;
