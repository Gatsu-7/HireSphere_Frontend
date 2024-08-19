import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "If I could give 11 stars, I would.",
    author: "Andre, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    text: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you saved me 100 hours.",
    author: "Jeremy, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    text: "Took some convincing, but now that we're on COMPANY, we're never going back.",
    author: "Andy, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1542570106-c3d4aeb5c19c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    text: "It's simply amazing. The best decision we ever made.",
    author: "Fernando, CEO at COMPANY",
    image:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    text: "The service exceeded our expectations in every way.",
    author: "Kevin, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    text: "A game changer for our business. Highly recommend!",
    author: "Clara, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    text: "Our productivity has skyrocketed since using this service.",
    author: "Katrina, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    text: "The feedback and support have been invaluable.",
    author: "Michael, CEO at COMPANY",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    text: "Exceptional quality and customer service. We couldn’t be happier.",
    author: "Emily, CEO at COMPANY",
    image:
      "https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    text: "HireSphere transformed our hiring process with their seamless platform.",
    author: "Jessica, HR Manager at TECHINC",
    image:
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    text: "The feedback system is incredibly detailed and helpful for improvement.",
    author: "Ragna, Founder of INNOVATE",
    image:
      "https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    text: "We saw a significant boost in candidate quality thanks to HireSphere.",
    author: "Maxine, Talent Acquisition Lead at GLOBE",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    text: "Exceptional service and user-friendly interface. Highly recommended.",
    author: "David, Director at BIZCORP",
    image:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    text: "The structured feedback has been invaluable for our team’s growth.",
    author: "Sara, CEO at NEXTGEN",
    image:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    text: "HireSphere’s platform is a game-changer for modern recruitment.",
    author: "John, Recruitment Head at STRATEX",
    image:
      "https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    text: "We appreciate the thorough feedback provided after each interview.",
    author: "Nina, Chief People Officer at ECOMMERCE",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    text: "An innovative solution that has streamlined our hiring and feedback processes.",
    author: "Tom, VP of HR at DIGITALCO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      //   console.log("Previous Index:", newIndex);
      return newIndex;
    });
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => {
      const newIndex =
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      //   console.log("Next Index:", newIndex);
      return newIndex;
    });
  };

  return (
    <>
      <div className="container">
        <h1>Our Testimonials</h1>

        <div className="testimonials">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === activeIndex ? "active" : ""
                } ${
                  index === activeIndex - 1 ||
                  (activeIndex === 0 && index === testimonials.length - 1)
                    ? "prev"
                    : ""
                }
            ${
              index === activeIndex + 1 ||
              (activeIndex === testimonials.length - 1 && index === 0)
                ? "next"
                : ""
            }`}
              >
                <img src={testimonial.image} alt={testimonial.author} />
                <p>"{testimonial.text}"</p>
                <span>- {testimonial.author}</span>
              </div>
            ))}
          </div>
          <div className="arrows">
            <button className="prev" onClick={prevTestimonial}>
              &larr;
            </button>
            <button className="next" onClick={nextTestimonial}>
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
