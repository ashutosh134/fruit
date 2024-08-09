import React, { useState } from 'react'
import {  useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { cart } from '../features/fruits/fruitSlice';





const Navbar = () => {

const {cartItem , wishList} = useSelector(state=>state.cart)

const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
};





  return ( 
  
    

<nav className="shadow-xl bg-pink-300 bg-opacity-50 backdrop-blur-lg text-white p-4 sticky top-0 ">
      <div className="container mx-auto flex items-center justify-between">
       
        <div className="flex items-center space-x-4">
       <Link to={"/"}>  <img src="/assests/new.png" alt="Logo" className=" w-16" /> </Link> 
        </div>

      
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="hover:text-[#007bff] text-black  font-bold">Home</Link>

          <div className='group max-lg:border-b max-lg:py-3 relative'>
            <Link to={"/product"}
              className='hover:text-[#007bff] text-black font-bold lg:hover:fill-[#007bff] block'>Product<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </Link>
            <ul
              className='absolute shadow-lg bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-2 '><Link to={"/product"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>All Products</Link></li>
              <li className='border-b py-2 '><Link to={"/fruit"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Fruits</Link></li>
              <li className='border-b py-2 '><Link to={"/vegetables"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Vegetables</Link></li>
              <li className='border-b py-2 '><Link to={"/dairy"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Dairy</Link></li>
              <li className='border-b py-2 '><Link to={"/cooking"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Cooking Ingredients</Link></li>
            </ul>
          </div>

          <Link to={"/about"} className="hover:text-[#007bff] text-black  font-bold">About</Link>
          <Link to={"/contact"} className="hover:text-[#007bff] text-black  font-bold">Contact</Link>
        </div>

       
        <div className="flex items-center space-x-4">
          
        <Link to={"/wish"}> <button className="hover:text-gray-400" >
          <span className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" className="cursor-pointer fill-[#333] inline"
              viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{wishList.length}</span>
          </span>
          </button></Link>

         
        <Link to={"/cart"}> <button className="hover:text-gray-400">
          <span className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" className="cursor-pointer fill-[#333] inline"
              viewBox="0 0 512 512">
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"></path>
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cartItem.length}</span>
          </span>
          </button></Link> 

       
          <button onClick={toggleMobileMenu} className="md:hidden ">
          <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <Link to={"/"} className="hover:text-gray-400 text-black">Home</Link>
          
          
          
          <div className='group max-lg:border-b max-lg:py-3 relative'>
            <Link to={"/product"}
              className='hover:text-[#007bff] text-black  lg:hover:fill-[#007bff] block'>Product<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </Link>
            <ul
              className='absolute shadow-lg bg-gradient-to-b from-yellow-300 via-orange-200 to-red-200 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-2 '><Link to={"/product"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>All Products</Link></li>
              <li className='border-b py-2 '><Link to={"/fruit"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Fruits</Link></li>
              <li className='border-b py-2 '><Link to={"/vegetables"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Vegetables</Link></li>
              <li className='border-b py-2 '><Link to={"/dairy"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Dairy</Link></li>
              <li className='border-b py-2 '><Link to={"/cooking"}
                  className='hover:text-[#007bff] text-black text-[15px] font-bold block'>Cooking Ingredients</Link></li>
            </ul>
          </div>
          <Link to={"/about"} className="hover:text-gray-400 text-black">About</Link>
          <Link to={"/contact"} className="hover:text-gray-400 text-black">Contact</Link>
        </div>
      </div>
    </nav>
    
  

   )
}









export default Navbar
