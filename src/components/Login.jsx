import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Login to your Account</h1>
        <form>
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
            placeholder="Password"
            name="password"
          />
          <a className="forgot-password" href="#">
            Forgot your password?
          </a>
          <input
            className="submit-btn login-btn"
            type="submit"
            value="Log in"
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
