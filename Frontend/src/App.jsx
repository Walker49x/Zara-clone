import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Freebook from './components/Freebook';
import Product from './components/Product/Product';
import Home from './home/Home';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductDetails1 from './ProductDetails/ProductDetails1';
import { Routes,Route, BrowserRouter } from "react-router-dom"
import Product1 from './components/Product/Product1';
import { AppProvider } from './ProductDetails/ProductContext';
import Cart from './AddtoCart/Cart';
import Cart1 from './AddtoCart/Cart1';
import { Auth0Provider } from '@auth0/auth0-react';


function App() {
  return (<>
   {/* <Home/> */}
   {/* <Course/> */}
   {/* <Product/> */}
   {/* <ProductDetails1/> */}
   <Auth0Provider
     domain="dev-nhoui5myvx6xtjj8.us.auth0.com"
     clientId="XqVM0jZsOAV6F1kFhQHG22BWfwZmgrY9"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
   >
     <AppProvider > {/* Wrap your app with Provider and pass the store */}
        {/* Wrap Routes with BrowserRouter */}
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/product/:productId" element={<ProductDetails1 />} />
           <Route path="/Product1" element={<Product1 />} />
           <Route path="/cart" element={<Cart1/>}/>
         </Routes>

     </AppProvider>
   </Auth0Provider>,

  </>
    
  )
}

export default App;