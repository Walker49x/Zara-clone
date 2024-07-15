// import React, { useEffect, useState } from 'react'
// import ProductDetails from './ProductDetails';
// import axios from 'axios';

// function ProductNew() {
//     const[book,setbook]=useState([]);
//     useEffect(() => {
//       const getbook=async () => {
//         try {
//           const res = await axios.get("http://localhost:4000/MensKurta");
//           console.log(res.data);
//           setbook(res.data);

//         } catch (error) {
//           console.log(error)

//         }
//       };
//       getbook();
//     },[])

//     // if (loading) {
//     //   return <div>Loading...</div>; // Render a loading state while fetching data
//     // }
//   return (
//     <div>
//         {book.map((item)=><ProductDetails key={item._id} item={item} />)}
//     </div>
//   )
// }

// export default ProductNew
// import { useProductContext } from './ProductContext';
// import { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom';

// const API="http://localhost:4000/MensKurta"

// const SingleProduct =()=>{
//     const {getSingleProduct,isSingleLoading,singleProduct}= useProductContext();
//     const { _id } = useParams();
//     const {imageUrl,brand,title,price}=singleProduct;
//     useEffect(()=>{
//       getSingleProduct(`${API}?id=${_id}`);
//     },[]);

//     return(
//         {brand}
//     )

// }

