import mongoose from "mongoose";
import PackageVideo from "../model/packageVideoModel.js";

export const createVideo = async (req, res) => {
  const video = await PackageVideo.create(req.body);
  res.json({ success: true, data: video });
};

export const getAllVideos = async (req, res) => {
  const list = await PackageVideo.find().populate("package");
  res.json({ success: true, data: list });
};

export const getVideosByPackage = async (req, res) => {
  const { packageId } = req.params;

  if (!packageId || !mongoose.Types.ObjectId.isValid(packageId)) {
    return res.json({ success: true, data: [] });
  }

  const videos = await PackageVideo.find({
    package: packageId,
  });

  res.json({ success: true, data: videos });
};

export const updateVideo = async (req, res) => {
  const video = await PackageVideo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ success: true, data: video });
};

export const deleteVideo = async (req, res) => {
  await PackageVideo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
