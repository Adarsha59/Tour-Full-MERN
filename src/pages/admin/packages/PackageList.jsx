import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPackagesApi, deletePackageApi } from "../../../api/packageApi";

export default function PackageList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const res = await getPackagesApi();
    setData(res.data.data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;
    await deletePackageApi(id);
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-3xl font-bold text-gray800 dark:text-gray100">
          Packages
        </h2>

        <Link
          to="/admin/packages/create"
          className="px-5 py-2 rounded-lg bg-primary  shadow hover:opacity-90"
        >
          New Package
        </Link>
      </div>

      {/* Card */}
      <div className="rounded-xl bg-white dark:bg-[#242424] shadow border border-gray200 dark:border-gray700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray100 dark:bg-[#1a1a1a]">
            <tr className="border-b border-gray200 dark:border-gray700">
              <th className="p-3 text-sm font-semibold">Title</th>
              <th className="p-3 text-sm font-semibold">Duration</th>
              <th className="p-3 text-sm font-semibold">Category</th>

              <th className="p-3 text-sm font-semibold">Price from</th>
              <th className="p-3 text-sm font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Loading state */}
            {loading && (
              <tr>
                <td colSpan={5} className="p-5 text-center text-gray500">
                  Loading packages...
                </td>
              </tr>
            )}

            {/* Data rows */}
            {!loading &&
              data.map((pkg) => (
                <tr
                  key={pkg._id}
                  className="border-b border-gray100 dark:border-gray800 hover:bg-gray50 dark:hover:bg-[#333]"
                >
                  <td className="p-3 font-medium text-gray800 dark:text-gray100">
                    {pkg.title}
                  </td>

                  <td className="p-3 text-gray700 dark:text-gray300">
                    {pkg.key_facts?.duration || "-"}
                  </td>

                  <td className="p-3 text-gray700 dark:text-gray300">
                    {pkg.category?.title || ""}
                  </td>

                  {/* NEW PRICE SECTION */}
                  <td className="p-3 text-gray900 dark:text-gray100 font-semibold">
                    {pkg.price_section?.price_per_person?.current_price
                      ? `${pkg.price_section.price_per_person.currency} ${pkg.price_section.price_per_person.current_price}`
                      : "-"}
                  </td>

                  <td className="p-3 flex gap-3">
                    <Link
                      to={`/admin/packages/edit/${pkg._id}`}
                      className="px-4 py-1 rounded  text-sm shadow hover:opacity-90"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="px-4 py-1 rounded bg-red-600 text-white text-sm shadow hover:opacity-90"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {/* Empty state */}
            {!loading && data.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray500">
                  No packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
