import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Navbar/Home';
import Services from './components/Navbar/Services';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
offset: 100,
delay:100,
easing: 'ease-in',
duration: 700,

    });

  })
   return (
    <div className='overflow-x-hidden'>
<Navbar/>
<section id="home">
  <Home /> {/* or your top section */}
</section>

<section id="services">
  <Services />
</section>

<section id="about">
  <Banner />
</section>

<section id="contact">
  <Testimonials/>
</section>

<Footer/>
 </div>
  )
}

export default App