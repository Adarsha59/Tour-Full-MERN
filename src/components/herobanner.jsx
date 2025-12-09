import React from "react";
import { useAuth } from "../context/Auth";

const Herobanner = ({ title, subtitle, cta, image }) => {
  const [isLoggedIn] = useAuth(); // not isLoggedOut
  const username = isLoggedIn?.name || "Stranger";

  return (
    <section className="  pt-28 pb-28 bg-gradient-to-br from-primary to-purple-700 text-white dark:text-black dark:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {title || `Hello,`}{" "}
            <span className="text-yellow-300">{username}</span>
          </h1>
          <h2 className="text-xl font-semibold text-white dark:text-gray-900 mb-6">
            {subtitle || "Travel & Vacation with us"}
            <span className="text-yellow-200 dark:text-primary">Vacation</span>
          </h2>
          <p className="mb-8 leading-relaxed text-white dark:text-gray-700 max-w-lg mx-auto lg:mx-0">
            {cta ||
              "Book your next trip with confidence and discover Nepal with us."}
            <strong> adarsha-tour.com</strong> bata hai ta!
          </p>

          <a
            href="#about"
            className="inline-block text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition"
          >
            Book Now
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src="dist/img/logoo.gif"
              alt="Animated Nepal Travel"
              className="mx-auto w-full max-w-sm drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
