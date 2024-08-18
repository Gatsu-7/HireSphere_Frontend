import React from "react";
import img from "../assets/bg22.png";
import { motion, useScroll, useSpring } from "framer-motion";
import JobsByDomain from "./Jobsbydomain";
import ScrollSection from "./ScrollSection.jsx";
import ScrollingLogos from "./Scrollinglogos.jsx";
import PaidServices from "./Paidservices.jsx";
import Blogs from "./Blogs.jsx";
import FAQ from "./Faq.jsx";
import Testimonials from "./Testimonials..jsx";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
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
          <img src={img} alt="background" />
        </div>
      </section>
      <section className="jobs-section">
        <JobsByDomain />
      </section>
      <section className="scroll-section">
        <ScrollSection />
      </section>
      <section>
        <ScrollingLogos />
      </section>
      <section>
        <PaidServices />
      </section>
      <section>
        <Blogs />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
