import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import ShowCase from '../components/Product/ShowCase';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <ShowCase/>
     <div className="mt-10 md:mt-60">
       <Freebook />
     </div>
     <Footer/>
    </>
  )
}

export default Home