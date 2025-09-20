import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialsData = [
  {
    id:1,
    name: "Srijit",
    description: "I love the coffee here! The aroma and taste are simply unmatched. It's my go-to place for a perfect cup of coffee.",
    img: "https://picsum.photos/101/101",
  },
{
  id:2,
  name: "Sohom",
  description: "The coffee at this place is exceptional! The rich flavor and perfect brewing make it my favorite spot. Highly recommend!",
  img: "https://picsum.photos/102/102",

},
{
  id:3,
  name: "Sagnik",
  description: "A delightful coffee experience! The quality of the beans and the skill of the baristas shine through in every cup.",
  img: "https://picsum.photos/103/103",

},
]

const Testimonials= () => {
  const settings = {
   dots: true,
   arrows: true,
   infinite: true,
   speed: 1000,
   slideToScroll:1,
   autoplay:true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           
        },
      },
    
    ],

   

  }
  return (
    <div className='py-14 mb-10 '>
        <div className='container'>
       {/*header section*/}
       <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold font-serif font-cursive text-gray-800 '>
          Testimonials 
        </h1>
       </div>

       {/*testimonial section*/}
       <Slider{...settings}>
        {TestimonialsData.map((data) => {
          return(
            <div className='my-6' key={data.id}>
              <div className='flex flex-col gap-2 shadow-lg py-8 px-6 mx-4 mb-2 rounded-xl bg-orange-100      relative'>
                {/* image section */}
                <div className='mb-4'>
                  <img
                   src={data.img}
                   alt="" 
                   className='rounded-full w-20 h-20'/>

                </div>
                {/* content section */}
                <div className='flex flex-col items-center gap-4'>
                  <div className='space-y-3'>
                   <h1 className='text-xl font-bold text-black font-serif font-cursive'>
                      {data.name}
                    </h1>
                    <p className='text-gray-600 text-sm '>
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
       </Slider>
        </div>
    </div>
  );
};

export default Testimonials;