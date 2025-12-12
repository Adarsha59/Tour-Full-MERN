import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import Logout from "../pages/Logout";
import ThemeToggle from "../components/ThemeToggle";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isLoggedIn] = useAuth();
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/packages?search=${encodeURIComponent(query)}`);
    setQuery("");
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "Video", path: "/video" },
    { name: "Partner", path: "/partner" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "bg-gray-900/95 dark:bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-gray-900/50 dark:bg-white/50 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-extrabold tracking-tight text-primary select-none hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src="/dist/img/logo.svg"
              alt="Top of the World"
              className="h-9 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-base md:text-lg leading-none font-black">
                Top of the World
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Adventure Tours
              </span>
            </div>
          </Link>

          {/* CENTER NAV - DESKTOP */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 dark:text-gray-700 hover:text-primary dark:hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">
            {/* SEARCH BAR - DESKTOP */}
            <form
              onSubmit={handleSearch}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 dark:border-gray-300 bg-gray-800/50 dark:bg-gray-100/50 hover:border-primary/30 focus-within:border-primary focus-within:bg-gray-800 dark:focus-within:bg-gray-100 transition-all duration-200"
            >
              <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search trips..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-white dark:text-gray-900 placeholder-gray-500 dark:placeholder-gray-600 w-40"
              />
            </form>

            {/* THEME TOGGLE */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* LOGOUT */}
            {isLoggedIn && (
              <div className="hidden sm:block">
                <Logout />
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300 dark:text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 dark:text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 dark:border-gray-200 bg-gray-900/95 dark:bg-white/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {/* MOBILE SEARCH */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-700 dark:border-gray-300 bg-gray-800/50 dark:bg-gray-100/50"
            >
              <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search trips..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none text-sm text-white dark:text-gray-900 placeholder-gray-500 dark:placeholder-gray-600 w-full"
              />
            </form>

            {/* MOBILE NAV ITEMS */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-300 dark:text-gray-700 hover:bg-primary/10 dark:hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="border-t border-gray-800 dark:border-gray-200 pt-4 space-y-3">
              {isLoggedIn && (
                <div className="px-2">
                  <Logout />
                </div>
              )}
              <div className="px-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
