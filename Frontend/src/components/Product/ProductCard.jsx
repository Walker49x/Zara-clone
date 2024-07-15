import React from "react";
import { useNavigate } from 'react-router-dom';
function ProductCard({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${item._id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-4 cursor-pointer"
    >
      <div className="relative " style={{ height: '500px'}}>
        <img
          className="absolute h-full w-full object-cover"
          src={item.imageUrl || 'https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70'}
          alt="Product"
        />
        <img
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 hover:opacity-100"
          src={item.hoverImageUrl || 'https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70'}
          alt="Product Hover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
        <p className="text-gray-700 mt-2">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="flex justify-between mt-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 rounded-full">
            {item.price}
          </span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 rounded-full">
            Products
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
