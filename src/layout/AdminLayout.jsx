import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiImage,
  FiEdit,
  FiSettings,
  FiMenu,
  FiVideo,
} from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle";
import { FileChartColumnIncreasing } from "lucide-react";

export default function AdminLayout() {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Dashboard", icon: <FiHome />, path: "/admin/dashboard" },
    { name: "Users", icon: <FiUsers />, path: "/admin/users" },
    { name: "Blog", icon: <FiEdit />, path: "/admin/blog" },
    { name: "Gallery", icon: <FiImage />, path: "/admin/gallery" },
    {
      name: "Package Categories",
      icon: <FileChartColumnIncreasing />,
      path: "/admin/categories",
    },
    {
      name: "Package Videos",
      icon: <FiVideo />,
      path: "/admin/videos",
    },
    { name: "Website Content", icon: <FiEdit />, path: "/admin/website" },
    { name: "Settings", icon: <FiSettings />, path: "/admin/settings" },
    { name: "Packages", icon: <FiEdit />, path: "/admin/packages" },
  ];

  return (
    <div className="flex h-screen bg-[#f2f2f2] dark:bg-[#1a1a1a]">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-[#ffffff] dark:bg-[#242424] shadow p-4 transition-all`}
      >
        {/* Logo and Toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`${
              open ? "block" : "hidden"
            } text-xl font-bold text-[#1a1a1a] dark:text-[#e6e6e6`}
          >
            Admin Panel
          </h1>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 bg-[#e0e0e0] dark:bg-[#333333] rounded text-[#1a1a1a] dark:text-[#e6e6e6]"
          >
            <FiMenu />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {menu.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded 
                 text-[#1a1a1a] dark:text-[#e6e6e6] 
                 hover:bg-[#e7e7e7] dark:hover:bg-[#333333]
                 ${
                   isActive
                     ? "bg-primary text-black"
                     : "bg-[#f5f5f5] dark:bg-[#2a2a2a]"
                 }`
              }
            >
              <span className="text-xl">{m.icon}</span>
              <span className={`${open ? "block" : "hidden"} text-md`}>
                {m.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex justify-center mt-6  dark:text-white text-black ">
          <ThemeToggle />
        </div>
      </aside>

      {/* Right side content */}
      <main className="flex-grow flex flex-col overflow-y-auto">
        {/* Top bar */}
        <div className="bg-[#ffffff] dark:bg-[#242424] shadow p-4 flex justify-end">
          <span className="text-md font-semibold text-[#1a1a1a] dark:text-[#e6e6e6]">
            Admin User
          </span>
        </div>

        {/* Page content */}
        <div className="p-6 text-[#1a1a1a] dark:text-[#e6e6e6]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
