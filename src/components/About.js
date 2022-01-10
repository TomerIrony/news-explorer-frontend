import React from 'react';

function About(props) {
  return (
    <>
      <div className="about">
        <div className="about__image" />
        <div className="about__container">
          <h1 className="about__header">About the author</h1>
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
