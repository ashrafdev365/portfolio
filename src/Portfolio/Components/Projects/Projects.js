import React, { useEffect } from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Navbar/Footer";
import "./pro.css";
const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Nav navSo="otherNav" navCo="otherAboutnav" />

      <section className="projectPage_main_section">
        <div className="projectpage_heading">
          <h1>QUALITY WORK RECENTLY DONE PROJECT</h1>
        </div>

        <div className="projectPage_main_div">
          <Imag name="Covid 19 Api Website" image="images/project1.png" />
          <Imag name="Weather Api Website" image="images/project2.png" />
          <Imag name="Web design" image="images/project3.png" />
          <Imag name="E-commerce Website" image="images/project4.png" />
          <Imag name="Food Api Website" image="images/project5.png" />
          <Imag name="Digital Banking Website" image="images/project6.png" />
          <Imag name="E-commerce Website" image="images/project7.png" />
          <Imag name="Messenger Clone" image="images/project8.png" />
          <Imag name="Movie Website" image="images/project9.png" />
          <Imag name="Netflix clone" image="images/project10.png" />
          <Imag name="Movie Web Design" image="images/project11.png" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;

const Imag = ({ name, image }) => {
  return (
    <>
      <div className="image_main_div">
        <div className="image_div">
          <img src={image} alt="project image" />
          <h1>{name}</h1>
          <div className="image_hover">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
};
