import React from 'react';
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                {services.link ? (
                  <a href={services.link} target="_blank" rel="noopener noreferrer" className="read-more-link">
                    <p>Read more</p>
                    <img src={arrow_icon} alt="Arrow" />
                  </a>
                ) : (
                  <p>No link available</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
