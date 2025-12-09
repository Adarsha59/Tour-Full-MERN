import React from "react";
import {
  Mountain,
  ShieldCheck,
  Users,
  Leaf,
  Clock,
  BadgeCheck,
} from "lucide-react";

function About() {
  return (
    <section id="about" className=" w-full h-screen overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute top-20 inset-0 -z-10">
        <img
          src="https://media.topoftheworldadv.com/uploads/fullbanner/for-web-page.webp"
          alt="Top of the World Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute  inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-90px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
          {/* LEFT BRAND STORY */}
          <div className=" dark:text-white">
            <h4 className="text-sm tracking-widest uppercase mb-4 text-primary">
              Sobre Top of the World Adventure
            </h4>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
              Tu puerta de entrada a experiencias inolvidables en el Himalaya
            </h1>

            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Top of the World Adventure es una de las principales empresas de
              viajes privadas de Nepal, sirviendo con orgullo a viajeros de todo
              el mundo desde el año 2013. Con más de doce mil clientes de más de
              cien países, nuestra reputación se basa en la confianza, la
              seguridad y las experiencias inolvidables.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Nuestra experiencia abarca trekking, tours en helicóptero, safaris
              en la jungla, visitas culturales, escalada de picos, rafting,
              parapente, peregrinaciones, viajes a Bután y Tíbet, vuelos de
              montaña y el sagrado viaje al Monte Kailash.
            </p>

            <p className="text-lg leading-relaxed text-gray-100">
              Nos diferenciamos por nuestras operaciones éticas, precios
              transparentes, profundo respeto cultural y prácticas de turismo
              ecológico responsable.
            </p>
          </div>

          {/* RIGHT PREMIUM TRUST CARD */}
          <div className="backdrop-blur-xl bg-white bg-opacity-10 border border-white border-opacity-20 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-10 text-center">
              Por qué los viajeros confían en nosotros
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base">
              <div className="flex items-center gap-4">
                <Mountain className="text-primary w-7 h-7" />
                <span>Operadores expertos locales</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-primary w-7 h-7" />
                <span>Salidas garantizadas y máxima seguridad</span>
              </div>

              <div className="flex items-center gap-4">
                <BadgeCheck className="text-primary w-7 h-7" />
                <span>Precios transparentes y justos</span>
              </div>

              <div className="flex items-center gap-4">
                <Users className="text-primary w-7 h-7" />
                <span>Especialistas en familias y grupos pequeños</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-primary w-7 h-7" />
                <span>Soporte profesional al cliente las 24 horas</span>
              </div>

              <div className="flex items-center gap-4">
                <Leaf className="text-primary w-7 h-7" />
                <span>Turismo ecológico y responsable</span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://topoftheworldadv.com/client-reviews"
                target="_blank"
                className="inline-block px-10 py-4 rounded-full font-semibold text-black bg-white hover:bg-primary hover:text-white transition"
              >
                Leer todas las reseñas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
