import React from "react";
import "./index.css";

function AboutMe() {
  return (
    <article className="aboutme">
      {/* page title */}
      <h2 data-testid="page-title">About Me</h2>
      {/* avatar info */}
      <div className="web-author-info-container">
        <div className="avatar-wrapper">
          <div className="avatar-container">
            <img
              className="web-author-avatar"
              alt="web developer, amit karmacharya"
              src="./assets/images/amit.jpg"
            />
          </div>
        </div>
        <h5 className="web-author-name">Amit karmacharya</h5>
      </div>
      {/* social media & resume */}
      <section className="social-media-wrapper">
        <div className="social-media">
          <div className="social-media-item resume">
            <a
              href="./assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              alt="author resume link"
            >
              view resume
            </a>
            <a href="./assets/resume.pdf" download>
              <img
                alt="download author resume"
                src="./assets/images/download.png"
              />
            </a>
          </div>
          <div className="social-media-item">
            <a
              href="https://github.com/amitkarmacharya-edu"
              target="_blank"
              rel="noreferrer"
              alt="author github page"
            >
              <img
                alt="download author resume"
                src="./assets/images/github-logo.png"
              />
              <span>@amitkarmacharya-edu</span>
            </a>
          </div>
          <div className="social-media-item">
            <a
              href="https://www.linkedin.com/in/amit-karmacharya-b344731ab/"
              target="_blank"
              rel="noreferrer"
              alt="author linkedin page"
            >
              <img
                alt="download author resume"
                src="./assets/images/linkedin.png"
              />
              <span>@amit-karmacharya-b344731ab</span>
            </a>
          </div>
        </div>
      </section>
      {/* avatar introduction */}
      <div className="author-bio" data-testid="author-introduction">
        <h5>Hi!</h5>
        <p>
          I am a Full-stack developer based in Baltimore, Maryland. Before
          becoming a developer, I was in the retail industry but always thought
          about transitioning into tech. I started with online learning
          platforms like Team treehouse (almost 20k points), Coursera, etc.
          Then, I joined a full-stack Bootcamp from John Hopkins University,
          which was a good learning experience. I am thrilled that I took steps
          to start a career I excel in and love.
        </p>
      </div>
    </article>
  );
}

export default AboutMe;
