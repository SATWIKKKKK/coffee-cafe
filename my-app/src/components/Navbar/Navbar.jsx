import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import Logo from "../../assets/pngwing.com.png";
import Logo2 from "../../assets/coffee2.png";


const Menus = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Services", link: "#services" },
  { id: 3, name: "About", link: "#about" },
];

function Navbar() {
  return (
    <div className="bg-amber-950 text-yellow-400">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          
         
          <div className="flex items-center ">
            <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
            <a href="#" className="inline-block font-bonheur text-3xl sm:text-5xl tracking-tight   leading-[1.3] overflow-visible">
              Coffee Cafe
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex  items-center gap-6 tracking-wider sm:-ml-32">
            {Menus.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className=" inline-block hover:scale-110  font-bonheur text-xl sm:text-4xl hover:text-white hover:underline transition-all duration-200  "
              >
                {item.name}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-2 sm:gap-4">
           
            <button className="hidden sm:flex items-center justify-center gap-2 font-bonheur text-xl sm:text-2xl lg:text-4xl px-2 sm:px-4 py-2 rounded-full hover:text-white hover:underline hover:scale-110 transition-all duration-200">
              Order
            </button>
            
           
            <SignedOut>
              <div className="flex items-center gap-2">
                <SignInButton>
                  <button className="bg-transparent border border-yellow-400 text-yellow-400 font-bonheur text-sm sm:text-xl px-3 sm:px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-amber-950 transition-colors duration-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="bg-yellow-400 text-amber-950 font-bonheur text-sm sm:text-xl px-3 sm:px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
             
            </SignedIn>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar; 
