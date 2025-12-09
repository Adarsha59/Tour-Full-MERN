import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategoriesApi } from "../api/categoryApi";

export default function CategoriesSection({ title, subtitle }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await getAllCategoriesApi();
      setCategories(res.data || []);
    };

    load();
  }, []);

  return (
    <section id="categories" className="py-24  transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-primary mb-2 uppercase tracking-widest">
            {title || "Destinations"}
          </h4>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-100 dark:text-gray-900">
            {subtitle || "Explore packages by destination"}
          </h2>

          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto opacity-80 text-gray-300 dark:text-gray-700">
            Choose your dream destination and discover hand crafted travel
            experiences tailored for adventure, culture, and nature lovers.
          </p>
        </div>

        {/* Category Grid */}
        {categories.length === 0 ? (
          <p className="text-center text-lg opacity-60 text-gray-300 dark:text-gray-600">
            Loading destinations...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <Link
                to={`/category/${cat._id}`}
                state={{ categoryName: cat.title }}
                key={cat._id}
                className="group rounded-2xl overflow-hidden 
                
                border border-gray-800 dark:border-gray-200
                shadow-md hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/25 group-hover:bg-black/55 transition" />

                  {/* Button */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-xs px-4 py-2 rounded-full font-semibold 
dark:text-black text-white 
backdrop-blur-md 
bg-black/30 dark:bg-white/30 
border border-black/30 dark:border-white/30 
shadow-lg 
group-hover:bg-black/50 dark:group-hover:bg-white/50 
transition"
                    >
                      View Packages
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold line-clamp-1 text-gray-100 dark:text-gray-900">
                    {cat.title}
                  </h3>

                  <p className="text-sm opacity-80 line-clamp-2 text-gray-300 dark:text-gray-700">
                    {cat.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
