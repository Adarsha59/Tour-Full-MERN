import React, { createContext, useContext, useState } from "react";

export const AuthUser = createContext();

function Auth({ children }) {
  const loginUser = localStorage.getItem("userdetails");

  let initial;
  if (loginUser) {
    try {
      initial = JSON.parse(loginUser);
    } catch (error) {
      console.log("Failed to get data", error);
      initial = undefined;
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(initial);

  return (
    <AuthUser.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </AuthUser.Provider>
  );
}

export default Auth;

export const useAuth = () => useContext(AuthUser);
