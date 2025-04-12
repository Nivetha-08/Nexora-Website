import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { RiFacebookLine } from "react-icons/ri";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer id="Footer" className="container-fluid px-3 px-md-5">
      <hr />

      <div className="row g-4">
        <div className="col-12 col-md-3">
          <h6 className="" style={{color:"#6F42C1"}}>DevFlux IT Venture Pvt Ltd</h6>
          <div className="d-flex align-items-start gap-2">
            <SlLocationPin className="location-icon" />
            <div>
              1/234-5, A.B.C Complex <br /> ABC Nagar, <br /> Salem,
              Tamilnadu, India
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3">
          <h6 className="" style={{color:"#6F42C1"}}>Connect with Us</h6>
          <div className="social-icons pt-2 d-flex gap-2">
            <a href="#" className="icon">
              <RiFacebookLine />
            </a>
            <a href="#" className="icon">
              <FaBehance />
            </a>
            <a href="#" className="icon">
              <RiTwitterXFill />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="icon">
              <FaDribbble />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 ">
          <h6 className="" style={{color:"#6F42C1"}}>Company</h6>
          <div className="footLinks pt-2">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/Portfolio"}>Portfolio</NavLink>
            <NavLink to={"/jobs"}>Jobs</NavLink>
            <NavLink to={"/internships"}>Internships</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </div>

        <div className="col-12 col-md-3 footLinks">
          <h6 className="" style={{color:"#6F42C1"}}>Contact Us</h6>
          <a href="mailto:Contact@DevFlux.com">Contact@DevFlux.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
