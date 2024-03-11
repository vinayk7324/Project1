
import { Carousel } from 'flowbite-react';
import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item5 from '../../assets/item5.jpg'
import item4 from '../../assets/item4.jpg'
import introImg from '../../assets/intro.png'
import Srishti from '../../assets/Srishti.jpg'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Home() {
  useEffect(()=>{
    AOS.init(
      
      {duration:1000}
    )

  })
  return (<>
  <div className='  mb-3 '>
    <div className="lg:h-[90vh] h-[30vh]   relative   ">
      <div className=" z-[1] text-[10px]   h-[50%] top-[5%] left-[%] p-2 text-justify absolute lg:w-[50%] lg:top-[20%]  lg:left-[30%]  lg:text-3xl uppercase first-letter:text-2xl text-white dark:first-letter:text-red-500 lg:first-letter:text-8xl first-letter:text-blue-600 first-letter:font-bold text-wrap  ">
        We provide a platform for all the robotics’ enthusiasts to pursue their interest in a variety of projects which may be just for fun or something which may really solve an existing problem with real life application
      </div>
      <Carousel className=''>
        <img src={item1} className='h-full w-full rounded-none ' alt="..." />
        <img src={item2} className='h-full w-full rounded-none ' alt="..." />
        <img src={item3} className='h-full w-full rounded-none ' alt="..." />
        <img src={item4} className='h-full w-full rounded-none ' alt="..." />
        <img src={item5} className='h-full w-full rounded-none ' alt="..." />
      </Carousel>
    </div>

    <NavLink  to="/marsintro"> <div className=" lg:flex  items-center p-3">
    <div data-aos="fade-right" className=" w-full items-center flex justify-center " >
        <img src={introImg} className='  lg:rounded-xl rounded-lg lg:h-50% ' alt="" />
        <span className=" absolute text-white lg:text-8xl  material-symbols-rounded">
          play_circle
        </span>

      </div>
    <div className=" lg:flex lg:flex-col lg:w-[40%] items-center">
    
      <div data-aos="fade-right" className=" flex flex-col ">
        <span  className=' text-black lg:text-4xl text-[20px] font-bold dark:text-white '>MaRS Intro Video </span>
        <span className=' uppercase dark:text-white text-gray-600'> july 19 ,2020 </span>
      </div>
      <div data-aos="fade-left"  className=" text-justify lg:text-2xl first-letter:text-red-600 first-letter:font-bold first-letter:text-3xl dark:text-white  ">
      Hope you are enjoying your stay at IITR. The premier Robotics group of IITR welcomes you all to R-Land. Models and Robotics Section a.k.a. MaRS is a group open for all Robotics enthusiasts and fanatics wanting to learn, innovate and create things that make life simpler. Hoping that you all are also too excited about making your idea or Robotic fantasy real here. All about Models and Robotics Section in 1 minutes. What we do and how we do? The cool and interesting robots made by us so far.


      </div>
    </div>
      
    </div></NavLink>
    <hr />

    <div className=" lg:flex items-center ps-[4%] pt-2 pe-3">
      <div className=" w-full">
        <img src={Srishti} data-aos="fade-right" className=' lg:w-[94%] lg:h-[500px] rounded-lg ' alt="" />
      </div>
      <div className=" lg:w-[40%]  lg:flex items-center flex-col ">
        <div data-aos="fade-left" className="">
          <div className=" dark:text-white lg:text-4xl font-bold "> Srishti 2K18 Aftermovie</div>
            <div className=" dark:text-white uppercase"> may 5,2018</div>
          
        </div>
        <div data-aos="fade-right" className="  dark:text-white text-justify lg:text-2xl first-letter:font-bold first-letter:text-3xl first-letter:text-red-500 ">
        Srishti '18 has been a huge success because of the hard-work of various students. It was the audience which was the encouragement for all of us. This is the aftermovie of Srishti'18 showcasing all the projects done by MaRS in Srishti'18. See you @MaRS in Srishti 2019 with more awesome projects.

        </div>
      </div>
    </div>
    </div>
  </>

  );
}
export default Home
