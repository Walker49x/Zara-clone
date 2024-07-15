import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="p-4" onClick={handleCardClick}>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
        <figure className="h-96 overflow-hidden">
          <img className="w-full h-full object-cover" src={item.imageUrl} alt={item.name} />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
          <p className="text-gray-500 mt-2">{item.title}</p>
          <div className="mt-4">
            <span className="text-gray-800 font-bold">${item.price}</span>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
