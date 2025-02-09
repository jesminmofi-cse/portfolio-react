import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9466207d-435b-4d2e-9616-9f5f1707c094");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id="contact"className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’d love to connect! Whether you have a project idea, collaboration opportunity, or just want to say hi, feel free to reach out via the form below or through my email. Let’s create something amazing together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail icon" />
              <p>stujesminmofi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <p>+91-9150485213 (India)</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>4-77A, Mofi Cottage, Elavuvilai, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
