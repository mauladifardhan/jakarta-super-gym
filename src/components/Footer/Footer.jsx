import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo_things.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <span className="footer-name">Created By mauladifardhan</span>
      </div>
      <div className="blur blur-f-r"></div>
      <div className="blur blur-f-l"></div>
    </div>
  );
};

export default Footer;
