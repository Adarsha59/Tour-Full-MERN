import React, { useEffect, useState } from "react";
import { getPackagesApi } from "../api/packageApi";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Gallery({ galleryTitle, galleryDesc, limit }) {
  const title = galleryTitle || "Galería de Fotos";
  const subtitle =
    "Descubre la belleza de Nepal a través de nuestras imágenes seleccionadas";
  const description =
    galleryDesc ||
    "Descubre la belleza de Nepal a través de nuestras imágenes seleccionadas";

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("des", galleryDesc);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  // Load packages
  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true);
        const res = await getPackagesApi();

        const data = res.data.data || [];
        setPackages(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError("Unable to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, [limit]);

  const openLightbox = (pkg, imgIndex) => {
    setSelectedPackage(pkg);
    setSelectedImageIdx(imgIndex);
  };

  const handlePrev = () => {
    const total = selectedPackage.gallery.length;
    setSelectedImageIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    const total = selectedPackage.gallery.length;
    setSelectedImageIdx((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section id="gallery" className=" py-24">
        <div className=" max-w-7xl mx-auto px-4 ">
          {/* Header */}
          <div className="w-full mb-16">
            <div className="mx-auto max-w-3xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                {title}
              </h4>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {subtitle}
              </h2>
              <p className="text-base md:text-lg font-medium">{description}</p>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <p className="text-center text-red-600">{error}</p>
          )}

          {/* Gallery Grid: Only first image of each package */}
          {!loading && !error && packages.length > 0 && (
            <div className="flex w-full flex-wrap ">
              {packages.map((pkg) => {
                const firstImage = pkg.gallery?.[0]?.image;
                if (!firstImage) return null;

                return (
                  <div
                    key={pkg._id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
                  >
                    <button
                      className="w-full"
                      onClick={() => openLightbox(pkg, 0)}
                    >
                      <div className="group relative overflow-hidden rounded-lg shadow hover:shadow-xl bg-gray-100 dark:bg-gray-800">
                        {/* Hover overlay */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition p-4">
                          <h1 className="text-sm font-semibold">{pkg.title}</h1>
                          <span className="text-xs mt-2">Ver</span>
                        </div>

                        {/* First image */}
                        <img
                          src={firstImage}
                          alt={pkg.title}
                          className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                          onError={(e) =>
                            (e.target.src =
                              "https://via.placeholder.com/400?text=Image+Not+Found")
                          }
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={() => setSelectedPackage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPackage.gallery[selectedImageIdx].image}
              alt={selectedPackage.gallery[selectedImageIdx].caption}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Prev Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* View Package Button */}
            <Link
              to={`/packages/${selectedPackage._id}`}
              className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              View Package
            </Link>

            {/* Image Count */}
            <div className="absolute bottom-4 right-4 bg-gray-900/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {selectedImageIdx + 1} of {selectedPackage.gallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
