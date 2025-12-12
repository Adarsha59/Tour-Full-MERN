import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPackagesApi, powerfulSearchPackagesApi } from "../api/packageApi";
import PackageCard from "../components/PackageCard";
import CategoriesSection from "../components/CategoriesSection";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const res = search
          ? await powerfulSearchPackagesApi(search)
          : await getPackagesApi();
        setPackages(res.data.data || []);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [search]);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="relative w-full h-[420px] bg-center bg-cover flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            {search
              ? `Resultados de búsqueda para "${search}"`
              : "Descubre Nepal con Nosotros"}
          </h1>

          <p className="mt-4 text-lg md:text-xl opacity-90 font-light">
            Excursiones, trekking y paquetes de aventura diseñados a medida
          </p>
        </div>
      </div>

      {/* LISTING */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading && (
          <p className="text-center text-lg opacity-60">Cargando paquetes...</p>
        )}

        {!loading && packages.length === 0 && (
          <p className="text-center text-lg opacity-60">
            No se encontraron paquetes para "{search}"
          </p>
        )}

        {!loading && packages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((p) => (
              <PackageCard key={p._id} data={p} />
            ))}
          </div>
        )}
      </div>

      <CategoriesSection />
    </div>
  );
}
