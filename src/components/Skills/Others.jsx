import React from "react";
import "./skills.css";

let width = 30;

const Others = () => {
  return (
    <>
      <div className="frontend">
        <h1>OTHERS</h1>
        <hr />
        {frontendSkills.map((skill, index) => (
          <div className=" frontend__skills" style={{marginTop:"10px"}}>
            <h4 style={{ width: "20%" }}>{skill.skillName}</h4>
            <div className="percentage" style={{width:"100%"}}>
              <div
                style={{
                  width: `${skill.percentage}%`,
                  background: getColor(skill.percentage),
                }}
              ></div>
            </div>
            <h4 style={{width:"10%"}}>{skill.percentage}%</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Others;

// Function to determine color based on percentage
const getColor = (percentage) => {
  if (percentage <= 20) {
    return "red";
  } else if (percentage > 20 && percentage <= 50) {
    return "yellow";
  } else if (percentage > 50 && percentage <= 60) {
    return "yellow";
  } else if (percentage > 60 && percentage <= 70) {
    return "blue";
  } else {
    return "green";
  }
};

export const frontendSkills = [
  {
    skillName: "C++",
    percentage: 70,
  },
  {
    skillName: "Python",
    percentage: 50,
  },
  {
    skillName: "DSA",
    percentage: 60,
  },
  {
    skillName: "Github",
    percentage: 80,
  },
  {
    skillName: "Git",
    percentage: 70,
  },
  {
    skillName: "Postman",
    percentage: 80,
  },
];
