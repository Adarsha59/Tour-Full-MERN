import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPackageByIdApi } from "../api/packageApi";
import PackageVideoCarousel from "../components/VideoCarousel";

function SectionBlock({ id, title, html }) {
  if (!html) return null;

  return (
    <section id={id} className="rounded-xl shadow p-6 md:p-8 mb-12 border">
      <h2 className="text-2xl font-bold mb-5">{title}</h2>

      <div
        className="prose max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className="rounded-lg p-4 border">
      <p className="text-xs uppercase tracking-wide">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

function StickyCard({ price }) {
  return (
    <div className="sticky top-28 space-y-6">
      <div className="rounded-xl border shadow-lg p-6">
        <p className="text-sm">Starting from</p>

        {price && (
          <div className="text-3xl font-extrabold text-primary">
            {price.currency}
            {price.current_price}
          </div>
        )}

        <p className="text-xs mt-1">Per person standard plan</p>

        <div className="mt-6 space-y-3">
          <button className="w-full py-2.5 bg-primary rounded-lg font-semibold hover:opacity-90 transition">
            Book this trip
          </button>

          <button className="w-full py-2.5 border text-primary border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition">
            Check availability
          </button>

          <button className="w-full py-2.5 rounded-lg font-semibold border transition">
            Send inquiry
          </button>
        </div>

        <div className="mt-6 border-t pt-4 text-xs space-y-1">
          <p>Secure payments</p>
          <p>Free itinerary modifications</p>
          <p>Local experts in Kathmandu</p>
        </div>
      </div>

      <div className="rounded-xl bg-primary p-6 shadow-lg text-white">
        <p className="text-base font-bold mb-1">Talk to an Expert</p>
        <p className="text-sm mb-3">
          Need a custom itinerary or have questions
        </p>
        <a
          href="tel:+9779841492029"
          className="underline text-sm font-semibold"
        >
          Call or WhatsApp: +977 9841492029
        </a>
      </div>
    </div>
  );
}

export default function PackageDetail() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPackageByIdApi(id)
      .then((res) => setPkg(res.data.data))
      .finally(() => setLoading(false));
  }, [id]);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  };

  if (loading)
    return (
      <div className="h-[60vh] flex items-center justify-center text-lg">
        Loading…
      </div>
    );

  if (!pkg)
    return (
      <div className="h-[60vh] flex flex-col justify-center items-center">
        <p>Package not found</p>
        <Link
          className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
          to="/packages"
        >
          Back
        </Link>
      </div>
    );

  const price = pkg.price_section?.price_per_person;

  return (
    <div>
      {/* HERO */}
      <div
        className="h-[340px] md:h-[480px] bg-cover bg-center rounded-b-[40px] flex items-end shadow-xl"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url(${pkg.banner_image})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {pkg.title}
          </h1>

          <div className="flex gap-3 mt-4 flex-wrap">
            {pkg.rating?.tripadvisor_reviews && (
              <span className="px-3 py-1 text-white rounded-full flex items-center gap-1 bg-opacity-40 bg-black">
                ★ {pkg.rating.tripadvisor_reviews}
              </span>
            )}

            <span className="px-3 py-1 text-white rounded-full bg-opacity-40 bg-black">
              {pkg.key_facts.duration} Days
            </span>

            <span className="px-3 py-1 text-white rounded-full bg-opacity-40 bg-black">
              Grade {pkg.key_facts.trip_grade}
            </span>
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <div className="sticky top-0 z-50 border-b shadow backdrop-blur-lg bg-opacity-70 bg-background">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto hide-scrollbar">
          {[
            ["overview", "Overview"],
            ["facts", "Key Facts"],
            ["itinerary", "Itinerary"],
            ["cost", "Cost"],
            ["addons", "Add Ons"],
            ["departures", "Departures"],
            ["gallery", "Gallery"],
            ["map", "Map"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-1.5 text-sm rounded-full border transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* LEFT */}
        <div className="flex-1">
          <section id="facts" className="rounded-xl shadow p-8 mb-12 border">
            <h2 className="text-2xl font-bold mb-5">Key Facts</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <Fact label="Duration" value={pkg.key_facts.duration} />
              <Fact label="Trip Grade" value={pkg.key_facts.trip_grade} />
              <Fact label="Country" value={pkg.key_facts.country} />
              <Fact label="Max Altitude" value={pkg.key_facts.max_altitude} />
              <Fact label="Group Size" value={pkg.key_facts.group_size} />
              <Fact label="Starts" value={pkg.key_facts.starts} />
              <Fact label="Ends" value={pkg.key_facts.ends} />
              <Fact label="Best Time" value={pkg.key_facts.best_time} />
            </div>
          </section>

          <SectionBlock
            id="overview"
            title="Trip Overview"
            html={
              (pkg.overview.summary || "") +
              (pkg.overview.highlights || "") +
              (pkg.overview.why_ebc || "") +
              (pkg.overview.what_to_expect || "") +
              (pkg.overview.distances || "")
            }
          />

          <SectionBlock
            id="itinerary"
            title="Detailed Itinerary"
            html={pkg.itinerary}
          />

          <SectionBlock
            id="cost"
            title="Cost Details"
            html={`
              <h3><strong>Included</strong></h3>
              ${pkg.cost_details.includes || ""}
              <br/><h3><strong>Excluded</strong></h3>
              ${pkg.cost_details.excludes || ""}
            `}
          />

          <SectionBlock
            id="addons"
            title="Optional Add Ons"
            html={pkg.add_ons}
          />

          <SectionBlock
            id="departures"
            title="Departures"
            html={pkg.departures}
          />

          <SectionBlock
            id="gallery"
            title="Gallery"
            html={`
              <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
                ${pkg.gallery
                  .map(
                    (g) =>
                      `<img src="${g.image}" class="rounded-lg border shadow object-cover h-44 w-full" />`
                  )
                  .join("")}
                  
              </div>
              
            `}
          />
          <section
            id="videos"
            className="rounded-xl shadow p-6 md:p-8 mb-12 border"
          >
            <h2 className="text-2xl font-bold mb-5">Trip Videos</h2>
            <PackageVideoCarousel packageId={pkg._id} />
          </section>

          <SectionBlock
            id="map"
            title="Route Map"
            html={`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${
        pkg.map.route_map
          ? `<img src="${pkg.map.route_map}" class="rounded-lg border shadow w-full"/>`
          : ""
      }
      ${
        pkg.map.altitude_graph
          ? `<img src="${pkg.map.altitude_graph}" class="rounded-lg border shadow w-full"/>`
          : ""
      }
    </div>
  `}
          />
        </div>

        {/* RIGHT */}
        <div className="lg:w-80 hidden lg:block">
          <StickyCard price={price} />
        </div>
      </div>
    </div>
  );
}
