import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await axios.post(
        "https://84574316.sibforms.com/serve/MUIEAPO4ndBpCiDNaGmsPq_U3W9ZwOoMaRU4ctW1MD9F6VBBqJdf9yTDl_vdH5jwrFOTt3t9mnvN1DxIWkIL-gtqnATF2H97YLcRtkih9HiCMZb_JGjMzgZct6mou6UOXDPO5rWVsAi_zaPZMZbJwoWe2-A9XSdCAIfIcZB9E2kgMqCY3hXM5ATl2chAAA3qTjvuZY_jdoGBkFXF",
        formData
      );

      // Handle successful form submission
      console.log("Form submitted successfully");
      setSubmitted(true);
    } catch (error) {
      // Handle form submission error
      console.error("Form submission failed", error);
      setSubmitted(true);
    }
  };

  return (
    <footer className="footer">
      <div>
        {submitted ? (
          <div className="thank-you-message">Thank you for subscribing!</div>
        ) : (
          <div>
            <h2>Subscribe to our newsletter</h2>
            <form className="email-subscription" onSubmit={handleSubmit}>
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        )}

        <div className="links">
          <a
            href="https://www.linkedin.com/in/atef-moazzen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              // size="2x"
            />
          </a>

          <a
            href="https://twitter.com/TheTesterCorner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/portfolio">About Me</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
