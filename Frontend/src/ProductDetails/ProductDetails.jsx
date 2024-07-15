import React from 'react';
import { useState,useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import ProductReviews from './ProductReviews';
import Cards from '../components/cards';
import { mens_kurta } from '../Data/mens_kurta';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import { findProductsById } from '../home/state/Producct/Action';

import { useProductContext } from './ProductContext';
import AddToCart from '../AddtoCart/AddToCart';



// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   imagus: [
//     {
//       src: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2F12%2Fc81293c96af67b4f582fd2ecd94ef0bc9656c1cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3b%2F66%2F3b66a3da6a38def0ebb76bbf00104dcf56e8685d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc7%2Fd2%2Fc7d2ebda06555b9d314af89b2c304acb615c37cb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F29%2F82%2F29824f023c30d0525e8cc214d90483eab1e62cee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jacketscoats_coats%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
const API="http://localhost:4000/MensKurta";

export default function ProductDetails() {
  const {getSingleProduct,isSingleLoading,singleProduct}= useProductContext();
  const { productId } = useParams(); 
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState()
  // const navigate= useNavigate();
  // const params=useParams()
  
  // const dispatch= useDispatch()
  // const {products}= useSelector(store=>Store);
  // const product = useSelector(state => state.products.product);
  
  useEffect(()=>{
    getSingleProduct(`${API}/${productId}`);
    }, [productId]);
  
  if (isSingleLoading) {
    return <div>Loading...</div>;
  }
  if (!singleProduct || singleProduct.length === 0) {
    return <div>No product found</div>;
  }
  
  const {imageUrl, additionalImages,brand,title,price,description}=singleProduct; 
  
   

  const defaultImages = [
    {
      url: 'https://via.placeholder.com/400x600?text=Default+Image+1',
      alt: 'Default Image 1'
    },
    {
      url: 'https://via.placeholder.com/400x600?text=Default+Image+2',
      alt: 'Default Image 2'
    },
    {
      url: 'https://via.placeholder.com/400x600?text=Default+Image+3',
      alt: 'Default Image 3'
    },
    {
      url: 'https://via.placeholder.com/400x600?text=Default+Image+4',
      alt: 'Default Image 4'
    }
  ];

  // const images = product?.imageUrl ? [...product.imageUrl, ...defaultImages].slice(0, 4) : defaultImages.slice(0, 4);


  

  const CustomArrow = ({ className, style, onClick, icon }) => (
    <div
      className={className}
      style={{ ...style, display: 'block', zIndex: 1 }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
  // useEffect(() => {
  //   const data={productId:params.productId}
  //   dispatch(findProductsById(data))
  
    
  // }, [params.productId])
  // recent
  // useEffect(() => {
  //   if (_id) {
  //     dispatch(findProductsById({ _id }));
  //   }
  // }, [_id, dispatch]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }
  


  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow icon={<FaArrowRight />} />,
    prevArrow: <CustomArrow icon={<FaArrowLeft />} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Breadcrumbs can be added here if needed */}
            <li className="text-sm">
              {/* Breadcrumb link */}
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="grid grid-cols-2 gap-32 gap-y-8 lg:w-full">
            <div className="overflow-hidden w-[26rem] h-[40rem]">
              <img
                src={imageUrl || 'https://via.placeholder.com/400x600?text=Default+Image'}
                alt={title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {additionalImages && additionalImages.map((image, index) => (
              <div key={index} className="overflow-hidden w-[26rem] h-[40rem]">
                <img
                  src={image}
                  alt={`${title} - Additional Image ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-md px-2 pb-16 sm:px-4 lg:px-6 lg:pb-24 w-full lg:w-1/2 lg:ml-auto lg:pr-8">
            <div className="lg:col-span-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h1>
              <h2 className="text-lg lg:text-xl text-gray-600 mt-2">{brand}</h2>
              <h3 className="text-lg lg:text-xl text-gray-600 mt-2">${price}</h3>
              <p className="text-base lg:text-lg text-gray-700 mt-4">{description}</p>
            </div>

            {/* Add to Cart */}
            <div className="mt-6 lg:row-span-3 lg:mt-8">
              <AddToCart product={singleProduct} />
            </div>
          </div>

          {/* Product reviews */}
          <div className="mb-5">
            <ProductReviews />
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-semibold text-gray-900 ml-16 mt-28">Others also bought</h1>
          <div>
            <Slider {...sliderSettings}>
              {mens_kurta.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  )
}

