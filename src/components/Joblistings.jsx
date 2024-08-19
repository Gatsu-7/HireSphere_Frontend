import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    type: "Part-Time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Project Manager",
    company: "Business Solutions",
    location: "Chicago, IL",
    type: "Full-Time",
  },
  // Add more job listings as needed
];

const JobListingsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleJobTypeFilter = (event) => {
    setJobTypeFilter(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      job.type.toLowerCase().includes(jobTypeFilter.toLowerCase())
    );
  });

  return (
    <div className="job-listings-page">
      <header className="job-header">
        <h1>Job Listings</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filters">
          <select value={locationFilter} onChange={handleLocationFilter}>
            <option value="">All Locations</option>
            <option value="New York, NY">New York, NY</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
            <option value="Remote">Remote</option>
            <option value="Chicago, IL">Chicago, IL</option>
          </select>
          <select value={jobTypeFilter} onChange={handleJobTypeFilter}>
            <option value="">All Job Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </header>
      <main className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-item">
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.type}</p>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </main>
    </div>
  );
};

export default JobListingsPage;
