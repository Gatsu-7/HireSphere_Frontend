import React, { useState } from "react";

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    setSuccess(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {success ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>You've successfully signed up for our newsletter.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Sign Up for Our Newsletter</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
