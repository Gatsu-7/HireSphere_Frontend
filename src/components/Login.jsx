import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Add useNavigate hook for redirection

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
      const response = await fetch(
        "https://hirespere-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Store the token in localStorage
        localStorage.setItem("authToken", data.token); // Assume the token is in data.token

        alert("Login successful!");
        // Redirect to a route where the Header component is rendered
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Login to your Account</h1>
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
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <a className="forgot-password" href="#">
            Forgot your password?
          </a>
          <input
            className="submit-btn login-btn"
            type="submit"
            value="Log in"
          />
          <h5 className="terms">By continuing, you agree to HireSphere's</h5>
          <h5 className="terms-details">
            <Link to="/terms"> Terms of Service </Link>
            <span>
              and acknowledge you've read our
              <Link to="/privacy"> Privacy Policy </Link>
              Notice at collection.
            </span>
          </h5>
        </form>
        <Link className="register-link" to="/signin">
          Don't Have an Account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
