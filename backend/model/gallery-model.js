import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  title: { type: "string", required: true },
  image_link: { type: "string", required: true },
});

const Gallery = mongoose.model("gallerydata", GallerySchema);

export default Gallery;
