import React from "react";

const uiux = () => {
  return (
    <div className="know-more-page">
      <div className="job-header">
        <h1>UI/UX Designer</h1>
        <div className="company-info">
          <img
            src="data:image/jpeg;base64,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"
            alt="Creative Studio Logo"
          />
          <div>
            <h3>Creative Studio</h3>
            <p>Remote</p>
            <p>Contract</p>
          </div>
        </div>
      </div>

      <div className="job-details">
        <h2>Job Description</h2>
        <p>
          As a UI/UX Developer you will be responsible for creating intuitive
          and visually appealing user interfaces for our web and mobile
          applications. You will work closely with designers and developers to
          ensure a seamless and engaging user experience.
        </p>

        <h2>Responsibilities</h2>
        <ul>
          <li>
            Design and develop user-friendly interfaces for web and mobile
            applications.
          </li>
          <li>
            Collaborate with designers to translate UI/UX designs into
            interactive and responsive code.
          </li>
          <li>Optimize applications for maximum speed</li>
          <li>Optimize applications for maximum speed and scalability.</li>
          <li>
            Conduct user research and testing to gather feedback and improve
            designs.
          </li>
          <li>
            Ensure consistency in visual design and user experience across all
            platforms.
          </li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>
            Proficiency in front-end technologies (HTML, CSS, JavaScript).
          </li>
          <li>
            Experience with UI/UX design tools (e.g., Sketch, Figma, Adobe XD).
          </li>
          <li>Strong understanding of responsive design principles.</li>
          <li>Ability to translate design mockups into high-quality code.</li>
          <li>Experience with user testing and research.</li>
          <li>
            Attention to detail and a passion for creating great user
            experiences.
          </li>
        </ul>

        <div className="apply-section">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default uiux;
