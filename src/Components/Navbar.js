import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="setlogo">
                <img className="logo grow" src="./images/core.png" alt="#" />
                <a href="/" className="nav-link logoname font-face-sa grow">
                  Starting Core
                </a>
              </div>
            </li>
            <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            {/* <div className='mobile-menu-link'> */}
              <li className="nav-item">
                <a className="nav-link we active grow" href="#Why">
                  Why We ?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active grow" href="#Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active grow" href="/Pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active grow" href="/Testimonial">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active grow" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active grow" href="/Contact">Contact</a>
              </li>

              <button className="btn" type="Submit">
                Get Started
              </button>
            </div>

            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </ul>
        </nav>
      </div>

     
    </>
  )
}

export default Navbar;