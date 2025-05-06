import React from "react";
import who from "../../../public/assets/who.avif"
import secrett from "../../../public/assets/secrett.avif"
import process from "../../../public/assets/process.avif"
import people from "../../../public/assets/people.avif"
import "./Content.css";

const Content = () => {
  // console.log("About Content render");
  
  return (
    <section id="Content-Section" className="container">
      <div className="content-row row p-md-5 p-3">
        <div className="col-md-6 content-text">
          <h1>WHO WE ARE ?</h1>
          <p>
            We "Nexora" are an Agile / DevOps software development company
            providing WEB & MOBILE solutions of any complexity for B2B B2C use
            cases. As a company, we have more than 15 years of experience in
            technology service. Our experts design, develop and deliver scalable
            systems with industry best practices for the best user experience
            and performance.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={who}
            alt="Who We Are"
            className="img-fluid content-img"
          />
        </div>
      </div>

      <div className="content-row row p-md-5 p-3 flex-md-row-reverse">
        <div className="col-md-6 content-text">
          <h1>WHAT'S OUR SECRET ?</h1>
          <p>
            Have peace of mind knowing you are working with one of the best
            bespoke Web and Mobile Application Development companies. Two key
            things make "Nexora" special: Our Process and Our Team.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={secrett} alt="Secret" className="img-fluid content-img" />
        </div>
      </div>

      <div className="content-row row p-md-5 p-3">
        <div className="col-md-6 content-text">
          <h1>OUR PROCESS</h1>
          <p>
            It is our playbook for client success. It's the infrastructure that
            enables our team to create the great things that drive results for
            our clients.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={process} alt="Process" className="img-fluid content-img" />
        </div>
      </div>

      <div className="content-row row p-md-5 p-3 flex-md-row-reverse">
        <div className="col-md-6 content-text">
          <h1>OUR PEOPLE</h1>
          <p>
            Our team comes from unicorn startups, not agencies. Instead of
            obsessing over awards, we've focused on satisfying customers and
            users. We work with organizations of all sizes, from startups to
            global brands.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={people} alt="People" className="img-fluid content-img" />
        </div>
      </div>
    </section>
  );
};

export default Content;
