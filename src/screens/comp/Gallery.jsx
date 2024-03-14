import React, { useEffect } from 'react'
import Gp1 from '../../assets/g1.jpeg'
import Gp2 from '../../assets/g2.jpeg'
import Gp3 from '../../assets/g3.jpeg'
import Gp4 from '../../assets/g4.jpeg'
import Gp5 from '../../assets/g5.jpeg'
import Gp6 from '../../assets/g6.jpeg'
import Gp7 from '../../assets/g7.jpeg'
import Gp8 from '../../assets/g8.jpeg'
import Gp9 from '../../assets/g9.jpeg'
import Gp10 from '../../assets/g10.jpeg'
import Gp11 from '../../assets/g11.jpeg'
import Gp12 from '../../assets/g12.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Gallery() {
  useEffect(()=>{
    AOS.init({duration:800})
  })
  return (
    <div className=" ">
      <div className="GalleryBanner">
        <div className=" relative h-14  lg:h-20 overflow-hidden">
          <div className="absolute top-4 left-24 lg:left-[45%] lg:text-5xl  text-2xl dark:text-white text-black font-bold  "> Gallery  </div>
          <img src={Gp1} alt="" className=' lg:hidden opacity-30' />
          {/* <img src={Gp1} alt="" className=' w-[50%] h-full opacity-30' /> */}
        </div>
        
         </div>
      <div className="grid p-3 grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <img src={Gp1} />
                <img src={Gp2} />
                <img src={Gp3} />
            </div>
            <div className="grid gap-4">
                <img src={Gp4} />
                <img src={Gp5} />
                <img src={Gp6} />
            </div>
            <div className="grid gap-4">
                <img data-aos="fade-up-right" src={Gp7} />
                <img data-aos="fade-up-right" src={Gp8} />
                <img data-aos="fade-up-right" src={Gp9} />
            </div>
            <div className="grid gap-4">
                <img  data-aos="fade-up-left" src={Gp10}/>
                <img data-aos="fade-up-left" src={Gp11} />
                <img data-aos="fade-up-left" src={Gp12} />
            </div>
        </div>
    </div>
  )
}

export default Gallery
