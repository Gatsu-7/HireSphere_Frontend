import React from "react";

// Sample icons, replace with actual paths or icons
import review from "../assets/paid services/review.png";
import MockInterviewsIcon from "../assets/paid services/interview.png";
import LinkedInMakeoverIcon from "../assets/paid services/id-card.png";

const services = [
  {
    icon: review,
    title: "Resume Review",
    description: "Get your resume reviewed from our Industry Experts",
    link: "#",
  },
  {
    icon: MockInterviewsIcon,
    title: "Mock Interviews",
    description:
      "Setup mock interviews with our industry experts and gain structured feedback",
    link: "#",
  },
  {
    icon: LinkedInMakeoverIcon,
    title: "LinkedIn Makeover",
    description:
      "Give your LinkedIn a professional makeover to drive more profile visits",
    link: "#",
  },
];

const PaidServices = () => {
  return (
    <>
      <section className="paid-services-container">
        <section className="paid-services">
          <h2 className="section-title">Paid Services</h2>
          <div className="services-container">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {/* <a href={service.link} className="service-link">
                  Find out more <span>&#8594;</span>
                </a> */}
              </div>
            ))}
          </div>
          {/* <a href="#" className="view-all">
            View all
          </a> */}
        </section>
      </section>
    </>
  );
};

export default PaidServices;
