/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className='section__subtitle'>My Introduction</span>
        <div className="about__container container grid"></div>
    </section>
  )
}

export default About;