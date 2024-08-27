import React from "react";
import { Link } from "react-router-dom";

const KnowMore = () => {
  return (
    <div className="know-more-page">
      <div className="job-header">
        <h1>Backend Developer</h1>
        <div className="company-info">
          <img
            src="data:image/jpeg;base64,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"
            alt="Innovate Inc. Logo"
          />
          <div>
            <h3>Innovate Inc.</h3>
            <p>San Francisco, CA</p>
            <p>Part-Time</p>
          </div>
        </div>
      </div>

      <div className="job-details">
        <h2>Job Description</h2>
        <p>
          As a Backend Developer, you will play a crucial role in designing,
          developing, and maintaining the server-side logic and databases that
          power our web and mobile applications. You will work closely with
          front-end developers, product managers, and other stakeholders to
          ensure the delivery of high-quality, scalable, and secure software
          solutions.
        </p>

        <h2>Responsibilities</h2>
        <ul>
          <li>Develop and maintain server-side applications and APIs.</li>
          <li>
            Design and manage databases, ensuring efficient data handling.
          </li>
          <li>
            Collaborate with front-end developers to integrate user-facing
            elements.
          </li>
          <li>Implement security and data protection measures.</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>
            Proficiency in backend technologies (e.g., Node.js, Python, Ruby,
            Java).
          </li>
          <li>Experience with database management (SQL, NoSQL).</li>
          <li>Knowledge of API development and integration.</li>
          <li>Understanding of security best practices.</li>
          <li>
            Strong problem-solving skills and ability to work collaboratively.
          </li>
        </ul>

        <div className="apply-section">
          <button className="apply-btn">
            <Link to={`/apply/2`}> Apply Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
