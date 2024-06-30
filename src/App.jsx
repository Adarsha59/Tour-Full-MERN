import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Partner from "./pages/Patner";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogpage from "./pages/Blogpage";
import Dashboard from "./pages/Dashboard";
import Places from "./components/places";
import blogs from "./components/blogs";
import Blogs from "./components/blogs";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          <Route path="/admin" element={<Dashboard />}>
            <Route path="places" element={<Places />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>

          <Route path="/blog/:title" element={<Blogpage />} />

          {/* <Route path="/" element={<Buy />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
