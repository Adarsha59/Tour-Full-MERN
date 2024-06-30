// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">Admin Dashboard</div>
      <nav className="mt-10 flex-1">
        <ul>
          <li className="mb-4">
            <Link
              to="/admin/places"
              className="px-4 py-2 block hover:bg-gray-700"
            >
              Places
            </Link>
          </li>
          <li>
            <Link
              to="/admin/blogs"
              className="px-4 py-2 block hover:bg-gray-700"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
