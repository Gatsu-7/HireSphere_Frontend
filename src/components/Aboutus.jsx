import React from "react";
import me from "../assets/Team-Members/Founder.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About HireSphere</h1>
        <div>
          <p>Empowering Connections, Shaping Futures</p>
        </div>
      </header>
      <section className="about-us-story">
        <h2>Our Story</h2>
        <p>
          HireSphere was founded in 2015 with a simple yet profound mission: to
          transform the way companies and talent connect. Our journey began when
          our founder, frustrated with the inefficiencies in traditional hiring
          processes, envisioned a platform that would simplify and humanize
          recruitment. Today, HireSphere stands as a trusted partner for
          thousands of companies and job seekers worldwide, helping to create
          meaningful connections that drive success.
        </p>
        <p>
          Over the years, we’ve grown from a small startup to a global player in
          the recruitment industry. Our platform has evolved, incorporating the
          latest in AI-driven technology to provide smarter, faster, and more
          personalized hiring solutions. But our core philosophy remains the
          same: to empower individuals and organizations to reach their full
          potential.
        </p>
      </section>
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission at HireSphere is to bridge the gap between talent and
          opportunity. We aim to make the hiring process more transparent,
          efficient, and accessible, ensuring that every candidate finds the
          right role and every employer finds the right candidate. We believe in
          the power of people and are committed to supporting them at every step
          of their professional journey.
        </p>
      </section>
      <section className="about-us-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a future where the job market is more inclusive and
          dynamic, where every individual has the opportunity to pursue their
          passion and every organization can build teams that drive innovation
          and growth. At HireSphere, we are dedicated to creating a platform
          that not only connects talent with opportunity but also fosters a
          community of lifelong learners and leaders.
        </p>
      </section>
      <section className="about-us-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We operate with transparency and uphold
            the highest ethical standards in all our interactions.
          </li>
          <li>
            <strong>Innovation:</strong> We are continuously evolving,
            leveraging cutting-edge technology to enhance our services and
            deliver exceptional results.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for excellence in everything
            we do, from our platform’s performance to the customer service we
            provide.
          </li>
          <li>
            <strong>Empathy:</strong> We listen to and understand the needs of
            our users, ensuring that our solutions are always user-centric.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe that great results come
            from teamwork, both within our organization and in our partnerships
            with clients and candidates.
          </li>
          <li>
            <strong>Diversity:</strong> We value and celebrate diverse
            perspectives, backgrounds, and experiences, recognizing that they
            make us stronger.
          </li>
        </ul>
      </section>
      <section className="about-us-team">
        <h2>Meet Our Team</h2>
        <p>
          Behind HireSphere is a team of passionate professionals dedicated to
          making a difference in the world of recruitment. Our team members come
          from diverse backgrounds, bringing a wealth of knowledge and
          experience to the table. We are driven by a shared commitment to
          excellence and a belief in the power of human potential.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={me} alt="Team Member 1" />
            <h3>Satyam Satpathy</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member 2"
            />
            <h3>James Bond</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member 3"
            />
            <h3>Jason Bourne</h3>
            <p>Head of Operations</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className="about-us-impact">
        <h2>Our Impact</h2>
        <p>
          Since our inception, HireSphere has helped thousands of individuals
          find fulfilling careers and hundreds of companies build
          high-performing teams. We are proud of the positive impact we’ve had
          on the lives of so many people, and we remain committed to expanding
          our reach and improving our services.
        </p>
        <p>
          Our platform has enabled faster and more accurate hiring, reducing
          time to fill positions and increasing employee retention rates. We’re
          excited to continue this journey, driving innovation in the
          recruitment space and making a real difference in the job market.
        </p>
      </section>
      <section className="about-us-future">
        <h2>The Future of HireSphere</h2>
        <p>
          Looking ahead, HireSphere is poised for continued growth and
          innovation. We are constantly exploring new technologies and
          methodologies to improve our platform and services. Our focus remains
          on delivering value to our users by anticipating their needs and
          exceeding their expectations.
        </p>
        <p>
          We are excited about the future and the possibilities it holds. As we
          continue to grow, we remain dedicated to our mission of connecting
          talent with opportunity, empowering individuals, and helping
          organizations thrive.
        </p>
      </section>
      <section className="about-us-contact">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Whether you’re a job seeker looking
          for your next opportunity, an employer searching for top talent, or
          just someone interested in learning more about HireSphere, we’re here
          to help.
        </p>
        <p>
          Please <a href="/contact">get in touch with us</a>, and a member of
          our team will reach out to assist you.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
