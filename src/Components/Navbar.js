import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div>
        <nav className="navbar" ref={navRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="setlogo">
                <img className="logo grow" src="./images/core.png" alt="#" />
                <a href="/" className="nav-link logoname font-face-sa grow">
                  Starting Core
                </a>
              </div>
            </li>
            <div className="menu-link">
              {/* <div className='mobile-menu-link'> */}
              <li className="nav-item navs">
                <a className="nav-link we active grow" href="#Why">
                  Why We ?
                </a>
              </li>
              <li className="nav-item navs">
                <a className="nav-link active grow" href="/CaseStudies">
                  Case Studies
                </a>
              </li>
              <li className="nav-item navs">
                <a className="nav-link active grow" href="/Pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item navs">
                <a className="nav-link active grow" href="/Testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item navs">
                <a className="nav-link active grow" href="/Contact">
                  Contact
                </a>
              </li>

              <button className="btn" type="Submit">
                Get Started
              </button>
            </div>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="setlogo2">
          <img className="logo grow" src="./images/core.png" alt="#" />
          <a href="/" className="nav-link logoname font-face-sa grow">
            Starting Core
          </a>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
