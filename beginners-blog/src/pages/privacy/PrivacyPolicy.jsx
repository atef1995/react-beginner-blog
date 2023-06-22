import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Home/Footer";
import "./index.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <h1>Privacy Policy</h1>
      <p>
        (TheTesterCorner.com) is committed to protecting your personal data. The
        personal data we collect depends on the context of your interactions
        with us and the Website, the choices you make and the products and
        features you use.
      </p>
      <h2>How We Use Your Personal Data</h2>
      <p>
        We use your personal data to provide, improve, and develop our products
        and services, to communicate with you, to offer you targeted
        advertisements and services, and to protect us and our customers.
      </p>
      <h2>How We Share Your Personal Data</h2>
      <p>
        We do not share your personal data with third-party organizations. Your
        data is only used to improve your experience on our website and provide
        you with our services.
      </p>
      <h2>Your Rights and Choices</h2>
      <p>
        You have the right to access, rectification, or erasure of your personal
        data, and the right to restrict or object to our processing of your
        personal data. Please contact us if you have any questions.
      </p>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
