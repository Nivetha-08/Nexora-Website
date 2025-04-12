import React from "react";
import "./Banner.css";
import carousel1 from "../../../public/assets/carousel1.png";
import carousel2 from "../../../public/assets/carousel2.png";
import carousel3 from "../../../public/assets/carousel3.png";
import carousel4 from "../../../public/assets/carousel4.png";
import carousel5 from "../../../public/assets/carousel5.png";
import carousel6 from "../../../public/assets/carousel6.png";
import carousel7 from "../../../public/assets/carousel7.png";

const Banner = () => {
  // console.log("Home Banner render");

  return (
    <>
      <section id="Home-Banner" className="p-5">
        <p className="heading" style={{ color: "#6F42C1" }}>
          Mobile And Web Applications
        </p>
        <p className="subHeading">Design & Development</p>
        {/* <p className="pt-3 content">
          we design, develop, and deliver scalable web apps using industry best
          practices for top performance and user experence. our device-agnostic
          solutions work seamlessly across platforms. we use flutter, react
          native, swift, kotlin, android, react, Angular and spring boot
          microServices.
        </p>
        <div className="d-flex justify-content-center pt-4">
          <button className="btn text-light" style={{ textAlign: "center", backgroundColor:"#6F42C1" }}>
            Explore our service
          </button>
        </div> */}
        <div className="container">   
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src={carousel1}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>DNK</h5>
                  <p>
                    Raining Offers For Hot Summer...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel2}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>OUTDOOR ADVENTURE</h5>
                  <p>
                    A Wounderful Gift...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel3}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Eagle</h5>
                  <p>
                    Once You Choose Hope Anything Is Possible...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel4}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>URBAN JUNGLE CO</h5>
                  <p>
                    Discover The Beauty Of Nature At Your Fingertips...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel5}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PRECISION Engineering</h5>
                  <p>
                    We Are Global Manufacturing Leader...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel6}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>EARTH</h5>
                  <p>
                    Earth endless potential...
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={carousel7}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>LUMORA</h5>
                  <p>
                    Start Living Your Healthiest Life...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
