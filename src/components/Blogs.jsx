import React from "react";

const Blogs = () => {
  return (
    <section className="blogs">
      <h2>Blogs</h2>
      <div>
        <div className="content">
          <img
            src="https://www.growthforce.com/hs-fs/hubfs/AdobeStock_339717328%20(1).jpeg?width=600&height=400&name=AdobeStock_339717328%20(1).jpeg"
            alt=""
          />
          <button>3 min read</button>
          <h3>
            The Future of Remote Work: Trends and Predictions for 2025 and
            Beyond
          </h3>
          <p>
            Explore how remote work is evolving, what new technologies are
            shaping the....
          </p>
        </div>
        <div className="content">
          <img
            src="https://www.hireheroesusa.org/wp-content/uploads/2023/11/1-1.jpg"
            alt=""
          />
          <button>7 min read</button>
          <h3>
            Mastering the Art of the Job Interview: Tips from Industry Experts
          </h3>
          <p>
            Provide actionable advice on how to excel in job interviews,
            including insights from....
          </p>
        </div>
        <div className="content">
          <img
            src="https://nishvishah.com/wp-content/uploads/2024/01/personal-branding-linkedin-1.jpeg"
            alt=""
          />
          <button>6 min read</button>
          <h3>
            Building a Personal Brand on LinkedIn: Strategies to Stand Out in
            2024
          </h3>
          <p>
            Discuss the importance of personal branding on LinkedIn, offering
            strategies....
          </p>
        </div>
      </div>
      <div>
        <a href="#" className="view-all">
          View all
        </a>
      </div>
    </section>
  );
};

export default Blogs;
