import React from "react";

function Gallery() {
  return (
    <>
      <section id="gallery" className="bg-slate-100 pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Gallery
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
                Gallery Image
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
                ipsam obcaecati? Assumenda, ipsam?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap px-4">
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/B8b008EIRg4/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Raja Ampat</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/rajaampat.webp"
                      alt="Raja Ampat"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CcpyEpOJ_7c/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Gunung Bromo</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/bromo.webp"
                      alt="Gunung Bromo"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CTGlWN8hspN/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Borobudur</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/borobudur.webp"
                      alt="Borobudur"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CZ1lzdFhWv5/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Mandalika</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/mandalika.webp"
                      alt="Mandalika"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CbzmSC5hY6A/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Gunung Prau</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/prau.webp"
                      alt="Gunung Prau"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CcpyEpOJ_7c/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Gunung Kelimutu</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/kelimutu.webp"
                      alt="Gunung Kelimutu"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/Cbe_xsUBA67/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Gigi Hiu</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/gigihiu.webp"
                      alt="Gigi Hiu"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/BqXUY8ElAmJ/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Wae Rebo</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/waerebo.webp"
                      alt="Wae Rebo"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CcUm98evZvr/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Bali</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/bali.webp"
                      alt="Bali"
                      width="w-full"
                      className="bg-center group-hover:scale-125 duration-500"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CcpyEpOJ_7c/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Tumpak Sewu</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/tumpaksewu.webp"
                      alt="Tumpak Sewu"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CYQ_oAQhubJ/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Pulau Sambori</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/sambori.webp"
                      alt="Pulau Sambori"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <a
                href="https://www.instagram.com/p/CbXRBuaBmOV/?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                    <h1 className="tracking-wider">Pulau Belitung</h1>
                  </div>
                  <div className="flex flex-wrap content-center">
                    <img
                      src="dist/img/gallery/pulaubelitung.webp"
                      alt="Pulau Belitung"
                      width="w-full"
                      className="bg-center duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
