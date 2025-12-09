import { useState } from "react";
import { createContentApi } from "../../../api/websiteApi";
import { useNavigate } from "react-router-dom";

export default function WebsiteCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    heroTitle: "",
    heroSubtitle: "",
    heroDesc: "",
    heroCta: "",
    heroImage: "",

    galleryTitle: "",
    galleryDesc: "",

    partnerTitle: "",
    partnerSubtitle: "",

    packagesTitle: "",
    packagesSubtitle: "",

    categoriesTitle: "",
    categoriesSubtitle: "",

    videoTitle: "",
    videoSubtitle: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await createContentApi(form);
    navigate("/admin/website");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Create Website Content</h2>

      <div className="rounded-xl p-8 shadow-xl border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(form).map((key) => (
            <div key={key} className="flex flex-col gap-1">
              <label className="text-sm font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>

              <input
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="p-3 border rounded dark:bg-black"
                placeholder={key}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 rounded-lg font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
