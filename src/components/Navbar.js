import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav wrapper red darken-3">
      <div className="container">
        <a href="/home" className="brand-logo">
          Poke Times
        </a>
        <ul className="right">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

//diffrence between link and navlink is when we use the navlink we get 'active' class on the element we clicked on
