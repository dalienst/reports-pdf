import React from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../constants/links";
import logo from "../images/logowhite.svg";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md sticky-top navbar-dark"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid">
          <Link to={publicLinks.Home} className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar" // Add aria-controls attribute
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={publicLinks.Reports} className="nav-link">Reports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Account</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">About App</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
