import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

import LiquidBG from "../components/LiquidBG";

export default function ClientLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <LiquidBG /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
