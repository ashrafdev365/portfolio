import React from "react";
import "./about.css";
import Nav from "../Navbar/Nav";
import Footer from "../Navbar/Footer";

const About = () => {
  return (
    <>
      <Nav navSo="otherNav" navCo="otherAboutnav" />
      <div className="aboutpage_main_div">
        <div className="content_div">
          <h1>Hi, i'm Rafi Ahsan</h1>
          <p>
            I am an expert Web Developer/Programmer with three years’
            interactive experience. I am an energetic and imaginative young web
            developer who is able to work alongside other talented IT
            professionals in creating websites to the very highest standards
            Core capabilities include: accessible Flash and Flex development in
            ActionScript, standard-based Web designing and programming in
            HTML/CSS, Bootstrap and JavaScript, Web Design with Figma, Adobe XD
            and database-driven site development and content-management-system
            programming with Javascript, jQuery, ReactJs and firebase, Miva Merchant
            e-commerce platform configuration and interface development, writing
            user-interface style guide documentation.
          </p>
        </div>
        <img src="Images/photo.png" alt="rafi ahsan" />
      </div>
      <Footer />
    </>
  );
};

export default About;
