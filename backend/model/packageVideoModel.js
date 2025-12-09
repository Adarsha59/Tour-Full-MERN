import mongoose from "mongoose";

const PackageVideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    youtubeUrl: { type: String, required: true },

    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PackageVideo", PackageVideoSchema);
