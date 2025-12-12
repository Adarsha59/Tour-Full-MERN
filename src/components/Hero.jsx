import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  DollarSign,
  MapPin,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getPackagesApi } from "../api/packageApi";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState("next");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await getPackagesApi();
        let raw = response.data;

        if (!Array.isArray(raw)) {
          if (Array.isArray(raw.packages)) raw = raw.packages;
          else if (Array.isArray(raw.data)) raw = raw.data;
          else {
            console.error("El servidor no devolvió un arreglo:", raw);
            raw = [];
          }
        }

        let formatted = raw.map((item) => ({
          ...item,
          category_title: item.category?.title || "",
        }));

        const withBanner = formatted.filter(
          (p) => p.banner_image && p.banner_image.trim() !== ""
        );
        if (withBanner.length > 0) {
          formatted = withBanner;
        }
        setPackages(formatted);
      } catch (error) {
        console.error("Error al obtener paquetes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  useEffect(() => {
    if (!autoPlay || packages.length === 0) return;
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [autoPlay, packages.length]);

  const handlePrev = () => {
    if (packages.length === 0) return;
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    if (packages.length === 0) return;
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % packages.length);
    setAutoPlay(false);
  };

  const handleCardClick = (idx) => {
    setDirection(idx > currentIndex ? "next" : "prev");
    setCurrentIndex(idx);
    setAutoPlay(false);
  };

  const getRelatedPackages = () => {
    if (packages.length <= 1) return [];

    const related = [];
    for (let i = 1; i <= 4 && i < packages.length; i++) {
      related.push(packages[(currentIndex + i) % packages.length]);
    }
    return related;
  };

  const handleExplore = (packageId) => {
    navigate(`/packages/${packageId}`);
  };

  if (loading || packages.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="inline-block mb-4 p-3 rounded-full bg-amber-500/20 backdrop-blur">
            <div className="w-8 h-8 rounded-full border-2 border-amber-400 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-white text-lg font-light tracking-wide">
            Preparando su próxima experiencia premium...
          </p>
        </div>
      </div>
    );
  }

  const currentPackage = packages[currentIndex];
  const duration = currentPackage.key_facts?.duration || "Duración del viaje";
  const groupSize = currentPackage.key_facts?.group_size || "Grupo flexible";
  const country = currentPackage.key_facts?.country || "Destino";
  const activities = currentPackage.key_facts?.activities || "Aventura";
  const currentPrice =
    currentPackage.price_section?.price_per_person?.current_price || 0;
  const currency =
    currentPackage.price_section?.price_per_person?.currency || "USD";
  const relatedPackages = getRelatedPackages();
  const heroImage =
    currentPackage.banner_image && currentPackage.banner_image.trim() !== ""
      ? currentPackage.banner_image
      : "https://images.unsplash.com/photo-1500930855697-b586d89ba3ee?w=1600&h=900&fit=crop";

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full flex flex-col md:flex-row items-stretch gap-8 md:gap-12 px-4 sm:px-8 lg:px-16 py-12 md:py-0">
          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <div className="inline-block w-fit">
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400/25 to-amber-500/15 border border-amber-400/60 backdrop-blur-md hover:from-amber-400/35 hover:to-amber-500/25 transition-all duration-300">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-amber-300">
                  {currentPackage.category_title}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                {currentPackage.title}
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-full shadow-lg shadow-amber-500/50"></div>
            </div>

            <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Emprenda una experiencia inolvidable a través de paisajes
              fascinantes y culturas auténticas.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Fact icon={Clock} label="Duración" value={duration} />
              <Fact icon={Users} label="Tamaño del grupo" value={groupSize} />
              <Fact icon={MapPin} label="País" value={country} />
              <Fact icon={Zap} label="Actividades" value={activities} />
            </div>

            <div className="bg-gradient-to-br from-amber-500/30 to-amber-600/20 border border-amber-400/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-amber-500/20">
              <p className="text-white/70 text-sm sm:text-base font-semibold mb-3 uppercase tracking-wider">
                Precio desde
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-amber-300">
                  {currency} {currentPrice}
                </span>
                <span className="text-white/60 text-base sm:text-lg">
                  por persona
                </span>
              </div>
            </div>

            <button
              onClick={() => handleExplore(currentPackage._id)}
              className="group relative w-full sm:w-fit px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-lg sm:text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/60 hover:scale-110 active:scale-95"
            >
              <span className="relative flex items-center justify-center gap-3">
                Reserve su aventura
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0">
            <div className="relative w-full max-w-md md:max-w-lg h-96 md:h-[580px] perspective">
              {relatedPackages.map((pkg, idx) => {
                const isActive = idx === 0;
                const isHovered = hoveredCard === idx;
                const pkgImage =
                  pkg.banner_image && pkg.banner_image.trim() !== ""
                    ? pkg.banner_image
                    : heroImage;

                let zIndex = 0;
                let scale = 0.82;
                let opacity = 0.55;
                let translateY = 0;

                if (isActive) {
                  zIndex = 50;
                  scale = 1;
                  opacity = 1;
                  translateY = 0;
                } else if (idx === 1) {
                  zIndex = 40;
                  scale = 0.88;
                  opacity = 0.7;
                  translateY = 32;
                } else if (idx === 2) {
                  zIndex = 30;
                  scale = 0.78;
                  opacity = 0.45;
                  translateY = 64;
                } else {
                  zIndex = 20;
                  scale = 0.7;
                  opacity = 0.25;
                  translateY = 96;
                }

                return (
                  <div
                    key={idx}
                    onClick={() =>
                      handleCardClick(
                        (currentIndex + idx + 1) % packages.length
                      )
                    }
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="absolute inset-x-0 top-0 w-full transition-all duration-500 cursor-pointer"
                    style={{
                      zIndex,
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      opacity: isHovered ? 1 : opacity,
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-amber-400/60 transition-all duration-300">
                      <img
                        src={pkgImage}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 text-white">
                        {isActive && (
                          <>
                            <div className="mb-5 inline-block">
                              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-500/20 border border-amber-400/70 text-amber-200 text-sm font-bold backdrop-blur-md">
                                Destino destacado
                              </span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 line-clamp12 drop-shadow-lg">
                              {pkg.title}
                            </h3>

                            <p className="text-white/80 text-base sm:text-lg mb-8 font-medium">
                              {pkg.category_title}
                            </p>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleExplore(pkg._id);
                              }}
                              className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-xl hover:shadow-amber-500/50 font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                              Explorar ahora
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </>
                        )}
                      </div>

                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-3xl border-2 border-amber-400 opacity-0 animate-pulse pointer-events-none"></div>
                          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300 pointer-events-none"></div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center gap-6 z-20">
        <div className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-black text-amber-400">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div className="w-px h-8 bg-white/30"></div>
            <span className="text-lg text-white/80 font-semibold">
              {String(packages.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="p-4 rounded-full border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-amber-400/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="p-4 rounded-full border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-amber-400/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Fact = ({ icon: Icon, label, value }) => (
  <div className="group">
    <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white/8 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-amber-400/50 transition-all duration-300">
      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-white/60 text-xs sm:text-sm font-bold mb-1 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-white font-bold text-sm sm:text-base truncate">
          {value}
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
