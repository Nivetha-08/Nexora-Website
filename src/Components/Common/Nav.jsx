import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PiCardsThreeFill } from "react-icons/pi";
import "./Nav.css"

const Nav = () => {
  // console.log("Nav render");

  return (
    <>
      <section id="Navbar">
        <nav className="navbar navbar-expand-md" style={{backgroundColor:"#ED4AC0"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             <h3>Nexora</h3>
            </a>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white"><PiCardsThreeFill /></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-0 gap-md-5">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link ">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="btn nav-link dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Careers
                  </button>
                  <ul className="dropdown-menu ">
                    <li>
                      <NavLink to="/jobs" className="dropdown-item">Jobs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/internships" className="dropdown-item">Internships</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;