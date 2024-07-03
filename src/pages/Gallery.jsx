import React, { useEffect, useState } from "react";
import galleryData from "../../public/gallery.json";
import axios from "axios";
function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blog/");
        setGalleryData(response.data);
        console.log("Fetched data from server: ", response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        id="gallery"
        className=" dark:bg-slate-200 text-white pt-36 pb-32"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Gallery
              </h4>
              <h2 className="mb-4 text-3xl font-bold dark:text-black sm:text-4xl lg:text-5xl">
                Gallery Image
              </h2>
              <p className="text-md font-medium  dark:text-secondary md:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus porro consequuntur alias, commodi nemo enim aliquam
                ipsam obcaecati? Assumenda, ipsam?
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap px-4">
            {galleryData.map((gallery) => (
              <div className="w-1/2 p-4 md:w-1/4 " key={gallery.id}>
                <a href={gallery.image_link} target="_blank">
                  <div className="group relative overflow-hidden rounded-md shadow-md duration-500 hover:scale-95">
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 bg-opacity-90 text-center text-xs dark:text-white opacity-0 duration-500 hover:opacity-100 lg:text-xl">
                      <h1 className="tracking-wider">{gallery.title}</h1>
                    </div>
                    <div className="flex flex-wrap content-center">
                      <img
                        src={gallery.image_link}
                        alt="Raja Ampat"
                        width="w-full"
                        height="w-full"
                        className="bg-center duration-500 group-hover:scale-125"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
