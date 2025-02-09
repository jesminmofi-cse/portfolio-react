import React from 'react';
import './Education.css';
import schoolImg1 from '../../assets/school1.jpeg'; // Nanjil Catholic CBSE School
import schoolImg2 from '../../assets/school.jpeg'; // Nanjil Catholic CBSE School
import schoolImg3 from '../../assets/school3.png'; // Best CBSE School
import schoolImg4 from '../../assets/school4.jpeg'; // College
import theme from '../../assets/theme_pattern.svg';

const educationData = [
  {
    name: 'Christuraja Matriculation Higher Secondary School',
    location: 'Marthandam',
    year: '2009 - 2017',
    gpa: "LKG- 5th",
    img: schoolImg1,
    mapLink: 'https://maps.app.goo.gl/nxiCpBqwpKewFr9n6',
  },
  {
    name: 'Nanjil Catholic CBSE School',
    location: 'Vazhuthalampallam',
    year: '2017 - 2021',
    gpa: "6th-10th",
    img: schoolImg2,
    mapLink: 'https://maps.app.goo.gl/LUe1179YVnSQXRPd7',
  },
  {
    name: 'Best CBSE School',
    location: 'Paloor',
    year: '2021 - 2023',
    gpa: '11th and 12th',
    img: schoolImg3,
    mapLink: 'https://www.bing.com/maps?osid=d3557681-bb88-421b-9cb8-24135f823bc4&cp=8.230863~74.172339&lvl=7.67&pi=0&v=2&sV=2&form=S00027',
  },
  {
    name: 'Chennai Institute of Technology',
    location: 'Chennai',
    year: '2023 - Present',
    gpa: '9.01',
    img: schoolImg4,
    mapLink: 'https://maps.app.goo.gl/CxRCfaSs8xrBDTfk6',
  },
];

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Education</h1>
        <img src={theme} alt="Theme Pattern" />
      </div>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <img src={edu.img} alt={`${edu.name} image`} className="education-image" />

            <div className="education-details">
              <h2>{edu.name}</h2>
              <p>{edu.location}</p>
              <p>{edu.year}</p>
              <p>GPA: {edu.gpa}</p>
              <a
                href={edu.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="education-map-link"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;