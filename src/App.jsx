import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Patner from "./pages/Patner";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/patner" element={<Patner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Buy />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
