import React from 'react';

function AboutMe() {
  return (
    <article>
      {/* page title */}
      <h1 data-testid="page-title">About Me</h1>
      {/* avatar info */}
      <div>
        <div>
          <img alt="web developer, amit karmacharya" src="/assets/images/author-avatar.jpg"/>
        </div>
        <h5>Amit karmacharya</h5>
        <div>
          <span>amitkarmacharya.work@gmail.com</span>
          <span><img alt="clipboard icon" src="/assets/images/clipboard-icon.png" /></span>
        </div>
        <span>Baltimore, Maryland</span>
      </div>
      {/* avatar introduction */}
      <div data-testid="author-introduction">
        <h5>Hello!</h5>
        <p>
          I am a Full-Stack Web developer based in Baltimore, Maryland. Recently graduated with a certification in Full-stack Web development (MERN Stack) from John Hopkins University, with newly developed skills in both the Front-end and Back-end technologies such as Javascript, CSS3, HTML5, Git, mobile-first design, Node.js, Express, MongoDB, Mysql, etc.
        </p>
      </div>

      <p data-testid="bruce-lee-quote">
        <q>
          Adapt what is useful, reject what is useless, and add what is specifically your own.
        </q>
        <span>- Bruce Lee</span>
      </p>

      {/* social links */}
      <div>
        {/* Resume a */}
        <div>
          <a to="/assets/resume.pdf" target="_blank">Resume</a>
          <span>
            <img alt="link icon" src="/assets/images/link-tag-icon.png"/>
          </span>
        </div>
        {/* github link */}
        <div>
          <a href="https://github.com/amitkarmacharya-edu" target="_blank">Github</a>
          <span>
            <img alt="github icon" src="/assets/images/github-icon.png"/>
          </span>
        </div>
      {/* linkedIn link */}
        <div>
          <a to="https://www.linkedin.com/in/amit-karmacharya-b344731ab/" target="_blank">LinkedIn</a>
          <span>
            <img alt="linkedIn icon" src="/assets/images/linkedIn-icon.png"/>
          </span>
        </div>
      </div>

    </article>
  );
}

export default AboutMe;