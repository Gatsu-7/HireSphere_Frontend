import React from "react";
// import "./ScrollSection.scss";
import job from "../assets/job.png";
import feedback from "../assets/satisfaction.png";
import opportunity from "../assets/job-opportunities.png";
import experience from "../assets/experience.png";
import support from "../assets/help-desk.png";

const ScrollSection = () => {
  return (
    <div className="scroll-section">
      <h2 className="heading">Why Choose HireSphere?</h2>
      <div className="text-content">
        <div className="list-items">
          <div className="left-text">
            <h3>Tailored Job Matching</h3>
            <ul>
              <li>We understand your unique skills and aspirations.</li>
              <li>
                HireSphere uses advanced algorithms to match you with jobs that
                align with your career goals.
              </li>
              <li>Set your job search criteria and salary expectations.</li>
            </ul>
          </div>

          <img src={job} alt="" height="300px" />
        </div>
        <div className="list-items">
          <div className="left-text">
            <h3>Comprehensive Feedback</h3>
            <ul>
              <li>
                Receive detailed feedback after every interview to help you
                continually improve and stand out in the job market.
              </li>
            </ul>
          </div>
          <img src={feedback} alt="" height="230px" />
        </div>
        <div className="list-items">
          <div className="left-text">
            <h3>Wide Range of Opportunities</h3>
            <ul>
              <li>
                HireSphere connects you with top companies across various
                industries.
              </li>
            </ul>
          </div>
          <img src={opportunity} alt="" height="250px" />
        </div>
        <div className="list-items">
          <div className="left-text">
            <h3>Seamless Experience</h3>
            <ul>
              <li>
                Our user-friendly platform is designed to make your job search
                smooth and efficient.
              </li>
              <li>Focus on what matters most—landing your dream job.</li>
            </ul>
          </div>
          <img src={experience} alt="" height="250px" />
        </div>
        <div className="list-items">
          <div className="left-text">
            <h3>Support Every Step of the Way</h3>
            <ul>
              <li>
                From resume tips to interview preparation, HireSphere provides
                resources and guidance to help you succeed.
              </li>
            </ul>
          </div>
          <img src={support} alt="" height="230px" />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
