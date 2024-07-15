import React from 'react'
import CartAmountToggle from './CartAmountToggle';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './Cart_context';

function AddToCart({product}) {
  const{addToCart} = useCartContext();  
  const[amount, setAmount]= useState(1);  
  
  const setDecrease = () => {
    amount>1 ? setAmount(amount-1): setAmount(1);
  };
  
  const setIncrease = () => {
    amount<10 ? setAmount(amount+1): setAmount(10);
  };
  return(
    <>
       <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
       />

       <NavLink to="/cart" onClick={()=>addToCart(amount,product)}>
           <button className='btn'>Add to Cart</button>
       </NavLink>
    </>
  
  );
}

export default AddToCart