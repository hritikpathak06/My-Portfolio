import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Others from "./Others";

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__container container ">
          <div style={{ margin: "20px" }}>
            <Frontend />
          </div>
          <div style={{ marginTop: "50px" }}>
            <Backend />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

{
  /* <div className="skills__container container grid">
<Frontend/>
<Backend/>
<Others/>
</div> */
}
