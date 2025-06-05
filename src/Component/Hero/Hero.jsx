import React from 'react';
import './Hero.css';
import profile_img from '../../assets/image_mofi .jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/jesminresume.pdf'; 

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Jesmin Mofi Sunil Kumar,</span> aspiring Software developer based in India.
      </h1>
      <p>
        I am an aspiring software developer from Chennai, India, currently pursuing a Bachelor's degree in Computer Science and Engineering.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href={resume}
            download="Jesmin_Mofi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
