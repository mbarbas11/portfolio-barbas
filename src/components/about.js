import React from "react";
import styled_comp from "styled-components";
import '../App.css'

const Container = styled_comp.div`
  font-family: sans-serif;

  color: #333;
  position: absolute;
  
`
const About = () => {
  return (
    <Container className="container">
      <div className = "about_section">
        <h1 className="about">About me</h1>

        <p className = "description"> My name is Michael Barbas, and I am a software engineer. I am currently a junior at 
        SUNY Plattsburgh. I like to work with various technologies, and my current and future projects I work on come from
        problems that have become prevalent at some point in my life. Being able to fix those problems through software
        solutions is a way for me to help others and further improve my skills. I am currently the Treasurer of Coding Hub, an organization providing software solutions for
        students to help solve problems at SUNY Plattsburgh</p>
      </div>

      <div className = "skills_section">
        <h2 className = "skills">Skills</h2>
          <h3 className = "prog_lang">Programming Languages: </h3>
          <ul className = "languages">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
          <h4 className = "other">Other skills: </h4>
          <ul className= "other_skills">
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Unix</li>
            <li>Git</li>
            <li>Firebase</li>
          </ul>
      </div>

    </Container>


  );
};

export default About;
