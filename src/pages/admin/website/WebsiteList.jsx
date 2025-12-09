import { useEffect, useState } from "react";
import { getAllContentApi, deleteContentApi } from "../../../api/websiteApi";
import { Link } from "react-router-dom";

export default function WebsiteList() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await getAllContentApi();
    setData(res.data.data);
  };

  const handleDelete = async (id) => {
    await deleteContentApi(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Website Content</h2>

        <Link
          to="/admin/website/create"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Create New
        </Link>
      </div>

      <div className="shadow rounded p-4 overflow-auto">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr>
              <th className="p-3 text-left">Hero Title</th>
              <th className="p-3 text-left">Gallery Title</th>
              <th className="p-3 text-left">Partner Title</th>
              <th className="p-3 text-left">Packages Title</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3">{item.heroTitle}</td>
                <td className="p-3">{item.galleryTitle}</td>
                <td className="p-3">{item.partnerTitle}</td>
                <td className="p-3">{item.packagesTitle}</td>

                <td className="p-3">
                  <Link
                    to={`/admin/website/edit/${item._id}`}
                    className="px-3 py-1 bg-green-600 text-white rounded mr-2"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
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
