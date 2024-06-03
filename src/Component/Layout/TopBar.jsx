import React from "react";
import "./TopBar.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF ,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaBars
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="left">
        <div className="phone">
          <FaPhoneAlt />
          <h3 className="topdetails">8888222992</h3>
        </div>
        <h2>|</h2>
        <div className="phone">
          <FaEnvelope />
          <h3 className="topdetails">8888222992</h3>
        </div>
      </div>
      <div className="right">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
}

export default TopBar;
