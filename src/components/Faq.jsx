import React, { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqs = [
    {
      question: "What services does HireSphere offer?",
      answer:
        "HireSphere provides a range of services including resume reviews, mock interviews, LinkedIn makeovers, and personalized feedback to help you improve your job prospects.",
    },
    {
      question: "How can I get started with HireSphere?",
      answer:
        "Simply sign up on our website, choose the service you're interested in, and follow the steps to book a session or submit your resume for review.",
    },
    {
      question: "Who are the experts at HireSphere?",
      answer:
        "Our experts are industry professionals with years of experience in hiring, recruiting, and career coaching. They provide valuable insights to help you succeed in your job search.",
    },
    {
      question: "How long does it take to receive feedback?",
      answer:
        "Feedback times may vary depending on the service. Typically, you can expect to receive feedback within 3-5 business days after your session or submission.",
    },
    {
      question: " Can I request a specific industry expert for my session?",
      answer:
        "Yes, you can choose from our list of available experts based on your industry and needs when booking your session.",
    },
    {
      question:
        " Is there a refund policy if I’m not satisfied with the service?",
      answer:
        "We strive to provide the best possible service. If you're not satisfied, please contact our support team, and we'll work with you to address your concerns.",
    },
    {
      question: "How do mock interviews work?",
      answer:
        "Our mock interviews simulate real interview scenarios. You'll receive constructive feedback on your performance to help you improve your interview skills.",
    },
    {
      question: " Do you offer packages or discounts for multiple services?",
      answer:
        "Yes, we offer packages that bundle multiple services at a discounted rate. Check our pricing page for more details.",
    },
  ];

  return (
    <div className="faq-faq-container">
      <div className="faq-container">
        <div className="h2-div">
          <h2>Frequently Asked Questions</h2>
        </div>

        <p className="faq-para">
          The FAQs are created to provide an outline about the platform and ease
          out your doubts and clarify on the questions that may arise in your
          mind as a user before signing up with us.
        </p>
        <div className="faq">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={`faq-answer ${selected === i ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="anchor-view">
          <a href="#" className="view-all">
            View all
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default FAQ;
