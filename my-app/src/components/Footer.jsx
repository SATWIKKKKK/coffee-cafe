import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
 <>
     
      
      <footer className="relative z-10 bg-brandDark text-white">
        <div className="container mx-auto py-8 px-4">
          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h4 className="text-xl font-serif text-yellow-400 mb-4">About Us</h4>
              <p className="text-gray-300 text-sm">
                Best in the town. Period.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-serif text-yellow-400 mb-4 ">Quick Links</h4>
              <ul className="space-y-2 ml-0.5">
                <li><a href="#home" className="text-gray-300 hover:text-yellow-400 hover:scale-105">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-yellow-400 hover:scale-105">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-yellow-400 hover:scale-105">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 hover:scale-105">Reviews</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-serif text-yellow-400 mb-4">Contact Us</h4>
              <ul className="text-gray-300 space-y-2">
                <li>123 Coffee Street</li>
                <li>Kolkata, West Bengal</li>
               
                <li>Email: satwikchandra65@gmail.com</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-serif text-yellow-400 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <p className="text-center text-gray-300 text-sm">
              © {new Date().getFullYear()} Coffee Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
   </>
  );
};

export default Footer;;