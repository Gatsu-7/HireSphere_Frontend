import React from "react";
import { useParams } from "react-router-dom";
import jobData from "./jobData"; // Import your job data from wherever it's stored

const ApplyPage = () => {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="apply-page">
      <h1>Apply for {job.title}</h1>
      <p>
        {job.company} | {job.location} | {job.type}
      </p>
      <form className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your Full Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter a valid Email Address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea id="coverLetter" name="coverLetter" rows="5" />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
