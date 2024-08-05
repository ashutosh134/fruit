import React from 'react'
import {  useSelector } from 'react-redux';

import { Link } from 'react-router-dom';





const Navbar = () => {

const {cartItem , wishList} = useSelector(state=>state.cart)





  return ( 

<header className='shadow-md bg-teal-400 font-[sans-serif] tracking-wide relative z-50 sticky top-0'>
    <section
      className='flex items-center flex-wrap lg:justify-between gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
  
    
  
      <Link to={"/"} className="shrink-0"><img src="/assests/new.png" alt="logo"
          className='md:w-[80px] w-16' />
      </Link>
  
      <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
        <span className="relative">
        <Link to={"/wish"} > <svg xmlns="http://www.w3.org/2000/svg" width="25px"
            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64" >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg></Link>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">{wishList.length}</span>
        </span>
        <span className="relative">
     <Link to={"/cart"} >   <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"
            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg> </Link>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">{cartItem.length}</span>
        </span>
        <div className="inline-block cursor-pointer border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"
            className="hover:fill-[#007bff]">
            <circle cx="10" cy="7" r="6" data-original="#000000" />
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </section>
  














    <div className='flex flex-wrap justify-center px-10 py-3 relative'>
  
      <div 
        className=''>
       
  
        <ul
          className='flex  lg:gap-12 sm:gap-2 md:gap-2 '>
          
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><Link to={"/"}
              className='hover:text-[#007bff] text-[#007bff] font-semibold block lg:text-[16px]'>Home</Link></li>
          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <Link to={"/product"}
              className='hover:text-[#007bff] hover:fill-[#007bff] text-red-500 font-semibold lg:text-[16px] block'>Products<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </Link>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-3'>
                <Link to={"/fruit"}
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
 <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    className="mr-4 inline-block"
    viewBox="0 0 64 64"
  >
    <path
      fill="#FFA500"
      d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm8.372 9.441a2.995 2.995 0 0 1 2.121 1.121 2.993 2.993 0 0 1 1.121 2.121 2.998 2.998 0 0 1-1.809 2.745 20.92 20.92 0 0 0 3.787 6.325 20.879 20.879 0 0 0 6.326-3.786 2.998 2.998 0 0 1 2.744-1.81 3 3 0 0 1 2.121 1.121 3 3 0 0 1 1.121 2.121 3 3 0 0 1-1.809 2.745 20.92 20.92 0 0 0-3.787 6.325 20.879 20.879 0 0 0 6.326 3.786 2.998 2.998 0 0 1 2.744 1.81 2.998 2.998 0 0 1-1.809 2.745 3 3 0 0 1-2.121 1.121 3 3 0 0 1-2.121-1.121 3 3 0 0 1-1.809-2.745 20.92 20.92 0 0 0-3.787-6.325 20.879 20.879 0 0 0-6.326 3.786 2.998 2.998 0 0 1-2.744 1.81 2.998 2.998 0 0 1-2.121-1.121 3 3 0 0 1-1.121-2.121 3 3 0 0 1 1.809-2.745 20.92 20.92 0 0 0 3.787-6.325 20.879 20.879 0 0 0-6.326-3.786 2.998 2.998 0 0 1-2.744-1.81 2.998 2.998 0 0 1 1.809-2.745 3 3 0 0 1 2.121-1.121zm-4.957 18.622a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.656-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.657-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z"
    />
  </svg>
                  Fruits
                </Link>
              </li>
              <li className='border-b py-3'>
                <Link to={"/vegetables"}
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    className="mr-4 inline-block"
    viewBox="0 0 64 64"
  >
    <path
      fill="#FFA500"
      d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm8.372 9.441a2.995 2.995 0 0 1 2.121 1.121 2.993 2.993 0 0 1 1.121 2.121 2.998 2.998 0 0 1-1.809 2.745 20.92 20.92 0 0 0 3.787 6.325 20.879 20.879 0 0 0 6.326-3.786 2.998 2.998 0 0 1 2.744-1.81 3 3 0 0 1 2.121 1.121 3 3 0 0 1 1.121 2.121 3 3 0 0 1-1.809 2.745 20.92 20.92 0 0 0-3.787 6.325 20.879 20.879 0 0 0 6.326 3.786 2.998 2.998 0 0 1 2.744 1.81 2.998 2.998 0 0 1-1.809 2.745 3 3 0 0 1-2.121 1.121 3 3 0 0 1-2.121-1.121 3 3 0 0 1-1.809-2.745 20.92 20.92 0 0 0-3.787-6.325 20.879 20.879 0 0 0-6.326 3.786 2.998 2.998 0 0 1-2.744 1.81 2.998 2.998 0 0 1-2.121-1.121 3 3 0 0 1-1.121-2.121 3 3 0 0 1 1.809-2.745 20.92 20.92 0 0 0 3.787-6.325 20.879 20.879 0 0 0-6.326-3.786 2.998 2.998 0 0 1-2.744-1.81 2.998 2.998 0 0 1 1.809-2.745 3 3 0 0 1 2.121-1.121zm-4.957 18.622a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.656-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.657-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z"
    />
  </svg>

                Vegetables
                </Link>
              </li>
              <li className='border-b py-3'>
                <Link to={"/dairy"}
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                 <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    className="mr-4 inline-block"
    viewBox="0 0 64 64"
  >
    <path
      fill="#FFA500"
      d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm8.372 9.441a2.995 2.995 0 0 1 2.121 1.121 2.993 2.993 0 0 1 1.121 2.121 2.998 2.998 0 0 1-1.809 2.745 20.92 20.92 0 0 0 3.787 6.325 20.879 20.879 0 0 0 6.326-3.786 2.998 2.998 0 0 1 2.744-1.81 3 3 0 0 1 2.121 1.121 3 3 0 0 1 1.121 2.121 3 3 0 0 1-1.809 2.745 20.92 20.92 0 0 0-3.787 6.325 20.879 20.879 0 0 0 6.326 3.786 2.998 2.998 0 0 1 2.744 1.81 2.998 2.998 0 0 1-1.809 2.745 3 3 0 0 1-2.121 1.121 3 3 0 0 1-2.121-1.121 3 3 0 0 1-1.809-2.745 20.92 20.92 0 0 0-3.787-6.325 20.879 20.879 0 0 0-6.326 3.786 2.998 2.998 0 0 1-2.744 1.81 2.998 2.998 0 0 1-2.121-1.121 3 3 0 0 1-1.121-2.121 3 3 0 0 1 1.809-2.745 20.92 20.92 0 0 0 3.787-6.325 20.879 20.879 0 0 0-6.326-3.786 2.998 2.998 0 0 1-2.744-1.81 2.998 2.998 0 0 1 1.809-2.745 3 3 0 0 1 2.121-1.121zm-4.957 18.622a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.656-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.657-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z"
    />
  </svg>
                  Dairy Products
                </Link>
              </li>
              <li className='border-b py-3'>
                <Link to={"/cooking"}
                  className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                 <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    className="mr-4 inline-block"
    viewBox="0 0 64 64"
  >
    <path
      fill="#FFA500"
      d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm8.372 9.441a2.995 2.995 0 0 1 2.121 1.121 2.993 2.993 0 0 1 1.121 2.121 2.998 2.998 0 0 1-1.809 2.745 20.92 20.92 0 0 0 3.787 6.325 20.879 20.879 0 0 0 6.326-3.786 2.998 2.998 0 0 1 2.744-1.81 3 3 0 0 1 2.121 1.121 3 3 0 0 1 1.121 2.121 3 3 0 0 1-1.809 2.745 20.92 20.92 0 0 0-3.787 6.325 20.879 20.879 0 0 0 6.326 3.786 2.998 2.998 0 0 1 2.744 1.81 2.998 2.998 0 0 1-1.809 2.745 3 3 0 0 1-2.121 1.121 3 3 0 0 1-2.121-1.121 3 3 0 0 1-1.809-2.745 20.92 20.92 0 0 0-3.787-6.325 20.879 20.879 0 0 0-6.326 3.786 2.998 2.998 0 0 1-2.744 1.81 2.998 2.998 0 0 1-2.121-1.121 3 3 0 0 1-1.121-2.121 3 3 0 0 1 1.809-2.745 20.92 20.92 0 0 0 3.787-6.325 20.879 20.879 0 0 0-6.326-3.786 2.998 2.998 0 0 1-2.744-1.81 2.998 2.998 0 0 1 1.809-2.745 3 3 0 0 1 2.121-1.121zm-4.957 18.622a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.656-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828zm5.657-5.656a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828z"
    />
  </svg>
                 Cooking Ingredients
                </Link>
              </li>
            </ul>
          </li>
          
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><Link to={"/about"}
              className='hover:text-[#007bff] text-red-500 font-semibold lg:text-[16px] block'>About</Link></li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><Link to={"/contact"}
              className='hover:text-[#007bff] text-red-500 font-semibold lg:text-[16px] block '>Contact</Link></li>
          
        </ul>
      </div>
  
     
    </div>
  </header>
    


   )
}









export default Navbar
