import express from "express";
import {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/packageCategoryController.js";

const router = express.Router();

router.post("/create", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getSingleCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
