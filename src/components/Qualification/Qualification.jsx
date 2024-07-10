import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.Tech(C.S.E)</h3>
                  <span className="qualification__subtitle">
                    Patel College Of Science And Technology
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021-2025
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div> </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <sapn className="qualification__line"></sapn>
                </div>
                <div>
                  <h3 className="qualification__title">Full Stack Program</h3>
                  <span className="qualification__subtitle">Skill Academy</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022-May,2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">I.Sc.</h3>
                  <span className="qualification__subtitle">
                    M.D.I College,Daltonganj
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019-2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SDE Intern</h3>
                  <span className="qualification__subtitle">Mushroom World Group</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    May,2024-Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">React Developer</h3>
                  <span className="qualification__subtitle">AwesomeSuite</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Nov,2023-Jan,2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div> </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <sapn className="qualification__line"></sapn>
                </div>
                <div>
                  <h3 className="qualification__title">Virtual Internship</h3>
                  <span className="qualification__subtitle">Remark Skill</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Oct,2022-Nov,2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
