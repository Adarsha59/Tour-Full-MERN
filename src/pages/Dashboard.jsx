// AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const AdminLayout = () => {
  return (
    <div className="pt-36 pb-32  dark:bg-slate-200 text-white flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
