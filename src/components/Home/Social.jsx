import React from "react";
import "./home.css";

const Social = () => {
  return (
    <>
      <div className="home__social">
        <a
          href="https://github.com/hritikpathak06"
          className="home__social-icon"
          target={"_blank"}
        >
          <i className="uil uil-github-alt"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/ritik-kumar-pathak-b1a014256/"
          className="home__social-icon"
          target={"_blank"}
        >
          <i class="bx bxl-linkedin-square"></i>
        </a>

        <a
          href="https://www.facebook.com/highrated.hritik.12/"
          className="home__social-icon"
          target={"_blank"}
        >
          <i className="uil uil-facebook"></i>
        </a>

        <a
          href="https://www.instagram.com/___r__ocky___/"
          className="home__social-icon"
          target={"_blank"}
        >
          <i className="uil uil-instagram"></i>
        </a>
      </div>
    </>
  );
};

export default Social;
