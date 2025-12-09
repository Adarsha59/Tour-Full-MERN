import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getPackagesByCategoryApi } from "../api/packageApi";
import PackageCard from "../components/PackageCard";

export default function CategoryPackages() {
  const { id } = useParams();
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  console.log("cate", categoryName);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPackagesByCategoryApi(id);
        const data = res;
        console.log("data", data);

        setPackages(res.data.data || []);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold mb-3 text-gray-100 dark:text-gray-900">
          {categoryName || "Category Packages"}
        </h2>

        <p className="text-base md:text-lg opacity-80 text-gray-100 dark:text-gray-900">
          Hand crafted travel experiences designed for unforgettable journeys
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg opacity-60 text-gray-700 dark:text-gray-400">
          Loading packages...
        </p>
      )}

      {/* Empty */}
      {!loading && packages.length === 0 && (
        <p className="text-center text-lg opacity-60 text-gray-700 dark:text-gray-400">
          No packages found.
        </p>
      )}

      {/* Grid */}
      {!loading && packages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} data={pkg} />
          ))}
        </div>
      )}
    </section>
  );
}
