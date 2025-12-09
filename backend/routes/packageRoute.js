import express from "express";
import {
  createPackage,
  getPackages,
  getPackageById,
  getPackagesByCategory,
  updatePackage,
  deletePackage,
  powerfulSearchPackages,
} from "../controllers/packageController.js";

const router = express.Router();

router.post("/", createPackage);

/* ✅ POWER SEARCH MUST COME FIRST */
router.get("/search/power", powerfulSearchPackages);

/* ✅ CATEGORY FILTER */
router.get("/category/:categoryId", getPackagesByCategory);

/* ✅ NORMAL LISTING */
router.get("/", getPackages);

/* ✅ ID BASED ROUTES LAST */
router.get("/:id", getPackageById);
router.put("/:id", updatePackage);
router.delete("/:id", deletePackage);

export default router;
