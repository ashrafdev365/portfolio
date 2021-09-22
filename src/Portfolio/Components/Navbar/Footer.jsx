import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="nav_logo">
          <img src="images/logo_transparent.png" alt="portfolio" />
          <h1>Rafi Ahsan</h1>
        </div>
        <ul className="footer_links_div">
          <NavLink exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink exact to="/aboutme">
          <li>About Me</li>
          </NavLink>
          <NavLink exact to="/contectus">
            <li className="about">Contect Us</li>
          </NavLink>
        </ul>

        <div className="footer_social_div">
          <a href="https://www.facebook.com/prince.rafi.3551" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/MDRAFIAHASANCH1" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/md-rafi-ahasan-chowdhury-76452a198/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
