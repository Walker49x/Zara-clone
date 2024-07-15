import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-300 py-10 px-5" style={{ height: '530px' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:underline">Help & Contact</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">About H&M</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Pinterest</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-700 mb-4">Sign up for our newsletter to get the latest news and offers.</p>
            <form className="flex justify-center">
              <input
                type="email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter your email"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full pt-6">
          <div className="flex flex-col items-center text-sm text-gray-700 space-y-4">
            <p>&copy; 2024 H&M. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
