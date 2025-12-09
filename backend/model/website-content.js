import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  // HERO SECTION
  heroTitle: { type: String, required: true },
  heroSubtitle: { type: String, required: true },
  heroDesc: { type: String, required: true },
  heroCta: { type: String, required: true },
  heroImage: { type: String, required: true },

  // GALLERY SECTION
  galleryTitle: { type: String, required: true },
  galleryDesc: { type: String, required: true },

  // PARTNER SECTION
  partnerTitle: { type: String, required: true },
  partnerSubtitle: { type: String, required: true },

  // PACKAGES SECTION
  packagesTitle: { type: String, required: true },
  packagesSubtitle: { type: String, required: true },

  // CATEGORIES SECTION
  categoriesTitle: { type: String, required: true },
  categoriesSubtitle: { type: String, required: true },

  // VIDEO SECTION
  videoTitle: { type: String, required: true },
  videoSubtitle: { type: String, required: true },
});

const WebsiteContent = mongoose.model("WebsiteContent", websiteSchema);

export default WebsiteContent;
