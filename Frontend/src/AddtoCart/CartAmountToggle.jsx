import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

function CartAmountToggle({ amount, setIncrease, setDecrease }) {
  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={() => setDecrease()} 
        className=" text-gray-700  p-2 hover:bg-gray-300 transition duration-200"
      >
        <FaMinus />
      </button>
      <div className="text-lg font-semibold text-gray-900">
        {amount}
      </div>
      <button 
        onClick={() => setIncrease()} 
        className=" text-gray-700  p-2 hover:bg-gray-300 transition duration-200"
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default CartAmountToggle;
