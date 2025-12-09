import mongoose from "mongoose";

const packageCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    shortDesc: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const PackageCategory = mongoose.model(
  "PackageCategory",
  packageCategorySchema
);

export default PackageCategory;
