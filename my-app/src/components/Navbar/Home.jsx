  import React from 'react';
import pic from '../../assets/coffee3new.png';

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] text-white bg-brandDark font-medium flex items-center">
      <div className="container grid grid-cols-1
      sm:grid-cols-2 items-center gap-8 px-4">
        
        {/* Text Section */}
        <div className="sm:translate-y-[-30px] sm:translate-x-[20px] font-cursive">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif  sm:mb-24 leading-[1.1] ">
            Crafting the world's finest{' '}
            <span className= " text-yellow-400 font-bonheur gradient-text-animated ">Coffee</span> one cup at a time.
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center  sm:justify-end ">
          <img
            src={pic}
            alt="Coffee Cup"
            className="w-[280px]   lg:w-[400px] h-auto object-contain sm:scale-105  spin lg:mr-24 lg:mb-12 "
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home; 
