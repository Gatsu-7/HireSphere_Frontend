// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem("authToken")
//   );

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated when the component mounts
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("authToken", "your_token"); // Set token
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
