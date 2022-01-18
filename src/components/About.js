import React from 'react';
import aboutImage from '../images/image-03.jpg';

function About(props) {
  return (
    <>
      <div className="about">
        <img src={aboutImage} alt="account" className="about__image" />

        <div className="about__container">
          <h2 className="about__header">About the author</h2>
          <p className="about__text">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__text">
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
