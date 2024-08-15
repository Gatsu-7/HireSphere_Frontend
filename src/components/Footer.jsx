import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            HireSphere is dedicated to connecting top talent with the best job
            opportunities. Our mission is to streamline the hiring process and
            make job searching a seamless experience for everyone.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Information</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@hiresphere.com">support@hiresphere.com</a>
          </p>
          <p>
            Phone: <a href="tel:+916945871236">+916945871236</a>
          </p>
          <p>
            Address: 1234 Talent Street, Suite 100, Metropolis, ST 54321, USA
          </p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                LinkedIn <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                Twitter <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-links"
              >
                Facebook <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter Signup</h2>
          <p>
            Stay updated with the latest job opportunities and company news.{" "}
            <a href="#">Sign up for our newsletter</a>.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 HireSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
