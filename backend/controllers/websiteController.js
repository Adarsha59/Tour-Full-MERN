import mongoose from "mongoose";
import WebsiteContent from "../model/website-content.js";

export const createContent = async (req, res) => {
  try {
    const data = await WebsiteContent.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllContent = async (req, res) => {
  try {
    const data = await WebsiteContent.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getContentById = async (req, res) => {
  try {
    const data = await WebsiteContent.findById(req.params.id);
    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateContent = async (req, res) => {
  try {
    const data = await WebsiteContent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteContent = async (req, res) => {
  try {
    const data = await WebsiteContent.findByIdAndDelete(req.params.id);
    if (!data)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
