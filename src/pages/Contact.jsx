import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" class="pt-36 pb-32 dark:bg-slate-200 text-white">
        <div class="container">
          <div class="w-full px-4">
            <div class="mx-auto mb-16 max-w-xl text-center">
              <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
              <h2 class="mb-4 text-2xl font-bold dark:text-black sm:text-4xl lg:text-3xl">
                feel free to contact me
              </h2>
              <p class="text-md font-medium text-secondary md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam non vitae nesciunt laboriosam. Delectus doloremque
              </p>
            </div>
          </div>

          <form name="travelaku-contact-form">
            <div class="w-full lg:mx-auto lg:w-2/3">
              <div class="mb-8 w-full px-4">
                <label for="name" class="text-base font-bold text-primary">
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  id="name"
                  class="w-full rounded-md dark:bg-white  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div class="mb-8 w-full px-4">
                <label for="email" class="text-base font-bold text-primary">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="w-full rounded-md dark:bg-white  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div class="mb-8 w-full px-4">
                <label for="message" class="text-base font-bold text-primary">
                  Pesan
                </label>
                <textarea
                  type="message"
                  name="pesan"
                  id="message"
                  class="h-32 w-full rounded-md dark:bg-white  p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <div class="w-full px-4">
                <button
                  type="submit"
                  class="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
