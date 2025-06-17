import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const URL = `https://server-1-7xzj.onrender.com/webApps`;

const WebApplication = () => {
  // console.log("PortfolioSublinks WebApplication render");

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {data.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/webapplication/project`}
                state={{ product: v, index: i }}
                className="text-decoration-none"
              >
                <div className="card p-3">
                  <img
                    src={v.img1}
                    alt={`Product ${i}`}
                    className="img-fluid"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                </div>
                <p className="text-muted ps-3">{v.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebApplication;