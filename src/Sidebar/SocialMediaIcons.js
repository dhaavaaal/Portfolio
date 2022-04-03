import React from "react";
import "./SocialMediaIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  console.log("first");
  return (
    <div className="social-links">
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="icons" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} className="icons" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className="icons" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} className="icons" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
