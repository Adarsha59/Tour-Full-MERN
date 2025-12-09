import { useEffect, useState } from "react";
import { getContentByIdApi, updateContentApi } from "../../../api/websiteApi";
import { useNavigate, useParams } from "react-router-dom";

export default function WebsiteEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await getContentByIdApi(id);

      const cleanData = { ...res.data.data };
      delete cleanData._id;
      delete cleanData.__v;

      setForm(cleanData);
    };

    loadData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateContentApi(id, form);
    navigate("/admin/website");
  };

  if (!form) return <p className="text-lg">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Edit Website Content</h2>

      <div className="rounded-xl p-8 shadow-xl border border-gray300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HERO */}
          <Input
            label="Hero Title"
            name="heroTitle"
            value={form.heroTitle}
            onChange={handleChange}
          />
          <Input
            label="Hero Subtitle"
            name="heroSubtitle"
            value={form.heroSubtitle}
            onChange={handleChange}
          />
          <Input
            label="Hero Description"
            name="heroDesc"
            value={form.heroDesc}
            onChange={handleChange}
          />
          <Input
            label="Hero CTA"
            name="heroCta"
            value={form.heroCta}
            onChange={handleChange}
          />
          <Input
            label="Hero Image URL"
            name="heroImage"
            value={form.heroImage}
            onChange={handleChange}
          />

          {/* GALLERY */}
          <Input
            label="Gallery Title"
            name="galleryTitle"
            value={form.galleryTitle}
            onChange={handleChange}
          />
          <Input
            label="Gallery Description"
            name="galleryDesc"
            value={form.galleryDesc}
            onChange={handleChange}
          />

          {/* PARTNER */}
          <Input
            label="Partner Title"
            name="partnerTitle"
            value={form.partnerTitle}
            onChange={handleChange}
          />
          <Input
            label="Partner Subtitle"
            name="partnerSubtitle"
            value={form.partnerSubtitle}
            onChange={handleChange}
          />

          {/* PACKAGES */}
          <Input
            label="Packages Title"
            name="packagesTitle"
            value={form.packagesTitle}
            onChange={handleChange}
          />
          <Input
            label="Packages Subtitle"
            name="packagesSubtitle"
            value={form.packagesSubtitle}
            onChange={handleChange}
          />
        </div>

        <div className="mt-10 text-right">
          <button
            onClick={handleUpdate}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

/* ✅ CLEAN REUSABLE INPUT */
function Input({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold">{label}</label>

      <input
        name={name}
        value={value || ""}
        onChange={onChange}
        className="p-3 border rounded bg-white dark:bg-black"
      />
    </div>
  );
}
