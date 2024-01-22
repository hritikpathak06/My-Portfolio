import React from "react";
import "./skills.css";

const Others = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Other</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">C++</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">DSA</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Git Hub</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">Version Control</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Vs Code</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>

            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Figma</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Others;
