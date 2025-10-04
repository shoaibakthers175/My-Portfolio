import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>

        <div className="items">
          {skills.map((skill) => (
            <>
              <div className="item key={skill.id}"
              data-aos="flip-left"
              data-aos-duration="1000"
              >
                <img src={`/asset/${skill.imageSrc}`} alt="" />
                <h3>{skill.title}</h3>
              </div>
              
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
