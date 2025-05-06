import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoMdMailUnread } from "react-icons/io";
import "./Form.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z ]*$/, "Only letters allowed"),

  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const Form = () => {
  // console.log("Home Form render");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) =>{
    console.log(data);
    reset();
  }

  return (
    <>
      <section
        id="Form-Section"
        className="form-section p-md-5 mt-4 m-lg-5 p-3 rounded"
        style={{backgroundColor:"#F292D7"}}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 pe-5">
            <h1>
              Bring Your Vision To <br /> Life Let's Connect
            </h1>
            <p className="pe-5 pt-3">
              Feel free to reach out by filling out the form on the right or
              using one of the methods below. We'll respond as soon as possible.
              For support requests, please contact us at
            </p>
            <div className="mail pb-3">
              <span className="icon-wrapper">
                <a href="mailto:Contact@Nexora.com">
                  <IoMdMailUnread />
                </a>
              </span>
              <a
                className="ms-2"
                href="mailto:Contact@Nexora.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                Contact@Nexora.com
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 bg-light p-3 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  className={`form-control ${
                    errors.name ? "border border-danger border-2" : ""
                  }`}
                  type="text"
                  id="name"
                  placeholder="Full Name"
                />
                <small className="text-danger">{errors.name?.message}</small>
              </div>
              <div className="pt-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  {...register("mobile")}
                  type="text"
                  className={`form-control ${
                    errors.mobile ? "border border-danger border-2" : ""
                  }`}
                  id="number"
                  placeholder="Mobile Number"
                />
                <small className="text-danger">{errors.mobile?.message}</small>
              </div>
              <div className="pt-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={`form-control ${
                    errors.email ? "border border-danger border-2" : ""
                  }`}
                  id="mail"
                  placeholder="Email"
                />
                <small className="text-danger">{errors.email?.message}</small>
              </div>
              <div className="pt-3">
                <label htmlFor="project" className="form-label">
                  Tell us about your project
                </label>
                <textarea
                  {...register("message")}
                  className={`form-control ${
                    errors.message ? "border border-danger border-2" : ""
                  }`}
                  id="project"
                  rows="3"
                  placeholder="Tell us about your project"
                ></textarea>
                <small className="text-danger">{errors.message?.message}</small>
              </div>

              <div className="d-flex justify-content-end pt-4">
                <button className="btn" type="submit"
                style={{backgroundColor:"#F292D7"}}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
