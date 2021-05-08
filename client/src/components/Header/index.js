import React from "react";
import { NavLink } from "react-router-dom";
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
            <a href="/" className="text-logo">amit karmacharya</a>
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
              <a href="/#aboutme">about me</a>
            </li>
            <li className="menu-link-item">
              <a href="/#portfolio">portfolio</a>
            </li>
            <li className="menu-link-item">
              <a href="/#contacts">contacts</a>
            </li>
          </ul>
        </div>
        <ul className="nav-link">
          <li className="nav-link-item nav-logo">
            <a href="/" className="text-logo">
              amit karmacharya
            </a>
          </li>
          <li className="nav-link-item ml-auto">
            <NavLink className="navLink" to="/#aboutme">
              About Me
            </NavLink>
          </li>
          <li className="nav-link-item">
            <NavLink to="/#contacts">Contacts</NavLink>
          </li>
          <li className="nav-link-item">
            <NavLink to="/#portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
