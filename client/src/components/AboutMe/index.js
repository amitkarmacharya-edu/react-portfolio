import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <article className="aboutme">
      {/* page title */}
      <h1 data-testid="page-title">About Me</h1>
      {/* avatar info */}
      <div className="web-author-info-container">
        <div className="avatar-wrapper">
          <div className="avatar-container">
            <img
              className="web-author-avatar"
              alt="web developer, amit karmacharya"
              src="./amit.jpg"
            />
          </div>
        </div>
        <h5 className="web-author-name">Amit karmacharya</h5>
      </div>
       {/* social media & resume */}
       <section className="social-media-wrapper">
        <div className="social-media">
          <div className="social-media-item resume">
            <a href="/" alt="author resume link">
              view resume
            </a>
            <img alt="download author resume" src="./assets/images/download.png"/>
          </div>
          <div className="social-media-item">
            <a href="./assets/images/github-logo.png" alt="author github page">
              <img alt="download author resume" src="./assets/images/github-logo.png"/>
            </a>
            
          </div>
          <div className="social-media-item">
            <a href="./assets/images/linkedin.png" alt="author linkedin page">
              <img alt="download author resume" src="./assets/images/linkedin.png"/>
            </a>
            
          </div>
        </div>
      </section>
      {/* avatar introduction */}
      <div className="author-bio" data-testid="author-introduction">
        <h5>Hi!</h5>
        <p>
        I am a Full-stack developer based in Baltimore, Maryland. Before becoming a developer, I was in the retail industry but always thought about transitioning into tech. I started with online learning platforms like
Team treehouse (almost 20k points), Coursera, etc. Then, I joined a full-stack Bootcamp from John Hopkins University, which was a good learning experience. I am thrilled that I took steps to start a career I excel in and love.
        </p>
      </div>
    </article>
  );
}

export default AboutMe;
