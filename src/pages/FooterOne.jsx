import React from 'react'
import { Link } from 'react-router-dom'

const FooterOne = () => {
  return (
    
    <div className='bg-amber-400 font-[sans-serif] tracking-wide  '>
       <footer className="bg-amber-400 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <a href="javascript:void(0)">
            <img src="../src/assests/image-4.png" alt="logo" className="w-52 " />
          </a>
        </div>

        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="https://www.facebook.com" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-900 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ashutosh-verma-52a8b126b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-900 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-blue-600 hover:fill-white w-7 h-7"
                  viewBox="0 0 24 24">
                  <path
                    d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-red-500">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <Link to={"/contact"} className="text-black hover:text-white text-sm">Email</Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-black hover:text-white text-sm">Phone</Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-black hover:text-white text-sm">Address</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-red-500">Information</h4>
          <ul className="space-y-4">
            <li>
              <Link to={"/about"} className="text-black hover:text-white text-sm">About Us</Link>
            </li>
            <li>
              <Link to={"/terms"} className="text-black hover:text-white text-sm">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to={"/privacy"} className="text-black hover:text-white text-sm">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className='text-black text-sm mt-10'>© 2024 All Rights Reserved.
      </p>
    </footer>
    
     <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Fresh Harvest Market. All rights reserved.</p>
            <p><Link to={"/privacy"} className="hover:underline">Privacy Policy</Link> | <Link to={"/terms"} className="hover:underline">Terms of Service</Link></p>
        </div>
        
    </footer> 
    </div>
  )
}



export default FooterOne
