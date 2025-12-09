import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Contáctanos
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80">
            Ponte en contacto con nuestros expertos en viajes para tours
            personalizados, trekking, vuelos en helicóptero y viajes de lujo por
            todo Nepal.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO PANEL */}
          <div className="relative rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-8">Ponte en Contacto</h3>

            <p className="text-sm leading-relaxed mb-8 opacity-90">
              Top of the World Adventure Pvt. Ltd. tiene su sede en el corazón
              de Katmandú y se especializa en trekking, tours culturales,
              aventuras en helicóptero, viajes a Bután, Tíbet y la sagrada ruta
              al Monte Kailas.
            </p>

            <ul className="space-y-6 text-sm font-semibold">
              <li className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                Thamel Marg, Kwabahal, Katmandú, Nepal
              </li>

              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                info@topoftheworldadv.com
              </li>

              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                +977 9841492029 Janardan
              </li>

              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                +977 9860974753 Shreeram
              </li>

              <li className="flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp +977 9841492029
              </li>
            </ul>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="relative rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-8">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full bg-transparent border-b-2 outline-none py-3 text-sm"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-sm opacity-70 transition peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs">
                  Nombre Completo
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full bg-transparent border-b-2 outline-none py-3 text-sm"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-sm opacity-70 transition peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs">
                  Correo Electrónico
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  required
                  className="peer w-full bg-transparent border-b-2 outline-none py-3 text-sm"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-sm opacity-70 transition peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs">
                  Número de Teléfono
                </label>
              </div>

              {/* Country */}
              <div className="relative">
                <select
                  required
                  className="w-full bg-transparent border-b-2 outline-none py-3 text-sm"
                >
                  <option value="">Selecciona tu País</option>
                  <option>Nepal</option>
                  <option>India</option>
                  <option>Estados Unidos</option>
                  <option>Reino Unido</option>
                  <option>Australia</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="5"
                  required
                  className="peer w-full bg-transparent border-b-2 outline-none py-3 text-sm"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-sm opacity-70 transition peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs">
                  Preguntas o Mensaje
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-extrabold bg-primary hover:opacity-90 transition"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-24 overflow-hidden rounded-3xl shadow-2xl filter grayscale contrast-125">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7064.424773825243!2d85.310963!3d27.710728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fce48aa515%3A0x76202b39b12d3ff!2sTop%20of%20the%20World%20Adventure!5e0!3m2!1sen!2snp!4v1723534517391!5m2!1sen!2snp"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
