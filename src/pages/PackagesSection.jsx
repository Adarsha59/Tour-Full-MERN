import { useEffect, useState } from "react";
import { getPackagesApi } from "../api/packageApi";
import PackageCard from "../components/PackageCard";

export default function PackagesSection({ title, subtitle, limit }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPackagesApi();
        const data = res.data.data || [];

        // ✅ Apply limit ONLY if it exists
        setPackages(limit ? data.slice(0, limit) : data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [limit]);

  return (
    <section id="packages" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-primary mb-2 uppercase tracking-widest">
            {title || "Popular Packages"}
          </h4>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            {subtitle || "Choose from our best selling tours and treks"}
          </h2>

          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto">
            Carefully curated adventures exploring Nepal's mountains, culture,
            and landscapes.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg opacity-60">Loading packages...</p>
        )}

        {/* Empty */}
        {!loading && packages.length === 0 && (
          <p className="text-center text-lg opacity-60">No packages found.</p>
        )}

        {/* Grid using PackageCard */}
        {!loading && packages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.slice(0, 6).map((p) => (
              <PackageCard key={p._id} data={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
