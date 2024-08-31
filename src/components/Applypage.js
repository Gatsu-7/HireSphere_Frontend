import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jobData from "./jobData"; // Import your job data from wherever it's stored

const ApplyPage = () => {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id === parseInt(jobId));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  if (!job) {
    return <p>Job not found.</p>;
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("resume", formData.resume);
    data.append("coverLetter", formData.coverLetter);

    try {
      const response = await fetch(
        "https://hirespere-backend.onrender.com//api/apply",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <div className="apply-page">
      <h1>Apply for {job.title}</h1>
      <p>
        {job.company} | {job.location} | {job.type}
      </p>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your Full Name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="5"
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
