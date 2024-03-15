import React from 'react'
import logo from '../../assets/mars1.jpg'
import useTheme from './../../context/contextprovider';
import { Tooltip } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import Toogle from '../comp/Toogle';


function Navbar() {
    const { ThemeHandler,mode,toggled,ToggleHandler } = useTheme()
    return (
        <>
 
            <div className=" fixed z-[2]  flex items-center justify-between  shadow-md w-full   bg-white dark:text-white text-black dark:bg-gray-700    p-2  ">
                <div className="logo  lg:flex items-center    space-x-2">
                    <img src={logo} className='lg:h-12 lg:w-12 rounded-full  h-8 w-8' alt="" />
                    <div className='  flex items-baseline'>
                    <span className=' dark:first-letter:text-red-500   lg:text-xl  lg:block hidden first-letter:text-blue-600 lg:first-letter:text-4xl first-letter:text-3xl  first-letter:font-bold uppercase'>
                        Models</span>
                         <span className='dark:first-letter:text-red-500  lg:text-xl  lg:block hidden first-letter:text-blue-600 lg:first-letter:text-4xl first-letter:text-3xl  first-letter:font-bold uppercase '>and</span>
                          <span className='dark:first-letter:text-red-500  lg:text-xl  lg:block hidden first-letter:text-blue-600 lg:first-letter:text-4xl first-letter:text-3xl  first-letter:font-bold uppercase' > Robotics</span>
                           <span className='dark:first-letter:text-red-500  lg:text-xl  lg:block hidden first-letter:text-blue-600 lg:first-letter:text-4xl first-letter:text-3xl  first-letter:font-bold uppercase'>
                        Section    </span> 
                        <span className=' align-baseline hidden lg:block lg:text-xl '>,IIT ROORKEE</span>
                    </div> 
                   

                </div>
                <div className=" lg:px-2 flex lg:space-x-6     text-xl font-semibold items-center ">
                    <div className="togglebar space-x-4 flex items-center ">
                        
                        <Tooltip className=' lg:block hidden ' style={`${mode=="dark"?"light":"dark"}`} content={<h1 className=' '> {mode=="dark"?"Light Mode":"Dark Mode"} </h1>}  placement='bottom' >
                        <span onClick={ThemeHandler} className=" flex items-center justify-center
                        material-symbols-rounded  cursor-pointer  lg:hover:scale-[2] lg:scale-[1.8] scale-[1.3]  transition-all duration-200 ">
                            {mode!="dark"?"dark":"light"}_mode
                        </span>
                        </Tooltip>
                        
                        <span onClick={ToggleHandler} className="material-symbols-outlined lg:hidden scale-[1.3]">
                            menu
                        </span>
                       

                    </div>
                    <div className= {` ${toggled?" -translate-y-[100%] ":" translate-y-0 "} transition-all duration-700 lg:hidden  absolute top-0 left-0 dark:bg-[#121212dd] bg-[#f4f2f2dd]`}>
                            <Toogle/>
                        </div>
                    
                    <ul className=' lg:flex-row hidden lg:block lg:space-x-3   items-center     uppercase   '>
                        <NavLink to="/" className={({isActive})=>`${isActive?"text-red-600":"dark:text-white text-black"} `}> Home  </NavLink>
                        <NavLink to="/about" className={({isActive})=>`${isActive?"text-red-600":"dark:text-white text-black"} `}> About </NavLink>
                        <NavLink to="/gallery" className={({isActive})=>`${isActive?"text-red-600":"dark:text-white text-black"} `}> Gallery  </NavLink>
                        <NavLink to="/projects" className={({isActive})=>`${isActive?"text-red-600":"dark:text-white text-black"} `}> Projects  </NavLink>
                        <NavLink to='/teams' className={({isActive})=>`${isActive?"text-red-600":"dark:text-white text-black"} `}> The Team  </NavLink>
                    </ul>
                  


                </div>
            </div>


        </>
    )
}

export default Navbar
