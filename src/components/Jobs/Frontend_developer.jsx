import React from "react";
import { Link, useParams } from "react-router-dom";

import jobData from "../jobData";
const KnowMore = () => {
  const { jobId } = useParams();
  const job = jobData;
  return (
    <div className="know-more-page">
      <div className="job-header">
        <h1>Frontend Developer</h1>
        <div className="company-info">
          <img
            src="data:image/png;base64,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"
            alt="TechCorp Logo"
          />
          <div>
            <h3>TechCorp</h3>
            <p>New York, NY</p>
            <p>Full-Time</p>
          </div>
        </div>
      </div>

      <div className="job-details">
        <h2>Job Description</h2>
        <p>
          We are looking for a skilled Frontend Developer to join our team. You
          will be responsible for building the ‘client-side’ of our web
          applications. You should be able to translate our company and customer
          needs into functional and appealing interactive applications.
        </p>

        <h2>Responsibilities</h2>
        <ul>
          <li>
            Use markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintain and improve website</li>
          <li>Optimize applications for maximum speed</li>
          <li>
            Collaborate with back-end developers and web designers to improve
            usability
          </li>
          <li>
            Get feedback from, and build solutions for, users and customers
          </li>
          <li>Write functional requirement documents and guides</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Proven work experience as a Frontend Developer</li>
          <li>Experience with JavaScript, CSS, and React.js</li>
          <li>Familiarity with browser testing and debugging</li>
          <li>
            In-depth understanding of the entire web development process
            (design, development, and deployment)
          </li>
          <li>Understanding of layout aesthetics</li>
        </ul>

        <div className="apply-section">
          <button className="apply-btn">
            <Link to={`/apply/1`}> Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
