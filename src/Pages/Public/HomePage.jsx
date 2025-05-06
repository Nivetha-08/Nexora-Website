import React from 'react'
import Banner from '../../Components/Home/Banner';
import Footer from '../../Components/Common/Footer';
import Specialisation from '../../Components/Home/Specialisation';
import Clients from '../../Components/Home/Clients';
import Form from '../../Components/Home/Form';
import Nav from '../../Components/Common/Nav';

const HomePage = () => {
    // console.log("HomePage rendered");
    
  return (
   <>
        <Nav />
        <Banner />
        <Specialisation />
        <Clients />
        <Form />
        <Footer />
   </>
  )
}

export default HomePage