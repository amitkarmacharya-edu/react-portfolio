import React from "react";
import { Link } from "react-scroll";
import "./index.css";

function Header() {

  const toggleMenuBtn = (e) => {
    let t = e.target;
    const ele = t.classList.contains('menu-btn-burger-icon') ? 
                t.closest('.menu-btn') : t;
    const navBar = document.querySelector('header');
    const isOpen = ele.classList.contains('menu-btn-open');
    
    if(isOpen) {
      ele.classList.remove('menu-btn-open');
      navBar.classList.remove('show-mobile-nav-bar');
    } else {
      ele.classList.add('menu-btn-open');
      navBar.classList.add('show-mobile-nav-bar')
    }
  }

  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="mobile-nav-bar">
          <li className="nav-link-item">
            {/* <a href="/" className="text-logo">amit karmacharya</a> */}
          </li>
          <li className="nav-link-item">
            <div className="menu-btn" onClick={toggleMenuBtn}>
              <div className="menu-btn-burger-icon" ></div>
            </div>
          </li>
        </ul>
        <div className="mobile-menu-link">
          <ul className="menu-link">
            <li className="menu-link-item">
              <Link to="aboutme" smooth={true} duration={1000}>about me</Link>
            </li>
            <li className="menu-link-item">
              <Link to="portfolio" smooth={true} duration={1000}>portfolio</Link>
            </li>
            <li className="menu-link-item">
              <Link to="contacts" smooth={true} duration={1000}>contacts</Link>
            </li>
          </ul>
        </div>
        <ul className="nav-link">
          <li className="nav-link-item nav-logo">
            {/* <a href="/" className="text-logo">
              amit karmacharya
            </a> */}
          </li>
          <li className="nav-link-item ml-auto">
            <Link className="navLink" to="aboutme" smooth={true} duration={1000}>
              About Me
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="contacts" smooth={true} duration={1000}>Contacts</Link>
          </li>
          <li className="nav-link-item">
            <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
