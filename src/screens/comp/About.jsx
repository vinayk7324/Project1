import React ,{useEffect} from 'react'
import AboutBanner from '../../assets/aboutBanner.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    AOS.init(
      
      {duration:1000}
    )

  })
  return (
    <div>
      <div className="">
        <div className=" relative lg:h-32 h-20  overflow-hidden ">
          <img src={AboutBanner} className=' blur-sm ' alt="" />
          <span className=' absolute uppercase  top-6 left-20 lg:top-[20%] lg:left-[40%] font-bold lg:text-5xl text-2xl text-white  '>about </span>
        </div>
      </div>
       <div className=" lg:mt-8 mt-4 flex flex-col lg:flex-row  space-x-4 items-center justify-center pb-4">
       <div data-aos="fade-right"  className={`relative   lg:h-[500px] lg:w-[800px]  overflow-hidden`}>
      <iframe
        title="YouTube Video"
        className={`lg:w-full  lg:h-full`}
        src={`https://www.youtube.com/embed/jT3ANosarUQ`}
         
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >hello </iframe>
    </div> 
    <div className=" text-justify lg:w-[50%] dark:text-white text-black flex flex-col  lg:text-[23px] ">
      <p data-aos="fade-left" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '>
      There is a saying – “Think beyond your thoughts.” And this is just the apt place to implement it. This section is a perfect place for all the robot enthusiasts. This is the place where one can actually get the feeling of ‘T’ in “IIT”!
      </p>   <br />
      
      <p  data-aos="fade-right" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '>
      The Models and Robotics Section has been a part of Hobbies Club, IIT Roorkee since the origination of Hobbies Club. This section provides a perfect platform for students to develop their innovative and technical skills such as mechanical, electronics and architectural. This section is a perfect place for transforming his/her imagination into reality.
      </p>
      <br />  
      <p data-aos="fade-left" className='dark:first-letter:text-red-600 first-letter:text-blue-600 first-letter:text-2xl  first-letter:font-bold  '>
      The section has a variety of machinery that is required for the construction of models both static and dynamic. Over the past few years, this section has focused more on the ‘robotics’ part, conducting lectures and workshop on microcontrollers, sensors, actuators, etc.. Also,here first yearites get a chance to build their bots independently. These bots are then displayed in “Srishti” – the Annual Exhibition of Hobbies Club, and get a lot of appreciation from various professors, and other visitors.
      </p>


    </div>
      
       </div>
    </div>
  )
}

export default About
