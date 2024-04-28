// shareButtons component
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const ShareButtons = () => {
  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, `${platform}-share-dialog`, "width=800,height=600");
  };

  return (
    <div className="share-buttons">
      <button onClick={() => handleShare("facebook")} className="share-btn">
        <FontAwesomeIcon icon={faFacebook} />
      </button>
      <button onClick={() => handleShare("twitter")} className="share-btn">
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button onClick={() => handleShare("linkedin")} className="share-btn">
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
    </div>
  );
};

export default ShareButtons;
