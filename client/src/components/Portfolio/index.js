import React from "react";
import "./index.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 data-testid="page-title">Portfolio</h2>
      <div data-testid="portfolio-content">
        {/* project */}
        <section className="portfolio-project">
          <h3>
            <span>The Bike Shop</span>
            <div className="project-role">Full-Stack Developer</div>
          </h3>
          <div className="project-thumbnail">
            <img
              src="./assets/images/bike-shop.png"
              alt="Bike Shop site screenshot"
            />
          </div>
          <div className="project-info">
            <p>
              Bicycle App shop is an application that allows users to select
              bicycles by brand name, accessories, and service request.
            </p>
            <div className="responsibilities">
              <h4>Responsibilites</h4>
              <ul>
                <li>Design the website and convert it into code.</li>
                <li>Create local storage based cart system.</li>
                <li>Create a products pages and catalog page with filters.</li>
                <li>Find a solution to upload image.</li>
              </ul>
            </div>
            <div className="technologies">
              <h4>Technologies</h4>
              <p>
                HTML5, CSS3, Javascript, Handlebar, Node, Express, Mysql,
                Sequelize, Passport, bcrypt, Figma, Heroku, VSCode, Agile, Git.{" "}
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/amitkarmacharya-edu/New-Bike-Shop"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="github-project-link"
              >
                <img
                  alt="download author resume"
                  src="./assets/images/github-logo.png"
                />
                <span> Repository</span>
              </a>

              <a
                href="https://new-bike-shop.herokuapp.com"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="live-project-link"
              >
                <span> Live Site</span>
              </a>
            </div>
          </div>
        </section>

        {/* project */}
        <section className="portfolio-project">
          <h3>
            <span>Covid Stats &amp; Test Sites</span>
            <div className="project-role">Front-End Developer</div>
          </h3>

          <div className="project-thumbnail">
            <img
              src="./assets/images/covid.png"
              alt="Bike Shop site screenshot"
            />
          </div>
          <div className="project-info">
            <p>
              This Covid tracker application delivers the current covid19
              updates and statistics nationwide. The User can search for any
              city and view instantaneous status and search for test sites near
              their location.
            </p>
            <div className="responsibilities">
              <h4>Responsibilites</h4>
              <ul>
                <li>
                  Create a wireframe for the single page application and convert
                  it into code.
                </li>
                <li>
                  Create an auto complete feature for the search bar to help
                  users select the correct addresss.
                </li>
                <li>
                  Display the number of positive covid stats for all the
                  coutries.
                </li>
                <li>Display the Test locations in the map using markers.</li>
                <li>
                  Display circle markers to provide visual scale of positive
                  covid cases for all the states in USA.
                </li>
              </ul>
            </div>
            <div className="technologies">
              <h4>Technologies</h4>
              <p>
                HTML5, CSS3, Javascript, JQuery, Google API, Figman, VSCode,
                Git, Github.
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/amitkarmacharya-edu/Project_1"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="github-project-link"
              >
                <img
                  alt="download author resume"
                  src="./assets/images/github-logo.png"
                />
                <span> Repository</span>
              </a>

              <a
                href="https://amitkarmacharya-edu.github.io/Project_1/"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="live-project-link"
              >
                <span> Live Site</span>
              </a>
            </div>
          </div>
        </section>

        {/* project */}
        <section className="portfolio-project">
          <h3>
            <span>MBDirect</span>
            <div className="project-role">Full-Stack Developer</div>
          </h3>

          <div className="project-thumbnail">
            <img
              src="./assets/images/mbdirect.png"
              alt="Bike Shop site screenshot"
            />
          </div>
          <div className="project-info">
            <p>
            A WebRTC application that connects users and businesses directly. What if you could reach any 
            business with just a click? Any user from the internet is just a click away from any company 
            registered with MBDirect. Users can click on the video icon next to the business logo to 
            start a video call and have a conversation with the business representative.
            </p>
            <div className="responsibilities">
              <h4>Responsibilites</h4>
              <ul>
                <li>
                  Find a solution to setup video/audio calls.
                </li>
                <li>
                  Create wireframes for each stages of the video/audio calls.
                </li>
                <li>
                  Convert the wireframes into codes.
                </li>
                <li>
                  Create routes and logic to setup video/audio calls.
                </li>
              </ul>
            </div>
            <div className="technologies">
              <h4>Technologies</h4>
              <p>
                HTML5, CSS3, Javascript, Socket.io, WebRTC, Node, Express, Mysql, Sequelize, Axios, React, Bcrypt, Passport, Figma, VSCode, Git, Github.
                Git, Github.
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/amitkarmacharya-edu/MBDirect"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="github-project-link"
              >
                <img
                  alt="download author resume"
                  src="./assets/images/github-logo.png"
                />
                <span> Repository</span>
              </a>

              <a
                href="https://mbdirect.herokuapp.com"
                target="_blank"
                rel="noreferrer"
                alt="author github page"
                className="live-project-link"
              >
                <span> Live Site</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
