
import { Children, createContext, useContext, useReducer } from "react";
const AppContext= createContext();
import axios from "axios";
import reducer from '../home/state/Producct/ProductReducer'

const initialState = {
    isLoading: false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}

const AppProvider = ({ children }) => {
    const[state,dispatch]=useReducer(reducer, initialState);

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url)
            const products= await res.data;
            dispatch({type: "SET_API_DATA",payload:products})
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
    }

    const getSingleProduct = async (url)=> {
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleProduct= await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT",payload:singleProduct})
        } catch (error) {
            dispatch({type: "SET_SINGLE_ERROR"})
        }
    }



    return (
        <AppContext.Provider value={{...state,getSingleProduct}}>
         {children}
        </AppContext.Provider>
    );
}

const useProductContext = () => {
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext}