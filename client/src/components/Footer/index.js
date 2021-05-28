import React from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import "./index.css";

function Footer() {
  return (
    <footer>
      <section className="footer-links">
        <h5>
          <span>links</span>
        </h5>
        <ul>
          <li>
            <Link to="/" onClick={() => {Scroll.scrollToTop()}}>home</Link>
          </li>
          <li>
            <Link to="aboutme" smooth={true} duration={1000}>about</Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={1000}>portfolio</Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={1000}>contacts</Link>
          </li>
        </ul>
      </section>
      <section className="footer-contacts">
        <h5>
          <span>contacts</span>
        </h5>
        <ul>
          <li>
            <img src="./assets/images/telephone.png" alt="phone" />
            <a href="tel:443-760-7686">443 - 760 -7685</a>
          </li>
          <li>
            <img src="./assets/images/pin.png" alt="location icon" />
            nottingham, maryland, 21234
          </li>
          <li>
            <img src="./assets/images/mail.png" alt="email icon" />
            <a href="mailto:amitkarmacharya.work@gmail.com">
              amitkarmacharya.work@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <section className="footer-social-media-links">
        <h5>
          <span>social media</span>
        </h5>
        <ul>
          <li>
            <img src="./assets/images/github-logo.png" alt="github icon" />
            <a
              href="https://github.com/amitkarmacharya-edu"
              target="_blank"
              rel="noreferrer"
            >
            @amitkarmacharya-edu
            </a>
          </li>
          <li>
            <img src="./assets/images/linkedin.png" alt="linkedin icon" />
            <a
              href="https://www.linkedin.com/in/amit-karmacharya-b344731ab/"
              target="_blank"
              rel="noreferrer"
            >
            @amit-karmacharya-b344731ab
            </a>
          </li>
        </ul>
      </section>
      <h5>Have a good day.</h5>
    </footer>
  );
}

export default Footer;
