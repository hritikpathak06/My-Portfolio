import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Ritik Kumar Pathak
          </a>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active__link">
                  Home
                  <i className="uil uil-estate nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                  <i className="uil uil-user nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                  <i className="uil uil-file-alt nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  Projects
                  <i className="uil uil-scenery nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#qualification" className="nav__link">
                  Qualification
                  <i className="uil uil-graduation-cap nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Services
                  <i className="uil uil-briefcase nav__icon"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                  <i className="uil uil-phone nav__icon"></i>
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => setToggle(false)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(true)}>
            <i class="uis uil-apps"></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
