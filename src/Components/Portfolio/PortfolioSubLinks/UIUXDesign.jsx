// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const URL = `https://fakestoreapi.com/products`;

// const UIUXDesign = () => {
//   // console.log("PortfolioSublinks UIUXDesign render");

//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const response = await axios.get(URL);
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <div className="container mt-4">
//         <div className="row">
//           {data.map((v, i) => (
//             <div key={i} className="col-sm-12 col-md-4 mb-3">
//               <NavLink
//                 to={`/portfolio/uiuxdesign/project`}
//                 state={{ product: v, index: i }}
//                 className="text-decoration-none"
//               >
//                 <div className="card p-3">
//                   <img
//                     src={v.image}
//                     alt={`Product ${i}`}
//                     className="img-fluid"
//                     style={{ height: "300px", objectFit: "contain" }}
//                   />
//                 </div>
//                 <p className="text-muted ps-3">{v.title}</p>
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UIUXDesign;

import { NavLink } from "react-router-dom";
import uiux1 from "../../../../public/assets/uiux1.avif";
import uiux2 from "../../../../public/assets/uiux2.avif";
import uiux3 from "../../../../public/assets/uiux3.avif";

const UIUXDesign = () => {
  // console.log("PortfolioSublinks UIUXDesign render");

  const arrob = [
    {
      id: 1,
      img1: uiux1,
      img2: uiux2,
      img3: uiux3,
      title: "UI/UX Design and Development",
      subheading:
        "Designing Meaningful Digital Products and Experience For You",
      content1:
        "In the ever-evolving digital landscape, user experience (UX) and user interface (UI) design have become paramount for businesses aiming to create exceptional digital products. In India, where technology is thriving, numerous companies offer UI/UX design services. Among them, Concept Infoway stands out as a leading UI/UX design company, combining creativity, expertise, and a deep understanding of user behavior to deliver captivating and intuitive experiences.",
        content2:
        "Additionally, the brand feature allows businesses to monitor how their brands perform across various campaigns, ensuring their digital solutions align with branding objectives and resonate with the target audience. To further empower our clients, the data lab functionality offers deep analytics, enabling users to explore and interpret data more effectively. This allows for actionable insights that can be used to optimize future testing strategies, improve system performance, and enhance user experiences. Our testing services, backed by this comprehensive dashboard, provide businesses with the tools and insights needed to maintain high-quality, effective digital solutions.",
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/uiuxdesign/project`}
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
                <p className="text-black text-center p-2">{v.subheading}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UIUXDesign;
