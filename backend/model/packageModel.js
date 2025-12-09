import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PackageCategory",
      required: true,
    },
    rating: {
      tripadvisor_reviews: { type: String, default: "" },
    },

    banner_image: { type: String, default: "" },

    key_facts: {
      duration: { type: String, default: "" },
      trip_grade: { type: String, default: "" },
      country: { type: String, default: "" },
      max_altitude: { type: String, default: "" },
      group_size: { type: String, default: "" },
      starts: { type: String, default: "" },
      ends: { type: String, default: "" },
      activities: { type: String, default: "" },
      best_time: { type: String, default: "" },
    },

    overview: {
      summary: { type: String, default: "" },
      highlights: { type: String, default: "" }, // editor html
      why_ebc: { type: String, default: "" }, // editor html
      what_to_expect: { type: String, default: "" }, // editor html
      distances: { type: String, default: "" }, // editor html
    },

    gallery: [
      {
        caption: { type: String, default: "" },
        image: { type: String, default: "" },
      },
    ],

    itinerary: { type: String, default: "" }, // editor html

    map: {
      route_map: { type: String, default: "" },
      altitude_graph: { type: String, default: "" },
    },

    cost_details: {
      includes: { type: String, default: "" }, // editor html
      excludes: { type: String, default: "" }, // editor html
    },

    add_ons: { type: String, default: "" }, // editor html

    departures: { type: String, default: "" }, // editor html

    price_section: {
      price_per_person: {
        current_price: { type: Number, default: 0 },
        old_price: { type: Number, default: 0 },
        currency: { type: String, default: "USD" },
      },

      group_discount_price: {
        type: [
          {
            group_size: { type: String, default: "" },
            price_per_person: { type: Number, default: 0 },
          },
        ],
        default: [],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Package", PackageSchema);
PackageSchema.index(
  {
    title: "text",
    "overview.summary": "text",
    "overview.highlights": "text",
    "overview.why_ebc": "text",
    "overview.what_to_expect": "text",
    "overview.distances": "text",
    itinerary: "text",
    "cost_details.includes": "text",
    "cost_details.excludes": "text",
    "key_facts.country": "text",
    "key_facts.best_time": "text",
    "key_facts.trip_grade": "text",
    "key_facts.activities": "text",
  },
  {
    weights: {
      title: 10,
      "overview.summary": 7,
      "overview.highlights": 6,
      itinerary: 5,
      "key_facts.country": 4,
      "key_facts.activities": 3,
    },
    name: "PackageSearchIndex",
  }
);
