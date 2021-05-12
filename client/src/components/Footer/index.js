import React from "react";
import "./index.css";

function Footer() {
  return (
    <footer>
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
      <section className="footer-links">
        <h5>
          <span>links</span>
        </h5>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/#about">about</a>
          </li>
          <li>
            <a href="/#portfolio">portfolio</a>
          </li>
          <li>
            <a href="/#contacts">contacts</a>
          </li>
        </ul>
      </section>
      <section className="footer-social-media-links">
        <h5>
          <span>social media</span>
        </h5>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/#about">about</a>
          </li>
          <li>
            <a href="/#portfolio">portfolio</a>
          </li>
          <li>
            <a href="/#contacts">contacts</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
