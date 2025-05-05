// /context/AuthContext.js

import { createContext, useContext, useState, useEffect } from "react";
import { getAccessToken } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getAccessToken();
    if (token) setUser({ username: "a_rehman_k" }); // Replace with JWT decoding logic
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
