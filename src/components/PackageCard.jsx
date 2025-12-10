import { Link } from "react-router-dom";

export default function PackageCard({ data }) {
  const p = data;

  return (
    <div
      className="
        group rounded-2xl overflow-hidden 
        border border-gray-800 dark:border-gray-200
        shadow-md hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.banner_image}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/25 group-hover:bg-black/55 transition" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {p.key_facts?.trip_grade && (
            <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Nivel {p.key_facts.trip_grade}
            </span>
          )}

          {p.key_facts?.duration && (
            <span className="bg-primary text-xs px-3 py-1 rounded-full font-semibold text-white shadow">
              {p.key_facts.duration} Días
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold line-clamp-2 text-gray-100 dark:text-gray-900">
          {p.title}
        </h3>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">
            {p.price_section?.price_per_person?.currency}
            {p.price_section?.price_per_person?.current_price}
          </span>

          <Link
            to={`/packages/${p._id}`}
            className="
              text-xs px-4 py-2 rounded-full font-semibold 
              dark:text-black text-white 
              backdrop-blur-md 
              dark:bg-black/30 bg-white/30 
              border dark:border-black/30 border-white/30 
              shadow-lg 
              dark:hover:bg-black/50 hover:bg-white/50 
              transition
            "
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
