import React from "react";
import "./about.css";
const About = () => {
  return (
    <div id="aboutPage">
      <div>
        <small>#About</small>
        <h1>Who We Are ||</h1>
      </div>
      <div className="aboutTxt">
        Welcome to Techtoniq.in, your premier destination for cutting-edge web
        development solutions. Our expert team specializes in crafting bespoke
        websites tailored to your unique needs. With a focus on innovation and
        precision, we deliver robust, user-friendly, and scalable websites that
        drive results. From concept to deployment, we're your dedicated partner
        every step of the way. Elevate your online presence with Techtoniq.in
        today.
        <div className="achievements">
          <div style={{textAlign:"center"}}>
            <h2>25+</h2>
            <h3>Clints</h3>
          </div>
          <div style={{textAlign:"center"}}>
            <h2>31+</h2>
            <h3>Projects</h3>
          </div>
          <div style={{textAlign:"center"}}>
            <h2>12+</h2>
            <h3>Countries</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
