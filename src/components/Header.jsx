import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo3.jpeg";

const Header = () => {
  const navigate = useNavigate();

  // Authentication state to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (you can modify this logic based on your auth mechanism)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove token or any authentication data
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home or login page after logout
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={logo}
          alt=""
          className="logo"
          height="60px"
          width="60px"
          onClick={handleClick}
        />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/joblistings">Internships</Link>
        <Link to="/about">About Us</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="sign-in-button">
            Log out
          </button>
        ) : (
          <Link to="/signin" className="sign-in-button">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
