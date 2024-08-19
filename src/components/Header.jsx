import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/file.png";
const Header = () => {
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
        />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/joblistings">Job Listings</Link>
        <Link to="/about">About Us</Link>
        <Link to="/signin" className="sign-in-button">
          Sign In
        </Link>
        {/* <Link to="/blog">
          <ImBlog />
        </Link>
        <Link to="/contact">
          <MdAttachEmail />
        </Link> */}
      </div>
    </nav>
  );
};

export default Header;
