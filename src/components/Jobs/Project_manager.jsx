import React from "react";

const KnowMore = () => {
  return (
    <div className="know-more-page">
      <div className="job-header">
        <h1>Project Manager</h1>
        <div className="company-info">
          <img
            src="data:image/jpeg;base64,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"
            alt="Business Solutions Logo"
          />
          <div>
            <h3>Business Solutions</h3>
            <p>Chicago, IL</p>
            <p>Full-Time</p>
          </div>
        </div>
      </div>

      <div className="job-details">
        <h2>Job Description</h2>
        <p>
          As a Project Manager you will oversee the planning, execution, and
          successful completion of projects. You will coordinate with
          cross-functional teams to ensure that projects are delivered on time,
          within scope, and within budget.
        </p>

        <h2>Responsibilities</h2>
        <ul>
          <li>
            Define project scope, goals, and deliverables in collaboration with
            stakeholders.
          </li>
          <li>
            Develop detailed project plans, including timelines, resource
            allocation, and budget management.
          </li>
          <li>
            Coordinate and lead cross-functional teams to execute project tasks.
          </li>
          <li>
            Monitor project progress, identify risks, and implement mitigation
            strategies.
          </li>
          <li>
            Communicate project status and updates to stakeholders and senior
            management.
          </li>
          <li>
            Ensure projects meet quality standards and are delivered on time
          </li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>
            Proven experience as a Project Manager in software development or a
            related field.
          </li>
          <li>
            Strong understanding of project management methodologies (e.g.,
            Agile, Scrum, Waterfall)..
          </li>
          <li>Excellent organizational and multitasking skills.</li>
          <li>Strong communication and leadership abilities.</li>
          <li>Ability to manage multiple projects simultaneously.</li>
          <li>
            Proficiency with project management tools (e.g., Jira, Trello,
            Microsoft Project).
          </li>
        </ul>

        <div className="apply-section">
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
