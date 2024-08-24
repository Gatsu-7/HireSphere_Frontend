// import React from "react";
// import { Link } from "react-router-dom";

// const PinterestRegister = () => {
//   return (
//     <div className="pinterest-register">
//       <div className="register-container">
//         <h1 className="register-title">Welcome To HireSphere</h1>
//         <h4 className="subtitle">Connecting Talent, Igniting Futures</h4>
//         <form method="post">
//           <h4 className="input-label">Email</h4>
//           <input
//             className="input-field"
//             type="text"
//             name="username"
//             placeholder="Email"
//           />
//           <h4 className="input-label">Password</h4>
//           <input
//             className="input-field"
//             type="password"
//             placeholder="Create a password"
//             name="password"
//           />
//           <h4 className="input-label">Birthdate</h4>
//           <input
//             className="input-field"
//             type="date"
//             placeholder="dd-mm-yyyy"
//             name="date"
//           />
//           <input
//             className="submit-btn continue-btn"
//             type="submit"
//             value="Continue"
//           />
//           {/* <h3 className="separator">OR</h3>
//           <input
//             className="submit-btn facebook-btn"
//             type="submit"
//             value="Continue with Facebook"
//           /> */}
//           <h5 className="terms">By continuing, you agree to HireSphere's</h5>
//           <h5 className="terms-details">
//             <Link to="/terms"> Terms of Service </Link>
//             <span>
//               and acknowledge you've read our
//               <Link to="/privacy"> Privacy Policy </Link> Notice at collection.
//             </span>
//           </h5>
//         </form>
//         <a className="login-link" href="/login">
//           Log in to Existing Account
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PinterestRegister;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const PinterestRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registration successful!");
        // Optionally redirect the user to the login page or another page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="pinterest-register">
      <div className="register-container">
        <h1 className="register-title">Welcome To HireSphere</h1>
        <h4 className="subtitle">Connecting Talent, Igniting Futures</h4>
        <form onSubmit={handleSubmit}>
          <h4 className="input-label">Email</h4>
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <h4 className="input-label">Password</h4>
          <input
            className="input-field"
            type="password"
            placeholder="Create a password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <h4 className="input-label">Birthdate</h4>
          <input
            className="input-field"
            type="date"
            placeholder="dd-mm-yyyy"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            className="submit-btn continue-btn"
            type="submit"
            value="Continue"
          />
          <h5 className="terms">By continuing, you agree to HireSphere's</h5>
          <h5 className="terms-details">
            <Link to="/terms"> Terms of Service </Link>
            <span>
              and acknowledge you've read our
              <Link to="/privacy"> Privacy Policy </Link> Notice at collection.
            </span>
          </h5>
        </form>
        <a className="login-link" href="/login">
          Log in to Existing Account
        </a>
      </div>
    </div>
  );
};

export default PinterestRegister;
