import React from "react";
import "./Banner.css";

const Banner = () => {
  // console.log("Portfolio Banner render");
  
  return (
    <>
      <section id="Portfolio-Banner" className="pt-5">
        <p className="heading" style={{color:"#B6288E"}}>Portfolio</p>
        <p className="subHeading">Spotlight on Latest Innovations</p>
        <p className="pt-3 content px-2 px-md-5">
          We are a team of creative minded designers and developers who design
          and develope web applications in HTML5, 
          JavaScript, ReactJS, Angular
          and NodeJS
        </p>
      </section>
    </>
  );
};

export default Banner;
