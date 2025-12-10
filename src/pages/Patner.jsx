import React from "react";

function Partner({ title, subtitle }) {
  return (
    <section id="partner" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {title || " Confianza y Reconocimiento "}
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {subtitle ||
              "Afiliaciones oficiales de turismo y reseñas verificadas a nivel mundial"}
          </p>
        </div>

        {/* Two Column Premium Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Affiliations Card */}
          <div className="rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-10">
              Nuestras Afiliaciones
            </h3>

            <div className="grid grid-cols-2 gap-10 place-items-center">
              {[
                {
                  src: "/dist/img/svg/nepal-goverment.svg",
                  alt: "Gobierno de Nepal",
                },
                {
                  src: "/dist/img/svg/ntb.svg",
                  alt: "Junta de Turismo de Nepal",
                },
                {
                  src: "/dist/img/svg/nma.svg",
                  alt: "Asociación de Montañismo de Nepal",
                },
                {
                  src: "/dist/img/svg/taan.svg",
                  alt: "Asociación de Agencias de Trekking de Nepal",
                },
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-5 rounded-xl transition duration-300 hover:scale-110 hover:shadow-md"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 max-w-[180px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-10">
              Recomendaciones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
              {/* Tripadvisor */}
              <a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <div className="flex items-center justify-center p-6 rounded-xl transition duration-300 hover:scale-110 hover:shadow-xl">
                  <img
                    src="/dist/img/svg/tripadvisor.svg"
                    alt="Tripadvisor"
                    className="h-20 max-w-[200px] object-contain"
                  />
                </div>
              </a>

              {/* Google */}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <div className="flex items-center justify-center p-6 rounded-xl transition duration-300 hover:scale-110 hover:shadow-xl">
                  <img
                    src="/dist/img/svg/google.svg"
                    alt="Reseñas de Google"
                    className="h-20 max-w-[200px] object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
