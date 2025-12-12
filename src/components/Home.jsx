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
import Hero from "./Hero";

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getAllContentApi();
        const data = res.data.data?.[0];
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
      {/* HERO */}
      {/* <Herobanner
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        desc={content.heroDesc}
        cta={content.heroCta}
        image={content.heroImage}
      /> */}
      <Hero />
      {/* BOOKING */}
      <TourBooking />

      {/* CATEGORIES */}
      <CategoriesSection
        title={content.categoriesTitle}
        subtitle={content.categoriesSubtitle}
      />

      {/* VIDEOS */}
      <PackageVideoCarousel
        limit={6}
        title={content.videoTitle}
        subtitle={content.videoSubtitle}
      />

      {/* PACKAGES */}
      <PackagesSection
        title={content.packagesTitle}
        subtitle={content.packagesSubtitle}
        limit={6}
      />

      {/* GALLERY */}
      <Gallery
        galleryTitle={content.galleryTitle}
        galleryDesc={content.galleryDesc}
        limit={6}
      />

      {/* PARTNER */}
      <Partner
        partnerTitle={content.partnerTitle}
        partnerSubtitle={content.partnerSubtitle}
      />
    </>
  );
}

export default Home;
