import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./index.css";

function HoneyCombHero() {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    API.getTechStack()
      .then((res) => {
        setTechStack(res.data);
      })
      .catch((err) => console.log("No Data"));
  }, []);

  return (
    <section className="hero-container">
      <div className="web-author-info">
        <h1 className="web-author-name">amit karmacharya</h1>
        <h3 className="web-author-title">full stack web developer</h3>
        <div className="web-dev-head">
          <span className="display-block web-info-tiny">familiar with</span>
          <span className="display-block web-dev-info">
            development principles, technologies &amp; tools
          </span>
          <span className="display-block web-info-tiny">such as</span>
        </div>
      </div>
      {techStack.length > 0 ? (
      <div className="honeycomb-container" data-testid="honeycomb-container">
          <div className="honeycomb-techstack">{}</div>
          <div className="honeycomb-play">
            <p>
              <span>match tech pair</span>
              <button className="">play</button>
            </p>
          </div>
        </div>
      ) : (
      <div className="techstack-text" data-testid="techstack-text">
          <div className="front-end">
            <h5 className="techstack-head">Front-End </h5>
            <p>html5, css3, javascript, bootstrap, materialize, react</p>
          </div>
          <div className="back-end">
            <h5 className="techstack-head">Back-End </h5>
            <p>nodejs, express, sequelize, mysql, mongoose, mongodb, meteor</p>
          </div>
          <div className="principles">
            <h5 className="techstack-head">Development Principles </h5>
            <p>TDD, agile, git workflow, UX/UI</p>
          </div>
          <div className="tools">
            <h5 className="techstack-head">Tools &amp; library </h5>
            <p>
              figma, git, github, trello, visual studio code, postman, jest,
              react testing library
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default HoneyCombHero;
