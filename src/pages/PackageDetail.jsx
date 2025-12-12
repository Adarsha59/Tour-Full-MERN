import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Clock,
  Mountain,
  ChevronRight,
  Star,
  MapPin,
  Users,
  Zap,
  AlertCircle,
  Check,
  X,
  Calendar,
  TrendingDown,
  Award,
  Compass,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { getPackageByIdApi } from "../api/packageApi";
import PackageVideoCarousel from "../components/VideoCarousel";

/* LOADING SKELETON */
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50">
      {/* Hero Skeleton */}
      <div className="h-96 md:h-[520px] bg-gray-800 dark:bg-gray-300 animate-pulse" />

      {/* Nav Skeleton */}
      <div className="sticky top-20 z-40 bg-gray-800/90 dark:bg-gray-200/90 p-4">
        <div className="max-w-7xl mx-auto flex gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-gray-800 dark:bg-gray-200 animate-pulse space-y-4"
            >
              <div className="h-8 bg-gray-700 dark:bg-gray-300 rounded w-1/3" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-700 dark:bg-gray-300 rounded" />
                <div className="h-4 bg-gray-700 dark:bg-gray-300 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block space-y-4">
          <div className="rounded-2xl p-8 bg-gray-800 dark:bg-gray-200 animate-pulse space-y-4 sticky top-32">
            <div className="h-12 bg-gray-700 dark:bg-gray-300 rounded" />
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 bg-gray-700 dark:bg-gray-300 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SECTION BLOCK */
function SectionBlock({ id, title, html, icon: Icon }) {
  if (!html || html.trim() === "") return null;

  return (
    <section
      id={id}
      className="rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100 transition-all hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-600"
    >
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon size={32} className="text-blue-500 flex-shrink-0" />}
        <h2 className="text-3xl font-bold text-white dark:text-gray-900">
          {title}
        </h2>
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

/* FACT CARD */
function Fact({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl p-6 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-50 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-600 transition-all group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 dark:text-gray-600">
          {label}
        </p>
        {Icon && (
          <Icon
            size={20}
            className="text-blue-500 group-hover:scale-110 transition-transform"
          />
        )}
      </div>
      <p className="text-xl font-bold text-white dark:text-gray-900">{value}</p>
    </div>
  );
}

/* INCLUDE/EXCLUDE ITEM */
function IncludeItem({ text, included }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all">
      {included ? (
        <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
      ) : (
        <X size={20} className="text-red-500 flex-shrink-0 mt-1" />
      )}
      <span className="text-gray-300 dark:text-gray-700">{text}</span>
    </div>
  );
}

/* DEPARTURE CARD */
function DepartureCard({ departure }) {
  const startDate = new Date(departure.starts);
  const endDate = new Date(departure.ends);

  return (
    <div className="rounded-xl p-6 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-50 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-blue-500" />
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-600 uppercase">
              Inicio
            </p>
            <p className="text-lg font-bold text-white dark:text-gray-900">
              {startDate.toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            departure.status === "Guaranteed"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {departure.status}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <MapPin size={16} className="text-gray-400" />
        <p className="text-sm text-gray-400 dark:text-gray-600">
          hasta{" "}
          {endDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
          })}
        </p>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-700 dark:border-gray-300">
        <p className="text-xs text-gray-400 dark:text-gray-600 mb-2">Precio</p>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-700 bg-clip-text text-transparent">
            {departure.current_price}
          </span>
          {departure.old_price && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {departure.old_price}
            </span>
          )}
        </div>
      </div>

      <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
        Reservar Ahora
      </button>
    </div>
  );
}

/* STICKY SIDEBAR */
function StickyCard({ price, contact }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isSticky ? "fixed pt-12 top-28 mb-8  w-80" : "sticky space-y-4 top-32"
      }`}
    >
      <div className="space-y-4 max-w-sm">
        {/* PRICE CARD */}
        <div className="rounded-2xl border border-gray-700 dark:border-gray-300 shadow-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-white hover:shadow-3xl transition-all">
          <p className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-wide">
            Precio de Inicio
          </p>

          {price && (
            <div className="mt-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-700 bg-clip-text text-transparent">
                  {price.currency}
                  {price.current_price}
                </span>
              </div>

              {price.old_price && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400 line-through">
                    {price.currency}
                    {price.old_price}
                  </span>
                  <span className="flex items-center gap-1 text-green-500 font-semibold">
                    <TrendingDown size={14} />
                    Ahorra {price.currency}
                    {price.old_price - price.current_price}
                  </span>
                </div>
              )}
            </div>
          )}

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Por persona • Plan estándar
          </p>

          <div className="mt-8 space-y-3">
            <button className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95">
              Reservar Este Viaje
            </button>

            <button className="w-full py-3.5 border-2 border-blue-500 dark:border-blue-600 text-blue-400 dark:text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Verificar Disponibilidad
            </button>

            <button className="w-full py-3.5 border-2 border-gray-600 dark:border-gray-400 text-gray-300 dark:text-gray-700 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200">
              Enviar Consulta
            </button>
          </div>
        </div>

        {/* EXPERT CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-600 dark:to-blue-800 p-6 shadow-2xl text-white hover:shadow-3xl transition-all">
          <div className="flex items-center gap-4 mb-5">
            <img
              src="https://media.topoftheworldadv.com/themes/images/janardan-nepal.webp"
              alt="Experto"
              className="w-14 h-14 rounded-full object-cover border-2 border-white/40 shadow-md"
            />

            <div>
              <h3 className="text-lg font-bold leading-tight">
                Habla con un Experto
              </h3>
              <p className="text-sm text-blue-100">Itinerario personalizado</p>
            </div>
          </div>

          <div className="space-y-3">
            <a className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all duration-200">
              <Phone size={18} />
              <div className="text-sm">
                <p className="font-semibold">Llamar</p>
                <p className="text-blue-100 text-xs">+977 9841492029</p>
              </div>
            </a>

            <a
              href={`https://api.whatsapp.com/send/?phone=9779841492029&text&type=phone_number&app_absent=0`}
              className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all duration-200"
            >
              <MessageCircle size={18} />
              <div className="text-sm">
                <p className="font-semibold">WhatsApp</p>
                <p className="text-blue-100 text-xs">Chatear ahora</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* MAIN PAGE */
export default function PackageDetail() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("overview");
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsNavSticky(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Simulating API call with mock data
    setTimeout(() => {
      setLoading(true);

      getPackageByIdApi(id)
        .then((res) => setPkg(res.data.data))
        .finally(() => setLoading(false));
      setLoading(false);
    }, 1500);
  }, [id]);

  const scrollTo = (target) => {
    setActiveNav(target);
    const el = document.getElementById(target);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!pkg) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-900 dark:bg-gray-50">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <p className="text-gray-400 dark:text-gray-600 text-lg mb-4">
          Paquete no encontrado
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Volver Atrás
        </button>
      </div>
    );
  }

  const price = pkg.price_section?.price_per_person;

  const navItems = [
    ["overview", "Descripción General"],
    ["facts", "Hechos Clave"],
    ["itinerary", "Itinerario"],
    ["cost", "Costos"],
    ["addons", "Complementos"],
    ["departures", "Salidas"],
    ["gallery", "Galería"],
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-white dark:via-gray-50 dark:to-white">
      {/* HERO */}
      <div
        className="h-96 md:h-[520px] bg-cover bg-center flex items-end shadow-2xl relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(37,99,235,0.3) 100%), url(${pkg.banner_image})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="mb-5">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3 drop-shadow-lg">
              {pkg.title}
            </h1>
            {pkg.rating?.tripadvisor_reviews && (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(pkg.rating.tripadvisor_reviews / 1.1)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-400"
                      }
                    />
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold">
                  {pkg.rating.tripadvisor_reviews} TripAdvisor
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/30 transition-all">
              <Clock size={16} /> {pkg.key_facts.duration} Días
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/30 transition-all">
              <Mountain size={16} /> Grado {pkg.key_facts.trip_grade}
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/30 transition-all">
              <Compass size={16} /> {pkg.key_facts.activities}
            </div>
          </div>
        </div>
      </div>

      {/* NAV */}
      <div
        className={`transition-all duration-300 ${
          isNavSticky
            ? "fixed top-20 left-0 right-0 z-50 bg-gray-900/95 dark:bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-700 dark:border-gray-300"
            : "sticky top-20 z-40 bg-gray-900/90 dark:bg-white/90 backdrop-blur-md border-b border-gray-700 dark:border-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
                activeNav === id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 dark:bg-gray-200 text-gray-300 dark:text-gray-700 hover:bg-gray-700 dark:hover:bg-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          {/* KEY FACTS */}
          <section
            id="facts"
            className="rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={32} className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white dark:text-gray-900">
                Hechos Clave
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Fact
                label="Duración"
                value={`${pkg.key_facts.duration} Días`}
                icon={Clock}
              />
              <Fact label="Grado" value={pkg.key_facts.trip_grade} icon={Zap} />
              <Fact label="País" value={pkg.key_facts.country} icon={MapPin} />
              <Fact
                label="Altitud Máxima"
                value={`${pkg.key_facts.max_altitude}m`}
                icon={Mountain}
              />
              <Fact
                label="Tamaño del Grupo"
                value={`${pkg.key_facts.group_size} Personas`}
                icon={Users}
              />
              <Fact
                label="Mejor Época"
                value={pkg.key_facts.best_time}
                icon={Calendar}
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-gray-700 dark:border-gray-300">
              <div className="text-center">
                <p className="text-gray-400 dark:text-gray-600 text-xs uppercase mb-2">
                  Inicio
                </p>
                <p className="text-xl font-bold text-white dark:text-gray-900">
                  {pkg.key_facts.starts}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 dark:text-gray-600 text-xs uppercase mb-2">
                  Fin
                </p>
                <p className="text-xl font-bold text-white dark:text-gray-900">
                  {pkg.key_facts.ends}
                </p>
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <SectionBlock
            id="overview"
            title="Descripción General del Viaje"
            html={
              (pkg.overview.summary || "") +
              (pkg.overview.highlights || "") +
              (pkg.overview.why_ebc || "") +
              (pkg.overview.what_to_expect || "")
            }
            icon={Compass}
          />

          {/* ITINERARY */}
          <SectionBlock
            id="itinerary"
            title="Itinerario Detallado"
            html={pkg.itinerary}
            icon={Calendar}
          />

          {/* COST DETAILS */}
          <section
            id="cost"
            className="rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown size={32} className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white dark:text-gray-900">
                Detalles de Costos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
                  <Check size={24} /> Incluido
                </h3>
                <div className="space-y-2">
                  {pkg.cost_details.includes && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pkg.cost_details.includes,
                      }}
                      className="prose max-w-none"
                    />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                  <X size={24} /> No Incluido
                </h3>
                <div className="space-y-2">
                  {pkg.cost_details.excludes && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pkg.cost_details.excludes,
                      }}
                      className="prose max-w-none"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ADD ONS */}
          <SectionBlock
            id="addons"
            title="Complementos Opcionales"
            html={pkg.add_ons}
            icon={Zap}
          />

          {/* DEPARTURES */}
          <section
            id="departures"
            className="rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar size={32} className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white dark:text-gray-900">
                Fechas de Salida
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pkg.departure_dates?.map((departure, idx) => (
                <DepartureCard key={idx} departure={departure} />
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section
            id="gallery"
            className="rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-gray-700 dark:border-gray-300 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-50 dark:to-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Star size={32} className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white dark:text-gray-900">
                Galería de Imágenes
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pkg.gallery?.map((g, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-gray-700 dark:border-gray-300 shadow-lg hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={g.image}
                      alt={g.caption || "galería"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {g.caption}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <PackageVideoCarousel packageId={pkg._id} limit={4} />
          </section>
        </div>

        <div className="hidden lg:block lg:w-96">
          <StickyCard price={price} contact={pkg.contact} />
        </div>
      </div>

      {/* MOBILE BOTTOM CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 dark:bg-white border-t border-gray-700 dark:border-gray-300 p-4 shadow-2xl z-40 space-y-3">
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg active:scale-95 transition-all">
          Reservar Ahora
        </button>
        <button className="w-full py-2 text-gray-300 dark:text-gray-700 text-sm">
          Verificar Disponibilidad
        </button>
      </div>

      {/* BOTTOM PADDING FOR MOBILE */}
      <div className="lg:hidden h-32" />
    </div>
  );
}
