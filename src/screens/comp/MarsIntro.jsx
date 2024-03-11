import React, { useEffect } from 'react'
import introImg from '../../assets/intro.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


function MarsIntro() {
  useEffect(()=>{
    AOS.init(
      
      {duration:1000}
    )

  })
  
  return (
   <>
   <div>
    <div className="div">
      <div className=" w-full relative lg:h-36 h-20 overflow-hidden">
        <img src={introImg} className=' w-full  ' alt="" />
        

      <div className=" flex flex-col absolute lg:space-y-2 top-[12%] lg:top-[40%] left-[26%] lg:left-[40%]  text-white">
        
        <span className=' lg:text-4xl text-2xl font-bold '>MaRS Intro</span>
        <span className=' uppercase'> july 18,2018 </span>
        
        </div>
      </div>
    </div>
   <div className='lg:flex w-full   items-center  lg:space-x-11 justify-between p-4'>
        <div  className={`relative lg:h-[500px] lg:w-full  overflow-hidden`}>
      <iframe
        title="YouTube Video"
        className={`w-full h-full`}
        src={`https://www.youtube.com/embed/PvWMsGE5gDQ`}
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >hello </iframe>
    </div>
    
      <div>
      <div className=" flex flex-col items-start justify-center text-[16px] text-justify   dark:text-white text-black   p-3 lg:text-[28px]">
        <p className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold '>Hope you are enjoying your stay at IITR. The premier Robotics group of IITR welcomes you all to R-Land.</p> <br />
        <p  data-aos="fade-right" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '> Models and Robotics Section a.k.a. MaRS is a group open for all Robotics enthusiasts and fanatics wanting to learn, innovate and create things that make life simpler. Hoping that you all are also too excited about making your idea or Robotic fantasy real here.</p> <br />
        <p data-aos="fade-left" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '>All about Models and Robotics Section in 1 minutes. What we do and how we do? The cool and interesting robots made by us so far.</p> <br />
        <p data-aos="fade-right" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '>Hope to see yo at Intro talk of MaRS (Models and Robotics Section).</p>
      </div>
      </div>
    </div>
    <div data-aos="fade-left" className=" px-4 pb-4  flex flex-col items-center">
     <div className=" flex flex-col items-start">
     <div className="">
        <span className=' uppercase font-thin text-[18px] dark:text-white space-x-2 '>share</span>
        <span className=' text-blue-500 dark:text-white '> <i className="fa-brands fa-facebook"></i></span>
        <span className='text-blue-500 dark:text-white '> <i className="fa-solid  fa-envelope"></i> </span>
      </div>
      <div className=" space-x-2">
        <span className=' dark:text-white uppercase  text-[18px] font-thin '> tags</span>
        <span className=' px-2 border text-[15px] dark:border-white border-blue-400  rounded-xl  text-blue-500 '><i className=" dark:text-red-600 fa-solid fa-tag"></i> 
        <span className='text-blue-500  dark:text-white '> Intro Video </span> </span>
        <span className=' px-2 border dark:border-white text-[15px] border-blue-400 rounded-xl  text-blue-500 '><i className="
        dark:text-red-600 fa-solid fa-tag"></i> 
        <span className='text-blue-500 dark:text-white'> MaRS </span> </span>
        
      </div>
     </div>
    </div>


   </div>

   </>
  )
}

export default MarsIntro
