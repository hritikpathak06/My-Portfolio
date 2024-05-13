import React from "react";
import "./skills.css";

let width = 30;

const Frontend = () => {
  return (
    <>
       <div className="frontend">
        <h1>FRONTEND</h1>
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

export default Frontend;

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
    skillName: "React.js",
    percentage: 90,
  },
  {
    skillName: "Next.js",
    percentage: 70,
  },
  {
    skillName: "JavaScript",
    percentage: 80,
  },
  {
    skillName: "TypeScript",
    percentage: 70,
  },
  {
    skillName: "Redux",
    percentage: 60,
  },
  {
    skillName: "Redux Toolkit",
    percentage: 70,
  },
  {
    skillName: "Tailwind",
    percentage: 70,
  },
  {
    skillName: "MUI",
    percentage: 60,
  },
  {
    skillName: "SCSS",
    percentage: 80,
  },
  {
    skillName: "Chakra-UI",
    percentage: 70,
  },
  {
    skillName: "HTML",
    percentage: 90,
  },
  {
    skillName: "CSS",
    percentage: 80,
  },
];
