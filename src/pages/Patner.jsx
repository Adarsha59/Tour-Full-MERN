import React from "react";

function Patner() {
  return (
    <>
      <section id="partner" className="bg-slate-800 pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Partner
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Partner Pembayaran
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                Metode pembayaran yang tersedia untuk Anda pilih sesuai
                keinginan.
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/alfamart.svg" alt="Alfamart" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/shopeepay.svg" alt="Shopeepay" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/atm-bersama.svg" alt="ATM Bersama" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/bni.svg" alt="BCA" />
              </a>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/dana.svg" alt="Alfamart" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/gopay.svg" alt="Shopeepay" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/ovo.svg" alt="ATM-Bersama" />
              </a>
              <a
                href="#"
                className="mx-4 max-w-[120px] py-6 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
              >
                <img src="dist/img/clients/mandiri.svg" alt="ovo" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Patner;
