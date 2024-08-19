import React from "react";

const HelpCentre = () => {
  return (
    <div className="help-centre">
      <h1>Help Centre</h1>
      <p>
        Welcome to the HireSphere Help Centre. Here you can find answers to
        frequently asked questions and get support for any issues you may
        encounter while using our platform.
      </p>

      <section>
        <h2>Frequently Asked Questions</h2>

        <div className="faq">
          <h3>How do I create an account?</h3>
          <p>
            To create an account on HireSphere, click on the "Sign Up" button on
            the top right corner of the homepage. Fill in the required
            information, such as your name, email address, and password. Once
            completed, click "Register" to create your account.
          </p>
        </div>

        <div className="faq">
          <h3>How do I reset my password?</h3>
          <p>
            If you've forgotten your password, click on the "Forgot Password?"
            link on the login page. Enter your registered email address, and
            we'll send you a link to reset your password.
          </p>
        </div>

        <div className="faq">
          <h3>How do I apply for a job?</h3>
          <p>
            Once you find a job listing that interests you, click on the job
            title to view the details. If you meet the qualifications, click the
            "Apply" button, fill out the required fields, and submit your
            application.
          </p>
        </div>

        <div className="faq">
          <h3>Can I edit my profile information?</h3>
          <p>
            Yes, you can update your profile information at any time. Simply log
            in to your account, go to your profile settings, and make the
            necessary changes. Don't forget to save your updates before exiting
            the page.
          </p>
        </div>
      </section>

      <section>
        <h2>Technical Support</h2>
        <p>
          If you are experiencing technical issues, please try the following
          troubleshooting steps:
        </p>
        <ul>
          <li>Ensure that your internet connection is stable.</li>
          <li>Clear your browser cache and cookies.</li>
          <li>Try accessing the site using a different browser or device.</li>
        </ul>
        <p>
          If the issue persists, please contact our technical support team by
          emailing us at
          <a href="mailto:support@hiresphere.com">support@hiresphere.com</a>.
          Please provide a detailed description of the issue, including any
          error messages, and we'll get back to you as soon as possible.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any other questions or need further assistance, feel free
          to reach out to us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:support@hiresphere.com">support@hiresphere.com</a>
          </li>
          <li>Phone: +1-800-HIRE-SPH (1-800-447-3774)</li>
          <li>
            Live Chat: Available from 9:00 AM to 6:00 PM EST, Monday through
            Friday
          </li>
        </ul>
      </section>

      <section>
        <h2>Community Forums</h2>
        <p>
          Join our community forums to connect with other users, share tips, and
          discuss job search strategies. Our forums are moderated to ensure a
          positive and helpful environment for all users. Visit the forums by
          clicking
          <a href="/community-forums">here</a>.
        </p>
      </section>

      <section>
        <h2>Feedback</h2>
        <p>
          We value your feedback and are constantly looking to improve our
          platform. If you have suggestions or comments, please send them to{" "}
          <a href="mailto:feedback@hiresphere.com">feedback@hiresphere.com</a>.
        </p>
      </section>
    </div>
  );
};

export default HelpCentre;
