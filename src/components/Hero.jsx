import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  DollarSign,
} from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState("next");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch packages from your backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Replace with your actual API endpoint
        // const res = await fetch('/api/packages?limit=5');
        // const data = await res.json();
        // setPackages(data);

        // Mock data for demonstration
        setPackages([
          {
            _id: "1",
            title: "Yosemite National Park",
            category: "Sierra Nevada",
            banner_image:
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=900&fit=crop",
            key_facts: {
              duration: "7 days",
              country: "United States",
              group_size: "2-6 people",
              activities: "Hiking, Photography",
            },
            price_section: {
              price_per_person: {
                current_price: 2499,
                currency: "USD",
              },
            },
            gallery: [
              {
                caption: "Los Angeles Beach",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop",
              },
              {
                caption: "Girême Valley",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
              },
              {
                caption: "Saint Antonie",
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
              },
              {
                caption: "Nagano Prefecture",
                image:
                  "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=500&h=600&fit=crop",
              },
            ],
          },
          {
            _id: "2",
            title: "Maui Explorer",
            category: "Hawaii",
            banner_image:
              "https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=1400&h=900&fit=crop",
            key_facts: {
              duration: "5 days",
              country: "United States",
              group_size: "1-4 people",
              activities: "Beach, Snorkeling",
            },
            price_section: {
              price_per_person: {
                current_price: 1899,
                currency: "USD",
              },
            },
            gallery: [
              {
                caption: "Waikiki Beach",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop",
              },
              {
                caption: "Haleakala",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
              },
              {
                caption: "Road to Hana",
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
              },
              {
                caption: "Iao Valley",
                image:
                  "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=500&h=600&fit=crop",
              },
            ],
          },
          {
            _id: "3",
            title: "Northern Lights Quest",
            category: "Iceland",
            banner_image:
              "https://images.unsplash.com/photo-1579033100900-cb5ea28aa75f?w=1400&h=900&fit=crop",
            key_facts: {
              duration: "8 days",
              country: "Iceland",
              group_size: "2-10 people",
              activities: "Aurora Viewing, Ice Hiking",
            },
            price_section: {
              price_per_person: {
                current_price: 3299,
                currency: "USD",
              },
            },
            gallery: [
              {
                caption: "Reykjavik",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop",
              },
              {
                caption: "Geysir Valley",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
              },
              {
                caption: "Skaftafell",
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
              },
              {
                caption: "Jökulsárlón",
                image:
                  "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=500&h=600&fit=crop",
              },
            ],
          },
          {
            _id: "4",
            title: "Kyoto Temples",
            category: "Japan",
            banner_image:
              "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=1400&h=900&fit=crop",
            key_facts: {
              duration: "10 days",
              country: "Japan",
              group_size: "1-6 people",
              activities: "Culture, Photography",
            },
            price_section: {
              price_per_person: {
                current_price: 2799,
                currency: "USD",
              },
            },
            gallery: [
              {
                caption: "Fushimi Inari",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop",
              },
              {
                caption: "Arashiyama",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
              },
              {
                caption: "Kinkaku-ji",
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
              },
              {
                caption: "Gion District",
                image:
                  "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=500&h=600&fit=crop",
              },
            ],
          },
          {
            _id: "5",
            title: "Desert Safari",
            category: "Dubai",
            banner_image:
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&h=900&fit=crop",
            key_facts: {
              duration: "6 days",
              country: "UAE",
              group_size: "2-8 people",
              activities: "Safari, Desert Activities",
            },
            price_section: {
              price_per_person: {
                current_price: 2199,
                currency: "USD",
              },
            },
            gallery: [
              {
                caption: "Desert Dunes",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop",
              },
              {
                caption: "Abu Dhabi",
                image:
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
              },
              {
                caption: "Marina Beach",
                image:
                  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=600&fit=crop",
              },
              {
                caption: "Gold Souk",
                image:
                  "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=500&h=600&fit=crop",
              },
            ],
          },
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
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
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % packages.length);
    setAutoPlay(false);
  };

  if (loading || packages.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading premium packages...</p>
        </div>
      </div>
    );
  }

  const currentPackage = packages[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentPackage.banner_image}
          alt="Hero background"
          className="w-full h-full object-cover transition-all duration-1200 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-20 space-y-10">
          {/* Location Badge */}
          <div
            className={`inline-block transition-all duration-700 transform ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
          >
            <p className="text-amber-400 text-xs md:text-sm font-light tracking-widest uppercase">
              {currentPackage.category}
            </p>
          </div>

          {/* Title */}
          <div
            className={`transition-all duration-700 transform ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight max-w-lg">
              {currentPackage.title}
            </h1>
          </div>

          {/* Key Facts Grid */}
          <div
            className={`transition-all duration-700 transform ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-light uppercase tracking-wide">
                  Duration
                </p>
                <p className="text-white text-sm font-semibold">
                  {currentPackage.key_facts.duration}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-light uppercase tracking-wide">
                  Group Size
                </p>
                <p className="text-white text-sm font-semibold">
                  {currentPackage.key_facts.group_size}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-light uppercase tracking-wide">
                  Location
                </p>
                <p className="text-white text-sm font-semibold">
                  {currentPackage.key_facts.country}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-light uppercase tracking-wide">
                  Activities
                </p>
                <p className="text-white text-sm font-semibold">
                  {currentPackage.key_facts.activities}
                </p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div
            className={`transition-all duration-700 transform ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-3">
              <DollarSign className="text-amber-400" size={28} />
              <div>
                <p className="text-white/50 text-xs font-light">
                  Starting from
                </p>
                <p className="text-white text-3xl font-bold">
                  {currentPackage.price_section.price_per_person.current_price}
                  <span className="text-lg text-white/60"> per person</span>
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div
            className={`transition-all duration-700 transform ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center gap-3 hover:-translate-y-1">
              Explore Package
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>

          {/* Controls */}
          <div
            className={`flex items-center gap-6 pt-4 transition-all duration-700 ${
              direction === "next"
                ? "animate-slideInLeft"
                : "animate-slideInRight"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={handlePrev}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-3 rounded-full border border-white/30 text-white hover:border-amber-400 hover:bg-white/5 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 max-w-xs h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 transition-all duration-700 rounded-full shadow-lg shadow-amber-400/50"
                style={{
                  width: `${((currentIndex + 1) / packages.length) * 100}%`,
                }}
              />
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              className="p-3 rounded-full border border-white/30 text-white hover:border-amber-400 hover:bg-white/5 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Section - Card Carousel */}
        <div className="hidden lg:flex w-1/2 items-center justify-center px-12">
          <div className="relative h-full flex items-center justify-center gap-8">
            {currentPackage.gallery.map((galleryItem, idx) => {
              const isActive = idx === 0;

              return (
                <div
                  key={idx}
                  className="relative flex-shrink-0"
                  style={{
                    animation: `cardSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      idx * 80
                    }ms forwards`,
                    opacity: 0,
                  }}
                >
                  <style>{`
                    @keyframes cardSlideIn {
                      from {
                        opacity: 0;
                        transform: translateY(80px) scale(0.85);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                      }
                    }
                  `}</style>

                  <div
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 group cursor-pointer ${
                      isActive
                        ? "w-72 h-96 ring-3 ring-amber-400 shadow-2xl shadow-amber-400/50 z-30"
                        : idx === 1
                        ? "w-72 h-96 opacity-60 hover:opacity-75 z-20 shadow-xl shadow-black/40"
                        : "w-72 h-96 opacity-35 hover:opacity-50 z-10 shadow-lg shadow-black/30"
                    } hover:-translate-y-4 transition-transform`}
                  >
                    <img
                      src={galleryItem.image}
                      alt={galleryItem.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <span className="text-amber-400 text-xs font-light tracking-widest uppercase">
                        Featured
                      </span>
                      <h3 className="text-white font-bold text-2xl leading-tight">
                        {galleryItem.caption}
                      </h3>
                    </div>

                    {isActive && (
                      <div className="absolute top-8 right-8 w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/70" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-8">
        <div className="text-right">
          <div className="text-6xl font-bold text-white/20 leading-none">
            {String(currentIndex + 1).padStart(2, "0")}
          </div>
          <p className="text-white/40 text-xs mt-2">
            of {String(packages.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
