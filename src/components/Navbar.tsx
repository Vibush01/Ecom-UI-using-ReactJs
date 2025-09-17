import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            E-Comm
          </div>
          
          <ul className="hidden md:flex items-center space-x-8 font-semibold">
            <li><a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">HOME</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">BAG</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">SNEAKERS</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">BELT</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">CONTACT</a></li>
          </ul>

          <div className="flex items-center space-x-4">
            <span className="cursor-pointer text-gray-600">🛒</span>
            <span className="text-gray-600">Items: $0.00</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;