import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ROQEEBAT ALT/SOE/024/1345</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/error-boundary">Error Boundary</Link>
        </li>
        <li>
          <Link to="/404">404 Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
