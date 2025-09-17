// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">E-Comm</h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <p className="text-sm mb-4">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400">FB</a>
              <a href="#" className="text-blue-400">TW</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <p className="text-sm">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
          
          
          <div className="md:col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
                <h4 className="font-bold text-white mb-4">Information</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Information</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-4">Service</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Information</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                </ul>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <span>WESTERN UNION</span>
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;