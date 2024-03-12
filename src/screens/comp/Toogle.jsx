import React from 'react'
import Footer from '../footer/Footer'
import mars1 from '../../assets/mars1.jpg'
import { NavLink } from 'react-router-dom'
import useTheme from '../../context/contextprovider'
import { Tooltip } from 'flowbite-react'

function Toogle() {
    const { ThemeHandler,mode,toggled,ToggleHandler } = useTheme()
    return (
        <div>
            <div className="h-[100vh] space-y-6 ">
                <div className=" flex justify-between shadow-lg p-2">
                    <div className="  ">
                        <img src={mars1} className=' w-8 rounded-full ' alt="" />
                    </div>
                    <div className=" flex items-center space-x-4">
                    <Tooltip className=' lg:block hidden ' style={`${mode=="dark"?"light":"dark"}`} content={<h1 className=' '> {mode=="dark"?"Light Mode":"Dark Mode"} </h1>}  placement='bottom' >
                        <span onClick={ThemeHandler} className=" flex items-center justify-center
                        material-symbols-rounded  cursor-pointer  lg:hover:scale-[2] lg:scale-[1.8] scale-[1.3]  transition-all duration-200 ">
                            {mode!="dark"?"dark":"light"}_mode
                        </span>
                        </Tooltip>
                        <span onClick={ToggleHandler} className=" border text-[20px] dark:text-white text-black border-black dark:border-white rounded-full h-6  w-6 flex items-center justify-center   text-2xl material-symbols-rounded">
                            close
                        </span>
                        </div>
                </div>
                <div className=" h-[50%] flex items-center justify-center">
                    <ul className='   items-center flex flex-col  space-y-3 text-[19px]   uppercase   '>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-600" : "dark:text-white text-black"} `}> Home  </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-red-600" : "dark:text-white text-black"} `}> About </NavLink>
                        <NavLink to="/gallery" className={({ isActive }) => `${isActive ? "text-red-600" : "dark:text-white text-black"} `}> Gallery  </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `${isActive ? "text-red-600" : "dark:text-white text-black"} `}> Projects  </NavLink>
                        <NavLink to='/teams' className={({ isActive }) => `${isActive ? "text-red-600" : "dark:text-white text-black"} `}> The Team  </NavLink>
                    </ul>


                </div>
                <div className=""> <Footer /> </div>

            </div>

        </div>
    )
}

export default Toogle
