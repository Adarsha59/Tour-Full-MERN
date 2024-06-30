import React from "react";

const Herobanner = () => {
  return (
    <>
      <section id="home" className="pt-36 dark:bg-slate-200 text-white ">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="mt-1 block max-w-lg text-4xl font-bold dark:text-black  lg:text-5xl">
                Hello <span id="typed"></span>
              </h1>
              <h2 className="mb-5 text-base font-semibold text-secondary lg:text-lg">
                Travel &
                <span className="text-base font-semibold text-dark lg:text-lg">
                  Vacation
                </span>
              </h2>
              <p className="mb-10 font-medium leading-relaxed text-secondary">
                aaba jane hoena ta tour la booking garam aafno fav destination
                adarsha-tour.com bata hai ta
              </p>

              <a
                href="#about"
                className="rounded-full bg-primary py-4 px-8 text-base text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Book-Now
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 lg:right-0 lg:mb-16 lg:mt-6">
                <img
                  src="dist/img/HeroIcon.png"
                  alt="Sandhika Galih"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herobanner;
