import React, { useEffect } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const [menu, setmenu] = React.useState("");

  const handleOpenMenu = () => {
    return setmenu("50%");
  };
  const handleCloseMenu = () => {
    return setmenu("0%");
  };

  useEffect(() => {
    window.innerWidth < 1150 ? setmenu("0%") : setmenu("450px");
  }, []);

  return (
    <>
      <nav>
        <div className="nav_main_div">
          <div className="nav_logo">
            <img src="images/logo_transparent.png" alt="portfolio" />
            <h1>Rafi Ahsan</h1>
          </div>

          <div className="menu">
            <i className="fas fa-bars" onClick={handleOpenMenu}></i>
          </div>
          <div className="slide" style={{ width: menu }}>
            <div className="crose" onClick={handleCloseMenu}>
              <i className="fal fa-times"></i>
            </div>
            <ul className="nav_links_div">
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
                <li className={props.navCon}>Contect Us</li>
              </NavLink>
            </ul>

            <div className="menu_social_div">
              <a
                href="https://www.facebook.com/prince.rafi.3551"
                target="_blank"
              >
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

          <div className={props.navSo}>
            <a href="" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
