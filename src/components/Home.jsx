import React, { useEffect, useState } from "react";
import Herobanner from "./herobanner";
import TourBooking from "../pages/Booking";
import Gallery from "../pages/Gallery";
import Partner from "../pages/Patner";
import PackagesSection from "../pages/PackagesSection";

// import Blog from "../pages/Blog";
import { getAllContentApi } from "../api/websiteApi";
import CategoriesSection from "./CategoriesSection";
import PackageVideoCarousel from "./VideoCarousel";

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllContentApi();
        const data = res.data.data?.[0]; // Pick first valid content
        setContent(data);
      } catch (err) {
        console.error("Failed to load homepage content", err);
      }
    };
    fetch();
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading homepage...
      </div>
    );
  }

  return (
    <>
      <Herobanner
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        cta={content.heroCta}
        image={content.heroImage}
      />

      <TourBooking />

      <CategoriesSection />

      <PackageVideoCarousel limit={2} />

      <PackagesSection
        title={content.packagesTitle}
        subtitle={content.packagesSubtitle}
        limit={2}
      />
      <Gallery
        galleryTitle={content.galleryTitle}
        gallerySubtitle={content.gallerySubtitle}
        galleryDesc={content.galleryDesc}
        limit={3}
      />

      {/* <Blog /> */}
      <Partner />
    </>
  );
}

export default Home;
