import React from "react";
// import './JobsByDomain.css'; // Assuming you're using a separate CSS file

const JobsByDomain = () => {
  return (
    <section className="jobs-by-domain">
      <h2>Jobs by Domain</h2>
      <div className="domain-tags">
        <button className="domain-tag">Sales</button>
        <button className="domain-tag">
          Information Technology & Software Development
        </button>
        <button className="domain-tag">Business Development</button>
        <button className="domain-tag">Marketing and Communications</button>
        <button className="domain-tag">Accounts and Finance</button>
        <button className="domain-tag">Graphic Design</button>
        <button className="domain-tag">Data Analytics</button>
        <button className="domain-tag">Data Science</button>
        <button className="domain-tag">Artificial Intelligence</button>
        <button className="domain-tag">Design</button>
      </div>
      <a href="#" className="view-all">
        View all Domains
      </a>
    </section>
  );
};

export default JobsByDomain;
