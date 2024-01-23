import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i class="bx bx-qr-scan services__icon"></i>
              <div className="services__title">Frontend Development</div>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggle === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">Frontend Development</h3>
                <p className="services__modal-description">
                  Service with more than 5 months of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I Develop The User Interface
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Proficiency in frontend programming languages such as
                      HTML, CSS, and JavaScript.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Familiarity with modern JavaScript frameworks and
                      libraries like Reactjs.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Enhancing user satisfaction by improving the usability and
                      accessibility of web applications.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Api Integration</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i class="bx bxl-mongodb services__icon"></i>
              <div className="services__title">Backend Development</div>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggle === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">Backend Development</h3>
                <p className="services__modal-description">
                  Service with more than 5 months of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Proficiency in backend programming language such as
                      Node.js.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Experience with frameworks and libraries like Express
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implementing secure authentication and authorization
                      mechanisms for user access.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Integrating with third-party authentication providers
                      (e.g., OAuth, JWT).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-box services__icon"></i>
              <div className="services__title">Full Stack Development</div>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggle === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">
                  Full Stack Development
                </h3>
                <p className="services__modal-description">
                  Service with more than 5 months of experience. Providing
                  quality work to clients and companies.
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Demonstrated expertise in both frontend (React) and
                      backend (Node.js, Express) technologies.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Designing and implementing responsive and interactive user
                      interfaces using React.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Designing and implementing MongoDB databases for storing
                      and retrieving data.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implementing SSR in the React application for improved
                      performance and SEO.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implementing RESTful or GraphQL APIs for communication
                      with the frontend.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
