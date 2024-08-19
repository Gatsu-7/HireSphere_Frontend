import React from "react";
import { Link } from "react-router-dom";

const PinterestRegister = () => {
  return (
    <div className="pinterest-register">
      <div className="register-container">
        <h1 className="register-title">Welcome To HireSphere</h1>
        <h4 className="subtitle">Connect Talent, Igniting Futures</h4>
        <form method="post">
          <h4 className="input-label">Email</h4>
          <input
            className="input-field"
            type="text"
            name="username"
            placeholder="Email"
          />
          <h4 className="input-label">Password</h4>
          <input
            className="input-field"
            type="password"
            placeholder="Create a password"
            name="password"
          />
          <h4 className="input-label">Birthdate</h4>
          <input
            className="input-field"
            type="date"
            placeholder="dd-mm-yyyy"
            name="date"
          />
          <input
            className="submit-btn continue-btn"
            type="submit"
            value="Continue"
          />
          <h3 className="separator">OR</h3>
          <input
            className="submit-btn facebook-btn"
            type="submit"
            value="Continue with Facebook"
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
