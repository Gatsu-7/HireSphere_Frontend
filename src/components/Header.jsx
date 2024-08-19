import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/file.png";
const Header = () => {
  const navigate = useNavigate();

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
          height="70px"
          width="70px"
          onClick={handleClick}
        />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/joblistings">Job Listings</Link>
        <Link to="/about">About Us</Link>
        <Link to="/signin" className="sign-in-button">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
