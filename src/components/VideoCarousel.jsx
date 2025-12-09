import { useEffect, useState } from "react";
import { getVideosApi, getVideosByPackageApi } from "../api/videoApi";

export default function PackageVideoCarousel({ packageId, limit }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const res = packageId
          ? await getVideosByPackageApi(packageId)
          : await getVideosApi();

        const data = res?.data?.data || [];

        // ✅ ONLY SLICE IF limit EXISTS
        setVideos(limit ? data.slice(0, limit) : data);
      } catch (err) {
        console.error("Video load failed", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [packageId, limit]);

  if (loading) {
    return (
      <div className="text-center text-base font-semibold py-10">
        Loading travel videos...
      </div>
    );
  }

  if (!videos.length) return null;

  return (
    <>
      {/* Grid matches Gallery layout */}
      <section id="gallery" className=" py-24">
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-primary mb-2 uppercase tracking-widest">
            Videos
          </h4>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Mira Nuestras Aventuras Reales por Todo Nepal
          </h2>

          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto">
            Auténticos viajes de trekking, recorridos culturales, vuelos en
            helicóptero y experiencias de montaña capturadas en video.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
          {videos.map((v) => {
            const videoId = extractYouTubeId(v.youtubeUrl);

            return (
              <div
                key={v._id}
                onClick={() => setActiveVideo(v)}
                className="group relative cursor-pointer rounded-lg border shadow overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Thumbnail with Gallery height */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark overlay for title readability */}
                  <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center transition group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {v.isFeatured && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                    <h3 className="text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                      {v.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeId(
                activeVideo.youtubeUrl
              )}?autoplay=1&rel=0`}
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <button
              className="absolute -top-10 right-0 text-white text-sm font-bold px-3 py-1 border rounded"
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ✅ SAFE YOUTUBE ID EXTRACTOR */
function extractYouTubeId(url) {
  if (!url) return "";

  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/;

  const match = url.match(regExp);

  return match ? match[2] : "";
}
