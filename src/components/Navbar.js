// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Klife Photos
        </div>
        <ul className="menu">
          <li> <NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><Link
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
          >
          <NavLink to="/services" activeClassName="active">Services</NavLink></Link></li>
          <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
          <li className="book-now"><NavLink to="/book" activeClassName="active"><button>Book Now</button></NavLink></li> {/* Move the button inside a list element */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
