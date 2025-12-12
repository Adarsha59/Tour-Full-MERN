import React from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userdetails");
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
    >
      Logout
    </button>
  );
}

export default Logout;
