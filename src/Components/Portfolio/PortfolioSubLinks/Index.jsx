import { NavLink } from "react-router-dom";
import mobile1 from "../../../../public/assets/mobile1.avif";
import mobile2 from "../../../../public/assets/mobile2.avif";
import mobile3 from "../../../../public/assets/mobile3.avif";
import micro1 from "../../../../public/assets/micro1.avif";
import micro2 from "../../../../public/assets/micro2.avif";
import micro3 from "../../../../public/assets/micro3.avif";
import web1 from "../../../../public/assets/web1.avif";
import web2 from "../../../../public/assets/web2.avif";
import web3 from "../../../../public/assets/web3.avif";
import digital1 from "../../../../public/assets/digital1.avif";
import digital2 from "../../../../public/assets/digital2.avif";
import digital3 from "../../../../public/assets/digital3.avif";
import testing1 from "../../../../public/assets/testing1.avif";
import testing2 from "../../../../public/assets/testing2.avif";
import testing3 from "../../../../public/assets/testing3.avif";
import uiux1 from "../../../../public/assets/uiux1.avif";
import uiux2 from "../../../../public/assets/uiux2.avif";
import uiux3 from "../../../../public/assets/uiux3.avif";

const Index = () => {
  const arrob = [
    {
      id: 1,
      img1: mobile1,
      img2: mobile2,
      img3: mobile3,
      title: "Mobile Application",
      subheading: "Build a User-Friendly Grocery E-Commerce APP",
      content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
      content2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
      content3:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
    },
    {
      id: 2,
      img1: web1,
      img2: web2,
      img3: web3,
      title: "Web Application",
      subheading: "SEO Website Optimization Showcasing Data Driven Strategies",
      content1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
      content2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
      content3:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
    },
    {
      id: 3,
      img1: micro1,
      img2: micro2,
      img3: micro3,
      title: "Micro Application",
      subheading:
        "Micro Application All In One Dashboard for Project Management and Scheduling",
        content1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
        content2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
        content3:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
      },
    {
      id: 4,
      img1: uiux1,
      img2: uiux2,
      img3: uiux3,
      title: "UI/UX Design and Development",
      subheading:
        "Designing Meaningful Digital Products and Experience For You",
        content1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
        content2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
        content3:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
      },
    {
      id: 5,
      img1: digital1,
      img2: digital2,
      img3: digital3,
      title: "Digital Marketing",
      subheading:
        "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
        content1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
        content2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
        content3:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
      },
    {
      id: 6,
      img1: testing1,
      img2: testing2,
      img3: testing3,
      title: "Testing Service",
      subheading:
        "Streamline, Analyze and Optimize Your Marketing Efforts In One Dashboard",
        content1:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quod! Nobis et dolores ex sed totam cumque aspernatur dignissimos vitae tempora atque perferendis aliquam nisi nesciunt quis, cupiditate libero quae!",
        content2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse soluta eius quasi excepturi consequatur omnis neque quia tempora at, cupiditate repudiandae blanditiis ipsum maxime quis saepe. Minus, qui perferendis.",
        content3:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, ipsam doloremque necessitatibus assumenda sed eos blanditiis! Et voluptates impedit eaque vero, quia, natus molestiae amet repellat nisi iure pariatur."
      },
  ];

  console.log(arrob);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {arrob.map((v, i) => (
            <div key={i} className="col-sm-12 col-md-4 mb-3">
              <NavLink
                to={`/portfolio/project`}
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
                <p className="text-center text-black p-2">{v.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
