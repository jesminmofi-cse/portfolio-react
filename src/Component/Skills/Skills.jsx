import React from 'react';
import "./Skills.css"; // Ensure this path is correct
import theme_pattern from "../../assets/theme_pattern.svg"; // Ensure this path is correct

const Skills = () => {
  const skillsData = {
    languages: [
      { name: "Python", proficiency: "70%" },
      { name: "React", proficiency: "40%" },
      { name: "Java", proficiency: "60%" },
      { name: "C++", proficiency: "50%" },
      { name: "HTML & CSS", proficiency: "70%" },
    ],
    technologies: [
      { name: "Github", proficiency: "69%" },
      { name: "Vite", proficiency: "50%" },
      {name :'Render', proficiency:'80%'},
      {name : 'Vercel', proficiency: '80%'},
    ],
    tools: [
      { name: "Canva", proficiency: "80%" },
      { name: "Figma", proficiency: "59%" },
      { name: "Notion", proficiency: "69%" },
    ],
  };

  return (
    <div id="skills" className='skills'>
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="skills-section">
        <div className="skills-right">
          <div className="skills-skills">
            {/* Languages Section */}
            <div className="skills-category">
              <h2><i>Languages</i></h2><br></br>
              {skillsData.languages.map((skill, index) => (
                <div key={index} className="skills-skill">
                  <p>{skill.name}</p>
                  <hr style={{ width: skill.proficiency }} />
                </div>
              ))}
            </div>

            {/* Technologies Section */}
            <div className="skills-category">
              <h2><i>Technologies</i></h2><br></br>
              {skillsData.technologies.map((skill, index) => (
                <div key={index} className="skills-skill">
                  <p>{skill.name}</p>
                  <hr style={{ width: skill.proficiency }} />
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="skills-category">
              <h2><i>Tools</i></h2><br></br>
              {skillsData.tools.map((skill, index) => (
                <div key={index} className="skills-skill">
                  <p>{skill.name}</p>
                  <hr style={{ width: skill.proficiency }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
