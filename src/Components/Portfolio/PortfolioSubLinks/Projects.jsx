import { useLocation } from "react-router";
import Footer from "../../Common/Footer";
import Nav from "../../Common/Nav";
import React from "react";

const Projects = () => {
  // console.log("PortfolioSublinks Projects render");

  const location = useLocation();
  const { product } = location.state || {};

  console.log(product);
  console.log(product.tool);

  if (!product) {
    return <p>No product data available</p>;
  }

  return (
    <>
      <Nav />

      <div>
        <div id="Projects" className="text-center p-5">
          <h1>{product.title}</h1>
          <h6 className="pt-3" style={{color:"#B6288E"}}>{product.subheading}</h6>
        </div>
        <div className="container">
          <div className="mx-0 mx-md-5 mb-5 ">
            <img
              src={product.img2}
              alt={product.title}
              className="responsive-img img-fluid d-block m-auto "
            />
          </div>
          <div className="mx-0 mx-md-5 ">
            <img
              src={product.img3}
              alt={product.title}
              className="responsive-img img-fluid d-block m-auto "
            />
          </div>
          <div className="content p-sm-3 p-md-5">
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content1}
            </div>
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content2}
            </div>
            <div
              className="px-sm-3 px-md-5"
              style={{ textAlign: "justify", padding: "15px" }}
            >
              {product.content3}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
