import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';
import axios from 'axios';
import ProductCard from './Product/ProductCard';


function Freebook() {
  const[book,setbook]=useState([]);
  useEffect(() => {
    const getbook=async () => {
      try {
        const res = await axios.get("http://localhost:4000/MensKurta");
        console.log(res.data);
        const filteredData = res.data.filter(item => {
          return item.size.some(sizeObj => sizeObj.name === "M");
        });

        setbook(filteredData);

      } catch (error) {
        console.log(error)

      }
    };
    getbook();
  },[])
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 relative z-20">
          <div className="text-center">
              <h1 className="text-3xl font-semibold mt-12 mb-6 tracking-wide text-gray-900">
                  What's hot in the market
              </h1>
              <p className="text-base font-light leading-relaxed text-gray-700 max-w-2xl mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet suscipit nihil doloribus voluptas quidem, facere illo asperiores aliquam libero ratione optio facilis, quia sint dolore architecto eaque culpa sit vero.</p>
          </div>

          <div className="mt-10">
              <Slider {...settings}>
              {book.map((item)=>(
                    <div key={item._id} className="px-8">
                      <ProductCard item={item} />
                    </div>
                ))} 


              </Slider>
          </div>



      
      </div>
    </>

  )
}

export default Freebook;