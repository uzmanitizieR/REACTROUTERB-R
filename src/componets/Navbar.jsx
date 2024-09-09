import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
         <Link to="/">Website</Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
