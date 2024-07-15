import React from 'react';
import { useCartContext } from './Cart_context';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (<h1 className="text-center mt-20 text-2xl font-semibold text-gray-700">
      NO ITEM IN CART
    </h1>);
  }

  return (
    <>
       <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 max-w-4xl">
         <div className="cart_heading flex justify-between items-center py-2 border-b border-gray-300">
           <p className="flex-1 text-center text-gray-600">Item</p>
           <p className="cart-hide flex-1 text-center text-gray-600">Price</p>
           <p className="flex-1 text-center text-gray-600">Quantity</p>
           <p className="cart-hide flex-1 text-center text-gray-600">Subtotal</p>
           <p className="flex-1 text-center text-gray-600">Remove</p>
         </div>

         <div className="cart-item mt-4">
           {cart.map((curElem) => {
             return <CartItem key={curElem.id} {...curElem} />;
           })}
         </div>

         <div className="cart-two-button flex justify-between mt-4">
           <NavLink to="/Product1">
             <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
               Continue Shopping
             </button>
           </NavLink>
           <button
             onClick={clearCart}
             className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
           >
             Clear Cart
           </button>
         </div>

         <div className="order-total-container flex justify-end mt-8">
           <div className="order-total-box bg-white border border-gray-300 p-6 rounded-lg shadow-md w-full max-w-md">
             <div className="order-total-subdata grid gap-2">
               <div className="grid grid-cols-2 gap-x-4">
                 <p className="text-gray-700 font-medium">Subtotal:</p>
                 <p className="text-gray-900 font-semibold">${total_amount}</p>
               </div>
               <div className="grid grid-cols-2 gap-x-4">
                 <p className="text-gray-700 font-medium">Shipping fee:</p>
                 <p className="text-gray-900 font-semibold">${shipping_fee}</p>
               </div>
               <div className="grid grid-cols-2 gap-x-4 border-t pt-4">
                 <p className="text-gray-700 font-medium">Order Total:</p>
                 <p className="text-gray-900 font-bold">${total_amount + shipping_fee}</p>
               </div>
             </div>
           </div>
         </div>


       </div>
       <Footer/>
    </>
  );
}

export default Cart;
