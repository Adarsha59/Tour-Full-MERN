import express from "express";
import {
  createVideo,
  getAllVideos,
  getVideosByPackage,
  deleteVideo,
  updateVideo,
} from "../controllers/packageVideoController.js";

const router = express.Router();

router.post("/", createVideo);
router.get("/", getAllVideos);
router.get("/package/:packageId", getVideosByPackage);
router.delete("/:id", deleteVideo);
router.put("/:id", updateVideo);

export default router;
