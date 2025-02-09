import React from 'react';
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/image_mofi .jpg";

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              <h3>
              I am Jesmin Mofi Sunil Kumar, a passionate Computer Science and Engineering student and an aspiring Software Developer driven by curiosity and a relentless pursuit of innovation. I thrive on solving complex problems, thinking strategically, and creating impactful solutions through technology. With a strong analytical mindset and a natural leadership spirit, I enjoy taking on challenges that push my creativity and technical skills.

Beyond coding, I am deeply invested in continuous learning, exploring new technologies, and refining my craft to build scalable and efficient systems. Whether it’s tackling algorithmic challenges or developing intuitive software solutions, I approach every project with determination, adaptability, and a commitment to excellence.
              </h3>
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <a href="https://leetcode.com/u/jesminmofi_be/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>500+</h1>
            <p>Leetcode Problems</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
          <a href="https://www.codechef.com/users/jesmin_mofi_s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>200+</h1>
            <p>Codechef Problems</p>
          </a>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;