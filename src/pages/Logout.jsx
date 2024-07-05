import React from "react";
import { useAuth } from "../context/Auth";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userdetails");
  };
  return (
    <div>
      <button
        className="btn btn-outline btn-primary mx-3"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
  return (
    <div>
      <button className="btn btn-outline btn-primary mx-3">Login</button>
    </div>
  );
}

export default Logout;
