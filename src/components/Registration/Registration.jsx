import "../../CSS/Registration.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
// import i from "../../assets/images/res";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    email: "",
    password: "",
    mob_no: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Complete this 
    // Handle Form submission... 
  };

  return (
    <>
      <div className="landing-page">
        <div className="login-div">
          <form onSubmit={handleSubmit}>

            <h1 className="top">Register</h1>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="text-field"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="roll_No">Roll No <FontAwesomeIcon icon={faUser} /></label>
            <input
              type="text"
              id="roll_No"
              name="roll_no"
              placeholder="2200320120143"
              className="text-field"
              minLength="13"
              maxLength="13"
              value={formData.roll_no}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email <FontAwesomeIcon icon={faEnvelope} /></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@abes.ac.in"
              className="text-field"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password <FontAwesomeIcon icon={faLock} /></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              className="text-field"
              minLength="4"
              maxLength="16"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Mobile No <FontAwesomeIcon icon={faPhone} /></label>
            <input
              type="text"
              id="phone"
              name="mob_no"
              placeholder="Your Mobile No."
              className="text-field"
              minLength="10"
              maxLength="10"
              value={formData.mob_no}
              onChange={handleChange}
              required
            />

            <input type="submit" value="Register" className="button" />
            <p>
              Already have an account? <a href="/student_login" className="login-link">Login</a>
            </p>
          </form>
        </div>

        <div className="right-container">
        <img alt="A student with books" className="female-student" />
          <div className="right-container-text">
            <h2>Welcome to ABES Engineering College</h2>
            <h4>This system allows students to:</h4>
            <ul>
              <li>Access exam results</li>
              <li>View course information</li>
              <li>Stay updated with exam schedules</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default Registration;
