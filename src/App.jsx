import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
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
import toast, { Toaster } from "react-hot-toast";
import Auth, { AuthUser } from "./context/Auth";
import AdminUser from "./pages/AdminUser";
import AdminBlog from "./pages/AdminBlog";
import DashboardHome from "./components/DashboardHome";
import AdminLayout from "./layout/AdminLayout";
import ClientLayout from "./layout/ClientLayout";
import WebsiteList from "./pages/admin/website/WebsiteList";
import { ThemeProvider } from "./context/ThemeContext";
import WebsiteEdit from "./pages/admin/website/WebsiteEdit";
import WebsiteCreate from "./pages/admin/website/WebsiteCreate";
import PackageList from "./pages/admin/packages/PackageList";
import PackageCreate from "./pages/admin/packages/PackageCreate";
import PackageEdit from "./pages/admin/packages/PackageEdit";
import Packages from "./pages/packages";
import PackageDetail from "./pages/PackageDetail";
import PackageCategoryAdmin from "./pages/admin/categories/PackageCategoryAdmin";
import CategoryPackages from "./pages/CategoryPackages";
import PackageVideoAdmin from "./pages/admin/video/VideoAdmin";
import PackageVideoCarousel from "./components/VideoCarousel";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Auth>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<ClientLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/video" element={<PackageVideoCarousel />} />
                <Route path="/partner" element={<Partner />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:id" element={<PackageDetail />} />
                <Route path="/category/:id" element={<CategoryPackages />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/blog/:title" element={<Blogpage />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<DashboardHome />} />
                <Route path="users" element={<AdminUser />} />
                <Route path="video" element={<AdminUser />} />
                <Route path="blog" element={<AdminBlog />} />
                <Route path="contacts" element={<Blogs />} />
                <Route path="categories" element={<PackageCategoryAdmin />} />
                <Route path="videos" element={<PackageVideoAdmin />} />
                <Route path="website" element={<WebsiteList />} />
                <Route path="website/create" element={<WebsiteCreate />} />
                <Route path="website/edit/:id" element={<WebsiteEdit />} />
                <Route path="packages" element={<PackageList />} />
                <Route path="packages/create" element={<PackageCreate />} />
                <Route path="packages/edit/:id" element={<PackageEdit />} />
              </Route>

              {/* <Route path="/" element={<Buy />} /> */}
            </Routes>
            <Toaster />
          </BrowserRouter>
        </ThemeProvider>
      </Auth>
    </>
  );
}
