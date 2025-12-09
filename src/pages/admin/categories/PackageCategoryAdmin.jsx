import { useEffect, useState } from "react";

import {
  createCategoryApi,
  getAllCategoriesApi,
  updateCategoryApi,
  deleteCategoryApi,
} from "../../../api/categoryApi";

export default function PackageCategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    shortDesc: "",
    image: "",
    isActive: true,
  });

  const [editingId, setEditingId] = useState(null);

  const fetchCategories = async () => {
    const res = await getAllCategoriesApi();
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const generateSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingId) {
        await updateCategoryApi(editingId, form);
      } else {
        await createCategoryApi(form);
      }

      setForm({
        title: "",
        slug: "",
        shortDesc: "",
        image: "",
        isActive: true,
      });

      setEditingId(null);
      fetchCategories();
    } catch (err) {
      alert("Error saving category");
    }

    setLoading(false);
  };

  const handleEdit = (cat) => {
    setEditingId(cat._id);
    setForm({
      title: cat.title,
      slug: cat.slug,
      shortDesc: cat.shortDesc,
      image: cat.image,
      isActive: cat.isActive,
    });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this category")) return;

    await deleteCategoryApi(id);
    fetchCategories();
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Package Category Admin</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className=" shadow rounded-lg p-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Category Title"
          value={form.title}
          onChange={(e) => {
            const value = e.target.value;

            setForm({
              ...form,
              title: value,
              slug: generateSlug(value),
            });
          }}
          className="border p-3 rounded bg-white dark:bg-black"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-3 rounded bg-white dark:bg-black"
          required
        />

        <input
          type="text"
          name="shortDesc"
          placeholder="Short Description"
          value={form.shortDesc}
          onChange={handleChange}
          className="border p-3 rounded md:col-span-2 bg-white dark:bg-black"
          required
        />

        <label className="flex items-center gap-2 md:col-span-2 ">
          <input
            type="checkbox"
            name="isActive"
            checked={form.isActive}
            onChange={handleChange}
          />
          Active Category
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 dark:text-white text-black py-2 rounded font-semibold md:col-span-2"
        >
          {editingId ? "Update Category" : "Create Category"}
        </button>
      </form>

      {/* TABLE */}
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full border">
          <thead className="bg-black-100 dark:bg-white-100">
            <tr>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Slug</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="text-center">
                <td className="border p-2">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-16 h-12 object-cover mx-auto rounded"
                  />
                </td>
                <td className="border p-2 font-semibold">{cat.title}</td>
                <td className="border p-2 text-sm">{cat.slug}</td>
                <td className="border p-2">
                  {cat.isActive ? "Active" : "Hidden"}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(cat._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
