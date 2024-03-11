import React from 'react'

function Footer() {
  return (
    <>
      <hr />
      <div className=" p-4 flex flex-col text-[13px] lg:text-[23px] dark:text-white justify-center items-center space-y-5 ">
        <div className="">
          Copyright&copy;MaRSIITR|Student Technical Council, IIT ROORKEE


        </div>

 
        <div className=" flex items-center justify-center">
          <ul className=' flex space-x-3 font-thin '>
            <li className=' lg:w-12 lg:h-12 w-9 h-9   shadow-lg cursor-pointer dark:text-white text-2xl  border rounded-full flex items-center justify-center'><i className="fa-solid fa-envelope"></i></li>
            <li className='lg:w-12 lg:h-12  w-9 h-9  shadow-lg cursor-pointer dark:text-white text-2xl  border rounded-full flex items-center justify-center '> <i className="fa-brands fa-facebook"></i></li>
            <li className='lg:w-12 lg:h-12  w-9 h-9  shadow-lg cursor-pointer dark:text-white text-2xl  border rounded-full flex items-center justify-center '><i className="fa-brands fa-github"></i></li>
            <li className='lg:w-12 lg:h-12  w-9 h-9  shadow-lg cursor-pointer dark:text-white text-2xl  border rounded-full flex items-center justify-center '><i className="fa-brands fa-square-youtube"></i></li>
            
          </ul>


        </div>



      </div>




    </>
  )
}

export default Footer
