import React from 'react'
import bannerimg from '../assets/coffee5.png'
import BgTexture from '../assets/10026.jpg'
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgimg = {
  backgroundImage: `url(${BgTexture})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
};

function Banner() {
  return (
    <div style={bgimg}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image Section */}
          <div className="text-center md:text-left">
            <img
              src={bannerimg}
              alt="Coffee"
              className="w-[180px] sm:w-[240px] md:w-[300px] mx-auto  spin object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cursive leading-tight">
              Premium Blend Coffee
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed tracking-wide">
              Premium blend coffee offers a rich, smooth flavor with carefully selected beans from top regions. Expertly roasted, it delivers a balanced aroma, deep body, and a luxurious coffee experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Icons Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GrSecure className="h-10 w-10 p-2 rounded-full bg-red-200" />
                  <span className="text-sm sm:text-base">Premium Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <IoFastFood className="h-10 w-10 p-2 rounded-full bg-orange-200" />
                  <span className="text-sm sm:text-base">Hot Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <GiFoodTruck className="h-10 w-10 p-2 rounded-full bg-yellow-200" />
                  <span className="text-sm sm:text-base">Cold Coffee</span>
                </div>
              </div>

              {/* Side Text */}
              <div data-aos="slide-left" className="border-l-4 border-red-950 pl-5 space-y-2">
                <h1 className="text-lg sm:text-xl font-semibold font-cursive">Oh, I ❤️ coffee!</h1>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Coffee is a beloved beverage enjoyed by millions around the world for its rich aroma, bold flavor, and energizing effects.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner;
