// import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from './Actiontype'


// const initialState={
//     products: [],

//     product:null,

//     loading:false,

//     error:null
//  }


// export const customerProductReducer=(state=initialState, action)=>{
//     switch(action.type){

//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:
//             return {...state, loading:true, error:null}



//         case FIND_PRODUCTS_SUCCESS:
//             return {...state, loading:false, error: null, products:action.payload}

//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return {...state, loading:false, error: null, product:action.payload}

//         case FIND_PRODUCTS_FAILURE:
//         case FIND_PRODUCT_BY_ID_FAILURE:
//             return{...state,loading:false,error:action.payload}
//         default:
//             return state;
//     }
// }
const ProductReducer = (state,action) => {
    switch(action.type){
        case "SET_LOADING":
           return{
            ...state,
            isLoading:true
           };

        default:
            return state   

        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }  
        case "SET_API_DATA":
            const featureData= action.payload.filter((curElem)=>{
                return curElem.brand==='Manthan'

            })

            return{
                ...state,
                isLoading: false,
                products:action.payload,
                featureProducts:featureData,
            }
        case "SET_SINGLE_LOADING":
        return{
            ...state,
            isSingleLoading:true,
        }     

        case "SET_SINGLE_PRODUCT":
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload
        }  
        
        case "SET_SINGLE_ERROR":
        return{
            ...state,
            isSingleLoading:false,
            isError:true,
        } 
              
    }
    return state;
}

export default ProductReducer;

