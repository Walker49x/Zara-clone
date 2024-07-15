import React, { useState } from 'react';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated ,logout,user } = useAuth0();

  const navItems = (
    <>
       <div className="flex justify-end space-x-6 mt-2 ml-12">
         <li className="group relative">
           <a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Men</a>
           <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
             {/* Submenu items for Men */}
             <li><a href="/Product1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">BEST SELLERS</a>
               <ul className="space-y-2">
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">LINEN</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SHIRTS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">T-SHIRTS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">POLO SHIRTS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SHORTS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">TROUSERS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">JEANS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SUITS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SWIMWEAR</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">CROCHET</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">JACKETS | COATS</a></li>
               </ul>
             </li>
           </ul>
         </li>
         <li className="group relative">
           <a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Women</a>
           <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
             {/* Submenu items for Women */}
             <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Clothing</a></li>
             <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</a></li>
             <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Brands</a></li>
             <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">JEANS</a>
               <ul className="space-y-2">
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">TROUSERS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SHOES</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">BAGS</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">JACKETS | TRENCH</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">KNITWEAR</a></li>
                 <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">WAISTCOATS</a></li>
               </ul>
             </li>
           </ul>
         </li>
         <li><a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Company</a></li>
         <li><a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Stores</a></li>
         <li><a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Heads</a></li>
       </div>
    </>
  );

  return (
    <div className="bg-white shadow-md z-50 relative">
      <div className="max-w-screen-2xl container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex flex-row items-start space-x-4 mb-2 font-sans-serif">
              <a href="#" className="text-gray-600 hover:text-black transition duration-300 ease-in-out">Customer Service</a>
              <a href="#" className="text-gray-600 hover:text-black transition duration-300 ease-in-out">Newsletter</a>
              <a href="#" className="text-gray-600 hover:text-black transition duration-300 ease-in-out">Find a store</a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block lg:hidden focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <a href="#" className="text-4xl font-bold text-gray-800 hover:text-black transition duration-300 ease-in-out ml-20 ">Zara</a>
            <ul className="flex space-x-6">
              {navItems}
            </ul>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {/* <a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out">Sign in</a> */}
            <a>{isAuthenticated && <p> {user.name} </p>}</a>
            <a>
              {
                isAuthenticated ? (
                  <button className="text-gray-800 hover:text-black transition duration-300 ease-in-out" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                ) : (
                  <button className="text-gray-800 hover:text-black transition duration-300 ease-in-out" onClick={() => loginWithRedirect()}>
                    Sign In
                  </button>
                )
              }
            </a>

           
           
            <a href="#" className="text-gray-800 hover:text-black transition duration-300 ease-in-out flex items-center space-x-1">
              <FaHeart className="text-gray-600" />
              <span>Favourites</span>
            </a>
            <div className="relative">
              <input
                type="text"
                className="border-b-2 border-gray-200 py-2 pr-10 pl-4 focus:outline-none focus:border-black transition duration-300 ease-in-out"
                placeholder="Search"
              />
              <button className="absolute inset-y-0 right-0 pr-3 py-2 focus:outline-none">
                <FaSearch className="text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 mt-4 px-4">
          {navItems}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
