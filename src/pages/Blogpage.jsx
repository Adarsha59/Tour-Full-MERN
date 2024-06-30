import React from "react";

function Blogpage() {
  return (
    <>
      <section id="blog" className="pt-36 pb-32">
        <div className="container mx-auto">
          <div className="mx-auto w-full rounded-lg border px-8 py-8 shadow-lg lg:w-2/3">
            <img
              className="mb-2 w-full rounded-lg"
              src="../img/destinasi/bali.webp"
              alt="bali"
            />
            <div className="flex items-center">
              <a
                href="https://maps.app.goo.gl/1DTf4uKsC1kCa6ZX7"
                target="_blank"
                className="flex h-10 w-8 items-center justify-center rounded-full text-sm text-red-600 duration-500 hover:text-rose-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/1DTf4uKsC1kCa6ZX7"
                target="_blank"
                className="mr-3 mt-1 flex h-9 items-center justify-center rounded-full text-base font-semibold text-red-600 duration-500 hover:text-rose-300"
              >
                Pantai Kuta (Bali).
              </a>
            </div>
            <h1 className="mb-2 text-2xl font-bold text-dark lg:text-2xl">
              Bali
            </h1>
            <p className="mb-2">
              Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan
              Pulau Dewata. Baru-baru ini, Bali didapuk menjadi destinasi paling
              populer di dunia versi Tripadvisor Travellers' Choice tahun 2021.
              Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan
              kearifan lokalnya yang istimewa menjadikan Bali sebagai destinasi
              #DiIndonesiaAja yang patut Sobat kunjungi setidaknya sekali seumur
              hidup!
            </p>
            <h1 className="mb-2 text-2xl font-bold text-dark lg:text-2xl">
              Deretan pantai yang aduhai
            </h1>
            <p className="mb-2">
              Daya tarik utama Pulau Bali tentu saja terdapat pada wisata
              pantainya. Hampir semua wisatawan yang berlibur di Bali memasukkan
              pantai ke dalam daftar kunjungannya. Deretan pantai yang ada di
              Bali punya keunikan dan pesonanya tersendiri, lho!
            </p>
            <p className="mb-6">
              Salah satu pantai yang paling populer di Bali adalah Pantai Kuta.
              Pantai berpasir putih ini terkenal berkat ombaknya yang besar
              sekaligus menjadi surga bagi para peselancar. Karena lokasinya
              yang strategis, berbagai hotel, restoran, toko, dan kafe juga
              dapat dengan mudah Sobat Pesona temukan di sepanjang jalan Pantai
              Kuta.
            </p>
            <p className="mb-6 truncate font-bold text-dark">
              Source Indonesia Travel :
              <a
                href="https://www.indonesia.travel/id/id/destinasi/bali-nusa-tenggara/bali"
                className="font-semibold text-red-600 hover:text-rose-300"
              >
                https://www.indonesia.travel/id/id/destinasi/bali-nusa-tenggara/bali
              </a>
            </p>
            <div className="w-full px-4">
              <a href="../form/php/form.php">
                <button className="w-full rounded-full bg-primary py-3 px-8 text-base text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                  Pesan Tiket
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogpage;
