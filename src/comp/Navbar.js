import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCode } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar p-2 navbar-expand-md navbar-dark bg-dark">
        <Link
          className="navbar-brand ml-3 font-weight-bold text-warning"
          to="/"
        >
          YO-CODER
          <span>
            <FaCode className="ml-2 code" />
          </span>
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="text-warning" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-4 font-weight-bold">
            <li className="nav-item active">
              <Link className="nav-link text-warning" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/Courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
