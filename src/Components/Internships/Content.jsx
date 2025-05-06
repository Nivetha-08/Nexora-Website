import React from 'react'
import "./Content.css"
import two from "../../../public/assets/two.avif"
import four from "../../../public/assets/four.avif"

const Content = () => {
  // console.log("Internships Content render");
  
  return (
    <>
      <section id='Content' className=''>
        <div className="row px-lg-5 p-sm-3 mb-0">
          <div className="col-lg-6 ps-md-5 px-sm-0 my-auto ">
            <p className='para1 px-2 ps-md-5' style={{textAlign:"justify"}}>Nexora thrives not just by providing outstanding quality of service to our customers, but also from atracting the best and brightest young talent</p>
            <p className='para2 pt-3 px-2 ps-md-5' style={{textAlign:"justify"}}>To become an intern here, you'll have to be good at what you do and with our mentors' help you will become even better. It's an impact you will feel starting from your first day at work when you'll discover we're as passionate about developing your skills as you are</p>
          </div>
          <div className="col-lg-6">
            <img src={two} alt="image1" className='img-fluid d-flex mx-auto py-3 px-2' />
          </div>
        </div>
        <div className="row  mt-0 p-sm-3">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={four} alt="image1" className='img-fluid d-flex mx-auto pt-3 px-2' />
          </div>
          <div className="col-lg-6 pe-md-5 ps-lg-0 my-auto order-1 order-lg-2">
            <p className='para1 px-2 pt-5 pe-md-5' style={{textAlign:"justify"}}>We put clear focus on technical coaching an mentorship, not just to provide you eith valuable experience, but also to help you develop your strengths to their full potential</p>
            <p className='para2 pt-3 px-2 pe-md-5' style={{textAlign:"justify"}}>During your 2 months of the internship, you will gain the understanding of the broad business requirements of our clients and the value our solution provide of them. You will have the opturnity to develop an end-to-end software solution, leveraging the comprehensive technical training given by our experienced mentors</p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Content



