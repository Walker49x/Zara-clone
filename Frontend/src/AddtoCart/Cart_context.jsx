import { useEffect, useReducer } from "react";
import reducer from "./CartReducer"
import { createContext,useContext} from "react";

const CartContext = createContext();

const getLocalCartData = () =>{
    let newCartData = localStorage.getItem("thapaCart");
    if (newCartData == []){
        return [];
    }else {
        return JSON.parse(newCartData);
    }
}

const initialState ={
    cart: getLocalCartData(),

    total_item: "",

    total_amount: 0,

    shipping_fee: 50000,
};



const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const addToCart = ( amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: {amount, product}})
  };


  const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT",payload: id})
  }

  const setIncrement = (id) => {
    dispatch({type:"SET_INCREMENT",payload: id})
  }

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",payload: id})
  }
  
  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }

  useEffect(() => {
    dispatch({type:"CLEAR_TOTAL_PRICE"})
    localStorage.setItem("thapaCart",JSON.stringify(state.cart)); 
  }, [state.cart])
  



  return (
    <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrement,}}>
          {children}
    </CartContext.Provider>
  )
}

const useCartContext = () =>{
    return useContext(CartContext);
};

export { CartProvider,useCartContext };