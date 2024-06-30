import React from "react";
import Herobanner from "./herobanner";
import TourBooking from "../pages/Booking";
import Gallery from "../pages/Gallery";
import Patner from "../pages/Patner";
import Blog from "../pages/Blog";
function Home() {
  return (
    <>
      <Herobanner />
      <TourBooking />
      <Gallery />
      <Patner />
      <Blog />
    </>
  );
}

export default Home;
