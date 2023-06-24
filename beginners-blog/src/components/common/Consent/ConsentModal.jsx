import React, { useState, useEffect } from "react";
import "./ConsentModal.css"; // Importing the CSS file for styling

// Component for displaying a consent modal for privacy agreement
const ConsentModal = () => {
  const [showModal, setShowModal] = useState(false);

  const getCookie = (name) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) return match[2];
    return null;
  };

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  useEffect(() => {
    if (!getCookie("consent")) {
      setShowModal(true);
    }
  }, []);

  const handleConsent = () => {
    setCookie("consent", "true", 365);
    setShowModal(false);
  };

  return showModal ? (
    <div className="consent-modal">
      <p>
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <button onClick={handleConsent}>I Agree</button>
    </div>
  ) : null;
};

export default ConsentModal;
