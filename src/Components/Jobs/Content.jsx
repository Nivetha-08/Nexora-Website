import React from 'react'
import "./Content.css"
import one from "../../../public/assets/one.avif"
import three from "../../../public/assets/three.avif"

const Content = () => {
  // console.log("Jobs Content render");
  
  return (
    <>
      <section id='Jobs-Content' className=''>
        <div className="row px-lg-5 p-sm-3 mb-0">
          <div className="col-lg-6 ps-md-5 px-sm-0 my-auto">
            <p className='para1 px-2 ps-md-5' style={{textAlign:"justify"}}>As a constantly growing company we are looking for passionate individuals who will join our team and use that opportunity to develop their potential.</p>
            <p className='para2 pt-3 px-2 ps-md-5' style={{textAlign:"justify"}}>Nexora team is made of the most talented software engineers, programmers and designers who happen to be excellent teammates with a tendency to make your working environmenet casual and stress-free. We have a cheerful office in Nis where we develop some preety useful skills, drink a lot of coffee, play table tennis, host regular team buildings, throw memorable Wednesday and create awesome software solutions on the way.</p>
          </div>
          <div className="col-lg-6 ">
            <img src={one} alt="image1" className='img-fluid d-flex mx-auto py-3 px-2' />
          </div>
        </div>
        <div className="row  mt-0 p-sm-3">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src={three} alt="image1" className='img-fluid d-flex mx-auto  pt-3 px-2' />
          </div>
          <div className="col-lg-6 pe-md-5 ps-lg-0 my-auto order-1 order-lg-2">
            <p className='para1 px-2 pt-5 pe-md-5' style={{textAlign:"justify"}}>Nexora was designed as a delightful place to work. We value people who strive for bigger and better, who put additional effort in their individual growth and embrace open communication. By celebrating diversity, we appreciate all the littlethings that make our team a unique one.</p>
            <p className='para2 pt-3 px-2 pe-md-5' style={{textAlign:"justify"}}>When it gets down to business, we are a passionate team of smart, dedicated individuals who work to provide incredible software experiences to our clients. The projects we deal with require cur undivided attention and our multi-faceted team loves the challenge of delivering the most impressive results. INGSOFTWARE is a fantastic place to work and we all as a team contribute to that.</p>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Content



