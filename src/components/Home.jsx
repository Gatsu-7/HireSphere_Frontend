import React from "react";
import img from "../assets/bg22.png";
import { motion } from "framer-motion";
const Home = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="home">
      <div className="left">
        <div>
          <motion.h1 {...options} transition={{ delay: 0.1, duration: 0.8 }}>
            Land Your Dream Job Today
          </motion.h1>
          <motion.p {...options} transition={{ delay: 0.2, duration: 0.8 }}>
            Connecting Talent, Igniting Futures
          </motion.p>
        </div>
        <div>
          <motion.button
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="search-button"
          >
            Search
          </motion.button>
        </div>
      </div>
      <div className="right">
        <img src={img}></img>
      </div>
    </section>
  );
};

export default Home;
