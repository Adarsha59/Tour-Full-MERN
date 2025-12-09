import mongoose from "mongoose";
import Package from "../model/packageModel.js";

export const createPackage = async (req, res) => {
  const pkg = await Package.create(req.body);
  res.json({ success: true, data: pkg });
};

export const getPackages = async (req, res) => {
  const list = await Package.find()
    .populate("category")
    .sort({ createdAt: -1 });

  res.json({ success: true, data: list });
};

export const powerfulSearchPackages = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length < 2) {
      return res.json({ success: true, data: [] });
    }

    const result = await Package.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    )
      .sort({
        score: { $meta: "textScore" },
        createdAt: -1,
      })
      .populate("category");

    res.json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (err) {
    console.error("POWER SEARCH ERROR:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getPackageById = async (req, res) => {
  const pkg = await Package.findById(req.params.id).populate("category");
  res.json({ success: true, data: pkg });
};

export const getPackagesByCategory = async (req, res) => {
  const { categoryId } = req.params;

  const list = await Package.find({ category: categoryId })
    .populate("category")
    .sort({ createdAt: -1 });

  res.json({ success: true, data: list });
};

export const updatePackage = async (req, res) => {
  const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json({ success: true, data: pkg });
};

export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
