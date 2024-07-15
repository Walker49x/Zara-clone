import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './ProductDetails/ProductContext.jsx'
import { CartProvider } from './AddtoCart/Cart_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
       <AppProvider>
          <CartProvider>
             <App />
          </CartProvider>
       </AppProvider>
      
    </BrowserRouter>
    
 
)
