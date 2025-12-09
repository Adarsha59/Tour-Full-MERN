import { useEffect, useState } from "react";
import { getPackagesApi } from "../../../api/packageApi";
import {
  createVideoApi,
  getVideosApi,
  deleteVideoApi,
  updateVideoApi,
} from "../../../api/videoApi";

export default function PackageVideoAdmin() {
  const [packages, setPackages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    youtubeUrl: "",
    package: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    const pRes = await getPackagesApi();
    const vRes = await getVideosApi();

    setPackages(pRes.data.data || []);
    setVideos(vRes.data.data || []);
    setLoading(false);
  };

  // ✅ CREATE OR UPDATE
  const submit = async () => {
    if (!form.title || !form.youtubeUrl || !form.package) return;

    if (editingId) {
      await updateVideoApi(editingId, form);
    } else {
      await createVideoApi(form);
    }

    setForm({ title: "", youtubeUrl: "", package: "" });
    setEditingId(null);
    loadAll();
  };

  // ✅ SET EDIT DATA
  const edit = (video) => {
    setEditingId(video._id);
    setForm({
      title: video.title,
      youtubeUrl: video.youtubeUrl,
      package: video.package?._id || "",
    });
  };

  // ✅ DELETE
  const remove = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    await deleteVideoApi(id);
    loadAll();
  };

  if (loading) return <p className="text-lg">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* FORM */}
      <div className="rounded-xl border p-8 shadow space-y-6">
        <h2 className="text-2xl font-bold">
          {editingId ? "Edit Video" : "Add Package Video"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            placeholder="Video Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-3 rounded border bg-white dark:bg-black"
          />

          <input
            placeholder="YouTube URL"
            value={form.youtubeUrl}
            onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
            className="p-3 rounded border bg-white dark:bg-black"
          />

          <select
            value={form.package}
            onChange={(e) => setForm({ ...form, package: e.target.value })}
            className="p-3 rounded border bg-white dark:bg-black"
          >
            <option value="">Select Package</option>
            {packages.map((p) => (
              <option key={p._id} value={p._id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <button onClick={submit} className="px-6 py-3 bg-primary  rounded">
            {editingId ? "Update Video" : "Save Video"}
          </button>

          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setForm({ title: "", youtubeUrl: "", package: "" });
              }}
              className="px-6 py-3 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* LIST */}
      <div className="rounded-xl border shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray100 dark:bg-[#1a1a1a]">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Package</th>
              <th className="p-4">YouTube</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {videos.map((v) => (
              <tr
                key={v._id}
                className="border-t hover:bg-gray50 dark:hover:bg-[#2b2b2b]"
              >
                <td className="p-4 font-semibold">{v.title}</td>

                <td className="p-4">{v.package?.title}</td>

                <td className="p-4">
                  <a
                    href={v.youtubeUrl}
                    target="_blank"
                    className="text-primary underline"
                  >
                    View Video
                  </a>
                </td>

                <td className="p-4 text-right space-x-3">
                  <button
                    onClick={() => edit(v)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => remove(v._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {videos.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center opacity-60">
                  No videos added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
