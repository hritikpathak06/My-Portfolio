import React, { useState } from "react";
import "./projects.css";
import SocialMedia from "../../assets/social-media.png";
import Eccomerce from "../../assets/eccomerce.png";
import Netflix from "../../assets/netflix.png";
import Portfolio from "../../assets/portfolio.png";
import BurgerMania from "../../assets/burgermania.png";
import LIINKS from "../../assets/links.png";
import Weather from "../../assets/weather.png";
import Multiplication from "../../assets/multiplication.png";
import TODO from "../../assets/todo.png";
import QUIZ from "../../assets/qyuiz.png";
import CLOCK from "../../assets/clock.png";
import LEARNHUB from "../../assets/learnhub.png";
import CODEOPEN from "../../assets/codeeditor.png";
import CHATTER from "../../assets/chatter.png";
import SYNCIFY from "../../assets/syncify.png"
import LANDING from "../../assets/landing.png"
import WONDERSTAY from "../../assets/wonder.png"
import CHATMINGLE from "../../assets/chatmingle.png"
import CABLINK from "../../assets/cablink.png"

const Projects = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (event) => {
    setToggleState(event);
  };

  return (
    <>
      <div className="projects section conatainer" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">The Best Projects</span>
        <div className="projects__container">
          <div className="projects__sub-container">
            <h3
              className={
                toggleState === 1
                  ? "projects__full-stack button-active"
                  : "projects__full-stack"
              }
              onClick={() => toggleTab(1)}
            >
              Major Projects
            </h3>
            <h3
              className={
                toggleState === 2
                  ? "projects__other button-active"
                  : "projects__other"
              }
              onClick={() => toggleTab(2)}
            >
              Mini Projects
            </h3>
          </div>

          <div
            className={
              toggleState === 1
                ? "projects__data projects__active"
                : "projects__data"
            }
          >
            <div className="projects__content ">
              {fullStackProjectsData.map((project, index) => (
                <>
                  <div className="project__info" key={index}>
                    <div className="project__data__content">
                      <h2 className="project__name">{project.name}</h2>
                      <h3 className="project__type">{project.type}</h3>
                      <img
                        src={project.image}
                        alt=""
                        className="project__img"
                      />
                    </div>
                    <div className="project__icons">
                      <a href={project.link2} target="_blank">
                        <i class="bx bxl-github"></i>
                      </a>
                      <a href={project.link1} target="_blank">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "projects__data projects__active"
                : "projects__data"
            }
          >
            <div className="projects__content ">
              {miniProjectsData.map((project, index) => (
                <>
                  <div className="project__info" key={index}>
                    <div className="project__data__content">
                      <h2 className="project__name">{project.name}</h2>
                      <h3 className="project__type">{project.type}</h3>
                      <img
                        src={project.image}
                        alt=""
                        className="project__img"
                      />
                    </div>
                    <div className="project__icons">
                      <a href={project.link2} target="_blank">
                        <i class="bx bxl-github"></i>
                      </a>
                      <a href={project.link1} target="_blank">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

const fullStackProjectsData = [
  {
    name: "Learn Hub",
    type: "Full Stack Project",
    image: LEARNHUB,
    link1: "https://learnhub-tau.vercel.app",
    link2: "https://github.com/hritikpathak06/Learn_Hub--Frontend",
  },
  {
    name: "Chat Mingle",
    type: "Full Stack Project",
    image: CHATMINGLE,
    link1: "https://chatmingle-7t03.onrender.com/",
    link2: "https://github.com/hritikpathak06/ChatMingle",
  },
  {
    name: "Wonder Stay",
    type: "Full Stack Project",
    image: WONDERSTAY,
    link1: "https://wonderstay.vercel.app/",
    link2: "https://github.com/hritikpathak06/WonderStay---Frontend",
  },
  {
    name: "Syncify",
    type: "AI Sass Platform",
    image: SYNCIFY,
    link1: "https://syncify-self.vercel.app/",
    link2: "https://github.com/hritikpathak06/Syncify",
  },

  {
    name: "Eccomerce Website",
    type: "Full Stack Project",
    image: Eccomerce,
    link1: "https://shopwithritik.vercel.app/",
    link2: "https://github.com/hritikpathak06/Frontend--Eccomerce",
  },
  {
    name: "CabLink",
    type: "Full Stack Project",
    image: CABLINK,
    link1: "https://cablink.vercel.app/",
    link2: "https://github.com/hritikpathak06/Cablink",
  },

  {
    name: "Socio Media",
    type: "Full Stack Project",
    image: SocialMedia,
    link1: "https://socio-media-delta.vercel.app/",
    link2: "https://github.com/hritikpathak06/Social-Media-Frontend",
  },
  {
    name: "Netflix Clone",
    type: "Frontend+Api",
    image: Netflix,
    link1: "https://netflix-clone-sandy-beta.vercel.app/",
    link2: "https://github.com/hritikpathak06/Netflix-Clone",
  },
  {
    name: "Chat App",
    type: "Full Stack Project",
    image: CHATTER,
    link1: "https://chatter-up-xa94.onrender.com/",
    link2: "https://github.com/hritikpathak06/ChatterUp",
  },
  {
    name: "CodeOpen",
    type: "Frontend+ Shadcn UI",
    image: CODEOPEN,
    link1: "https://code-open.vercel.app/",
    link2: "https://github.com/hritikpathak06/CodeOpen",
  },
];

const miniProjectsData = [
  {
    name: "Portfolio Website",
    type: "Frontend",
    image: Portfolio,
    link1: "https://my-portfolio-gold-one.vercel.app/",
    link2: "https://github.com/hritikpathak06/My-Portfolio",
  },
  {
    name: "Burger Mania",
    type: "Frontend Animated",
    image: BurgerMania,
    link1: "https://burger-mania.vercel.app/",
    link2: "https://github.com/hritikpathak06/Burger-Mania",
  },
  {
    name: "Quiz Mania",
    type: "Frontend Project",
    image: QUIZ,
    link1: "https://quiz-app-lilac-eight.vercel.app/",
    link2: "https://github.com/hritikpathak06/Quiz-App",
  },
  {
    name: "Weather Website",
    type: "Frontend Project + Api",
    image: Weather,
    link1: "https://weather-app-two-silk-80.vercel.app/",
    link2: "https://github.com/hritikpathak06/Weather-App",
  },
  {
    name: "Landing Page",
    type: "Frontend Project",
    image: LANDING,
    link1: "https://landing-page-seven-lake-28.vercel.app/",
    link2: "https://github.com/hritikpathak06/Landing-Page",
  },
  {
    name: "LIINKS",
    type: "Frontend Project",
    image: LIINKS,
    link1:
      "https://6540e8b0a77e1d644097826e--eclectic-jelly-fb36ff.netlify.app/",
    link2: "https://github.com/hritikpathak06/LIINKS--Frontend",
  },
  {
    name: "Todo List",
    type: "Frontend Project",
    image: TODO,
    link1: "https://react-to-do-list-topaz-psi.vercel.app/",
    link2: "https://github.com/hritikpathak06/React-To-do-List",
  },
  {
    name: "Digital Clock",
    type: "Frontend Project",
    image: CLOCK,
    link1: "https://digital-clock-ashy-nu.vercel.app/",
    link2: "https://github.com/hritikpathak06/Digital-Clock",
  },
  {
    name: "Multiplication Website",
    type: "Frontend Project",
    image: Multiplication,
    link1: "https://multiplication-app-ashen.vercel.app/",
    link2: "https://github.com/hritikpathak06/Multiplication-App",
  },
];
