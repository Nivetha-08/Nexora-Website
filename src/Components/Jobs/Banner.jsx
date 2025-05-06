import React from "react";
import careers from "../../../public/assets/careers.avif";
import "./Banner.css";

const Banner = () => {
  // console.log("Jobs Banner render");

  return (
    <>
      <section id="Jobs">
        <div className="pt-5 text-center">
          <h1 style={{color:"#B6288E"}}>Careers at Nexora</h1>
          <h5 className="p-3">Careers</h5>

          <div className="sub-content">
            <p>Create clever things with us!</p>
            <p className="pb-4">
              We are always eager to meet fresh talent, so check our positions
            </p>
          </div>
        </div>
        <img
          src={careers}
          alt="Banner Image"
          className="img-fluid d-flex mx-auto p-sm-0"
        />
        <div className="text-center pt-5">
          <h1 style={{color:"#B6288E"}}>Web App Developer</h1>
          <div className="row px-2">
            <div className="col-12 col-md-8 mx-md-auto m-0">
              <p className=" sub-content content pt-4">
              We are looking skilled Web Developer who will responsible for
              developing and/or designing websites for our company You will be
              working along side as team of other developers in creating,
              maintaining and updating our websites
              </p>
            </div>
          </div>
          <div className="row px-2">
            <div className="col-12 col-md-8 mx-md-auto m-0">
              <p className="sub-content content p-2">
              In order for you to succeed in this role, you will be need to be
              proficient in JavaScript, HTML, CSS, and have solid knowledge and
              experience in prigramming applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
