import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import Logout from "../pages/Logout";
import ThemeToggle from "../components/ThemeToggle";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isLoggedIn] = useAuth();
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/packages?search=${encodeURIComponent(query)}`);
    setQuery("");
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        // sticky ? "shadow bg-black dark:bg-white" : "bg-transparent"
        sticky ? "shadow dark:bg-neutral-200 bg-neutral-500" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LEFT LOGO */}
          <Link
            to="/"
            className="text-xl font-extrabold tracking-wide text-primary"
          >
            adarsha-tour.com
          </Link>

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Packages", path: "/packages" },
              { name: "Gallery", path: "/gallery" },
              { name: "Video", path: "/video" },
              { name: "Partner", path: "/partner" },
              // { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative transition-all duration-300 hover:text-primary group hover:-translate-y-[8px]  hover:font-extrabold"
              >
                {/* Text */}
                <span className="relative z-10">{item.name}</span>

                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            {/* SEARCH BAR */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center border rounded-full px-3 py-1 bg-white dark:bg-gray-800"
            >
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search trips"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-black dark:text-white w-36"
              />
            </form>

            {isLoggedIn && <Logout />}

            <ThemeToggle />

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden p-2 rounded flex items-center justify-center"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* ✅ MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full z-40 px-6">
          <div className="rounded-2xl shadow-xl bg-neutral-500 dark:bg-neutral-200 py-8">
            <div className="flex flex-col items-center gap-6 text-base font-semibold">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Packages", path: "/packages" },
                { name: "Gallery", path: "/gallery" },
                { name: "Video", path: "/video" },
                { name: "Partner", path: "/partner" },
                // { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative transition-all duration-300 hover:text-primary hover:scale-110 font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* ✅ MOBILE SEARCH */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 border rounded-full px-4 py-2 bg-white dark:bg-gray-800 mt-8 mx-6"
            >
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search trips"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-black dark:text-white w-full"
              />
            </form>

            {isLoggedIn && (
              <div className="mt-6 flex justify-center">
                <Logout />
              </div>
            )}

            <div className="mt-6 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
