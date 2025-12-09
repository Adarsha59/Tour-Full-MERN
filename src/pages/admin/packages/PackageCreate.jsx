import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPackageApi } from "../../../api/packageApi";
import PackageTabsForm from "./PackageTabsForm";

const EMPTY_PACKAGE = {
  title: "",
  category: "",

  rating: { tripadvisor_reviews: "" },
  banner_image: "",

  key_facts: {
    duration: "",
    trip_grade: "",
    country: "",
    max_altitude: "",
    group_size: "",
    starts: "",
    ends: "",
    activities: "",
    best_time: "",
  },

  overview: {
    summary: "",
    highlights: "",
    why_ebc: "",
    what_to_expect: "",
    distances: "",
  },

  gallery: [],

  itinerary: "",

  map: {
    route_map: "",
    altitude_graph: "",
  },

  cost_details: {
    includes: "",
    excludes: "",
  },

  add_ons: "",
  departures: "",

  price_section: {
    price_per_person: {
      current_price: 0,
      old_price: 0,
      currency: "USD",
    },

    group_discount_price: [],
  },
};

export default function PackageCreate() {
  const [form, setForm] = useState(EMPTY_PACKAGE);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createPackageApi(form);
    navigate("/admin/packages");
  };

  return (
    <PackageTabsForm
      form={form}
      setForm={setForm}
      onSubmit={handleSubmit}
      mode="create"
    />
  );
}
