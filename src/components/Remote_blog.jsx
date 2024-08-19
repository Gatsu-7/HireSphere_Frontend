import React from "react";
import technology from "../assets/blog/technology.png";
import wellbeing from "../assets/blog/wellbeing.png";
import culture from "../assets/blog/culture.png";

const BlogPage = (onNewsletterClick) => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>
          The Future of Remote Work: Trends and Predictions for 2025 and Beyond
        </h1>
        <p className="date">August 13, 2024</p>
        <p className="intro">
          As remote work continues to evolve, it's crucial to stay ahead of the
          trends shaping the future. In this blog, we explore the key trends and
          predictions for remote work in 2025 and beyond, providing insights to
          help businesses and employees navigate the changing landscape.
        </p>
      </header>
      <section className="blog-content">
        <article className="blog-post">
          <h2>1. Increased Adoption of Hybrid Work Models</h2>
          <p>
            The hybrid work model is expected to become a dominant trend. This
            model combines the flexibility of remote work with the benefits of
            in-office collaboration. Companies will adopt more flexible
            policies, allowing employees to choose between working from home,
            the office, or a combination of both.
          </p>
          <img
            src="https://www.growthforce.com/hs-fs/hubfs/AdobeStock_339717328%20(1).jpeg?width=600&height=400&name=AdobeStock_339717328%20(1).jpeg"
            alt="Hybrid Work Model"
            className="blog-image"
          />
          <p>
            This approach aims to optimize productivity while enhancing employee
            satisfaction. It also provides a solution to the challenges faced by
            traditional remote and in-office setups, offering a balanced work
            environment.
          </p>
        </article>
        <article className="blog-post">
          <h2>2. Technological Advancements</h2>
          <p>
            Technology will play a pivotal role in shaping the future of remote
            work. Innovations such as AI-driven productivity tools, virtual
            reality meetings, and enhanced collaboration platforms will redefine
            how we work remotely.
          </p>
          <img
            src={technology}
            alt="Technological Advancements"
            className="blog-image"
          />
          <p>
            Companies will increasingly rely on advanced tools to facilitate
            seamless communication and collaboration, bridging the gap between
            remote and in-office teams. Expect more sophisticated solutions that
            enhance remote work experiences.
          </p>
        </article>
        <article className="blog-post">
          <h2>3. Focus on Employee Well-being</h2>
          <p>
            Employee well-being will become a central focus for organizations.
            This includes providing support for mental health, promoting
            work-life balance, and fostering a supportive remote work culture.
          </p>
          <img
            src={wellbeing}
            alt="Employee Well-being"
            className="blog-image"
          />
          <p>
            Companies will invest in resources and programs to help employees
            thrive in a remote work environment. Initiatives may include virtual
            wellness programs, mental health resources, and policies designed to
            support a healthy work-life balance.
          </p>
        </article>
        <article className="blog-post">
          <h2>4. Evolution of Company Culture</h2>
          <p>
            Building and maintaining a strong company culture will be crucial as
            remote work becomes more prevalent. Organizations will explore new
            ways to foster team cohesion and engagement.
          </p>
          <img src={culture} alt="Company Culture" className="blog-image" />
          <p>
            Expect innovative approaches to team-building, such as virtual
            social events, remote-friendly activities, and inclusive
            communication practices. These efforts will help maintain a sense of
            community and belonging among remote teams.
          </p>
        </article>
      </section>
      {/* <footer className="blog-footer">
        <p>
          Stay tuned for more insights and updates on the future of remote work.
          Subscribe to our newsletter for the latest trends and predictions.
        </p>
        <button className="subscribe-btn" onClick={() => onNewsletterClick}>
          Subscribe Now
        </button>
      </footer> */}
    </div>
  );
};

export default BlogPage;
