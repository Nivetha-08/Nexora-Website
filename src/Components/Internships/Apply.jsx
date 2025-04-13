import React from "react";
import "./Apply.css"

const Apply = () => {
  // console.log("Internships Apply render");

  return (
    <>
      <section id="Apply" className="pb-5 pt-5 ps-2">
        <div className="p-sm-3 p-md-5 ms-sm-0 ms-md-5 ">
          <h1>How To Apply</h1>
          <p className="pt-2">If you want to become out next rising star, do not hesitate to let us know by sending your CV to:</p>
          <a href="mailto:contact@DevFlux.com">Contact@DevFlux.com</a> <br />
          <button className="btn text-light mt-4 p-2" style={{backgroundColor:"#6F42C1"}}>Get Started Now</button>
        </div>
      </section>
    </>
  );
};

export default Apply;
