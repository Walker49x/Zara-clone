import React from 'react'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from './Cart_context';

const CartItem = ({title,imageUrl,price,quantity,amount,_id}) => {
  const {removeItem, setDecrease, setIncrement} = useCartContext();  
//   const setDecrease = () => {
//     // amount>1 ? setAmount(amount-1): setAmount(1);
//   };

//   const setIncrease = () => {
//     // amount<10 ? setAmount(amount+1): setAmount(10);
//   };  
  return (
    <div className="cart-heading flex  items-center py-2 border-b border-gray-300">
        <div className="cart-image-name flex-1 flex items-center">
            <div className="w-16 h-20 mr-4">
                <figure >
                    <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className=" text-left">
                <p>{title}</p>
            </div>
        </div>
        <div className="cart-hide flex-1 text-center">
            <p>{price}</p>
        </div>
        <div className="flex-1 text-center">
         <CartAmountToggle
             amount={amount}
             setDecrease={() => setDecrease(_id)}
             setIncrease={() => setIncrement(_id)}
          />
        </div>
        <div className="cart-hide flex-1 text-center">
          <p>{price * amount}</p>
        </div>
        <div className="flex-1 text-center">
          <FaTrash className="remove_icon mx-auto" onClick={() => removeItem(_id)}/>
        </div>
    </div>
  )
}

export default CartItem