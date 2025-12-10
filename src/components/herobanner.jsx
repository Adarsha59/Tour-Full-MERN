import React from "react";
import { useAuth } from "../context/Auth";
import { ArrowRight } from "lucide-react";

const Herobanner = ({ title, subtitle, cta, image }) => {
  const [isLoggedIn] = useAuth();
  const username = isLoggedIn?.name || "";

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* ✅ Background Image */}

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT */}
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            {title || "Explora Nepal con Nosotros"}
            {username && (
              <span className="block text-primary mt-2">
                Bienvenido, {username}
              </span>
            )}
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6  max-w-2xl">
            {subtitle || "Tu socio de confianza para trekking, tours y vuelos"}
          </h2>

          <p className="text-base md:text-lg  mb-10 max-w-2xl">
            Viajes auténticos por el Himalaya, aventuras culturales,
            helicópteros, safaris y experiencias diseñadas por expertos locales
            en Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-yellow-600 font-extrabold hover:opacity-90 transition"
            >
              {cta || "Reservar ahora"}
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white  font-semibold hover:bg-white hover:text-black transition"
            >
              Ver Galería
            </a>
          </div>
        </div>

        {/* RIGHT FEATURE CARD */}
        {/* RIGHT SIDE BRAND GIF */}
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <img
              src="dist/img/logoo.gif"
              alt="Top of the World Adventure Logo"
              className="w-[360px] xl:w-[420px] drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
