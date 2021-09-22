import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../Navbar/Footer";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav navSo="social_div" navCon="about" />
      <header>
        <div className="header_main_div">
          <div className="header_content">
            <h1>
              <span>Hi</span>, I’m Rafi Ahsan & I’m a Self Taught Front-end Web
              Developer
            </h1>
            <p>
              I’m passionate about helping creative professionals to increase
              their worth by improving their craft and process.
            </p>
           <a href="mailto:rafichy5457@gmail.com"><button>Contect Me</button></a> 
          </div>
          <div className="header_image">
            <img src="images/resume-animate (1).svg" alt="image" />
          </div>
          <div className="image_back"></div>
        </div>
      </header>

      <section className="aboutme_section">
        <div className="about_main_div">
          <div className="experiance">
            <SecName name="About" />

            <div className="working">
              <h2>2+</h2>
              <p>Years Experience Working</p>
            </div>
          </div>

          <div className="about_div">
            <div className="about_content">
              <h1>
                Web Designer and Front end web Developer,specialized in Fron end
                Development
              </h1>
            </div>

            <div className="about_box_main_div">
              <div className="about_box">
                <img src="Icons/icons8-art-prices-96.png" alt="Colour" />
                <h1>Web Design</h1>
              </div>
              <div className="about_box">
                <img src="Icons/icons8-code-128.png" alt="code icon" />
                <h1>Front End Dev</h1>
              </div>
              <div className="about_box">
                <img src="Icons/icons8-code-fork-64.png" alt="backend icon" />
                <h1>Backend Firebase</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="survice_section">
        <div className="section_name_div">
          <SecName name="Survice" />
        </div>

        <div className="survice_main_div">
          <div className="survice_div" id="survice_box1">
            <div className="survice_image_div">
              <img
                src="images/Vector.png"
                className="survice_image1"
                alt="vector image"
              />
              <img
                src="images/outer-space-animate.svg"
                className="survice_image2"
                alt="design image"
              />
            </div>
            <h1>Web Design</h1>
           
          </div>

          <div className="survice_div" id="survice_box2">
            <div className="survice_image_div">
              <img
                src="images/Vector2.png"
                className="survice_image1"
                alt="vector image"
              />
              <img
                src="images/projections-animate.svg"
                className="survice_image2"
                alt="design image"
              />
            </div>
            <h1>Front-End Web Development</h1>
           
          </div>

          <div className="survice_div" id="survice_box3">
            <div className="survice_image_div">
              <img
                src="images/Vector3.png"
                className="survice_image1"
                alt="vector image"
              />
              <img
                src="images/in-progress-animate.svg"
                className="survice_image2"
                alt="design image"
              />
            </div>
            <h1>Testing & Deploing</h1>
           
          </div>

          <div className="survice_div" id="survice_box1">
            <div className="survice_image_div">
              <img
                src="images/Vector.png"
                className="survice_image1"
                alt="vector image"
              />
              <img
                src="images/outer-space-animate.svg"
                className="survice_image2"
                alt="design image"
              />
            </div>
            <h1>SEO OPTIMIZE</h1>
           
          </div>
        </div>
      </section>

      <section className="language_section">
        <div className="section_name_div">
          <SecName name="Language" />
        </div>
        <div className="language_main_div">
          <Language
            name="React.js"
            image="Icons/icons8-react.svg"
            par="70%"
            id="react"
          />
          <Language
            name="JavaScript"
            image="Icons/icons8-javascript.gif"
            par="70%"
            id="js"
          />
          <Language
            name="HTML 5"
            image="Icons/icons8-html-5.svg"
            par="80%"
            id="html"
          />
          <Language
            name="CSS 3"
            image="Icons/icons8-css3.svg"
            par="85%"
            id="css"
          />
          <Language
            name="Wordpress"
            image="Icons/icons8-wordpress.svg"
            par="68%"
            id="word"
          />
          <Language
            name="Jquery"
            image="Icons/icons8-jquery.svg"
            par="60%"
            id="jquery"
          />
          <Language
            name="Firebase"
            image="Icons/icons8-firebase.svg"
            par="60%"
            id="firebase"
          />
          <Language
            name="Bootstrap"
            image="Icons/icons8-bootstrap.svg"
            par="70%"
            id="bootstrap"
          />
        </div>
      </section>

      <div className="project_section">
        <div className="section_name_div">
          <SecName name="Language" />
        </div>
        <div className="project_image">
          <div className="image_div">
            <img src="images/project1.png" alt="project image" />
          </div>
          <div className="image_div" id="image2">
            <img src="images/project2.png" alt="project image" />
          </div>
          <div className="image_div" id="image3">
            <img src="images/project5.png" alt="project image" />
          </div>
          <div className="image_div" id="image4">
            <img src="images/project3.png" alt="project image" />
          </div>
        </div>

        <NavLink exact to="/projects">
          <button>More</button>
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Home;

const SecName = ({ name }) => {
  return (
    <>
      <div className="sec_name">
        <div>
          <span>{name}</span>
        </div>
      </div>
    </>
  );
};

const Language = (props) => {
  return (
    <>
      <div className="language_div" id={props.id}>
        <div className="language">
          <img src={props.image} alt="Icons" />
          <h1>{props.name}</h1>
          <p>{props.par}</p>
        </div>
      </div>
    </>
  );
};
