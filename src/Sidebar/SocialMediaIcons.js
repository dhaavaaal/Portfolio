import React from "react";
import "./SocialMediaIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { button } from "@mui/material";

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
