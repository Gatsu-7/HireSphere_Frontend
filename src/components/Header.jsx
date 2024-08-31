import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "./Authcontext";
import logo from "../assets/logo3.jpeg";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // navigate("/"); // Redirect to home or login page after logout
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
          <button onClick={handleLogout} className="log-out-button">
            Log Out
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
