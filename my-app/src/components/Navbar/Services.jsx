import React from 'react'
import img from '../../assets/coffee3new.png'; // Assuming you have an image at this path

const ServicesData = [
    {
        id:1,
        img: img,
        title: "Espresso",
        description: "A strong and bold coffee made by forcing hot water through finely-ground coffee beans.",
        aosDelay: "100",
    },
    {
   id:2,
        img: img,
        title: "Cappuccino",
        description: "A creamy coffee drink made with equal parts espresso, steamed milk, and frothed milk.",
        aosDelay: "300",
    },
    {
        id:3,
        img: img,
        title: "Latte",
        description: "A smooth and milky coffee drink made with espresso and steamed milk, topped with a light layer of foam.",
        aosDelay: "500",

    }
]

function Services() {
  return (
    <>
    <span id='services'></span>
    <div className='py-20'>
      <div className='container'>
        {/*header  title */}
        <div className='text-center mb-20'>
          <h1 className='text-center font-serif  text-5xl font-bold -mt-8 text-gray-800'>
            Best 
            <span className=' text-yellow-500 font-bonheur mx-4  text-6xl '>Coffee</span>
             For You!
          </h1>
        </div>
        {/*Services Card Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
          {ServicesData.map((data, index) => {
            return (
              <div
                key={index}
                className='rounded-2xl bg-white hover:bg-red-950 hover:text-white  shadow-xl duration-300 max-w-[300px] group-relative'
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                {/*img Content */}
                <div className='h-[122px]'>
                  <img src={data.img} alt = "" 
                  className='max-w-[200px] block mx-auto transform duration-300 -translate-y-14 group-hover:scale-150 group-hover:rotate-6'/>
                </div>
                {/*Text Content */}
                <div className='p-5 text-center space-y-2'>
                    <h1 className='text-xl font-bold'>{data.title}</h1>
                    <h2 className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</h2>
                </div>
              </div>
            );
          })}
   
      </div>
    </div>
    </div>
    </>
  );
}

export default Services;