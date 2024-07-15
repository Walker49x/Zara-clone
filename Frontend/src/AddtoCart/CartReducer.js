const cartReducer = (state,action) => {
    let cartProduct;
    if(action.type==="ADD_TO_CART"){
        let {amount,product}= action.payload;
        console.log(
            product
        );

        // let cartProduct;

        cartProduct = {
            _id: product._id,
            imageUrl:product.imageUrl,
            amount,
            title:product.title,
            price:product.price,
            quantity:product.quantity
        };

        return {
            ...state,
            cart: [...state.cart,cartProduct],
        };
    }

    

    if(action.type==="REMOVE_ITEM"){
        let updatedCart = state.cart.filter((curItem)=>curItem._id !== action.payload)
        return{
            ...state,
            cart:updatedCart,
        }
    }

    if(action.type==="CLEAR_CART"){
        return{
            ...state,
            cart:[],
        }
    }

    if(action.type==="CLEAR_TOTAL_PRICE"){
        let total_amount = state.cart.reduce((initialVal,curElem)=>{
            let {amount,price}= curElem;    

            initialVal = initialVal + price * amount;
            return initialVal;
        },0)

        return{
            ...state,
            total_amount,
        }
    }

    

    // LU SEL LITE LIIciellmeli allu decrement

    if(action.type === "SET_DECREMENT"){
       let updatedProduct = state.cart.map((curElem) => {
           if (curElem._id === action.payload) {
               let decAmount = curElem.amount - 1;
               decAmount = decAmount < 1 ? 1 : decAmount; // Ensure amount doesn't go below 1
               return {
                   ...curElem,
                   amount: decAmount,
               };
           }
           return curElem;
       });

        return {... state, cart: updatedProduct };
    }

    if(action.type ==="SET_INCREMENT"){
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem._id === action.payload) {
                let incAmount = curElem.amount + 1;
                return {
                    ...curElem,
                    amount: incAmount,
                };
            }
            return curElem;
        });

        return {
            ...state,
            cart: updatedProduct,
        };
    }

   
    return state;
};

export default cartReducer;