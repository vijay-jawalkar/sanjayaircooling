import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

export function Footer() {
  return (
   
        

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
         
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div  className='text-start'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Usefull Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="https://flowbite.com/" className="hover:underline">Home</a>
                      </li>
                      <li className="mb-2">
                          <a href="https://tailwindcss.com/" className="hover:underline">Term Of Service</a>
                      </li>
                      <li className="mb-2">
                          <a href="https://tailwindcss.com/" className="hover:underline"> Refund Policy </a>
                      </li>
                  </ul>
              </div>
              <div  className='text-start'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Services</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">AC Services</a>
                      </li>
                      <li  className="mb-2">
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Electricity Services</a>
                      </li>
                      <li  className="mb-2">
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Refrigerator Services</a>
                      </li>
                      <li  className="mb-2">
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Washing Machine Services</a>
                      </li>
                  </ul>
              </div>
              <div className='text-start'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                    
                      <li className='flex gap-1 justify-start items-start'> <p> <FaLocationDot/>  </p> <p> </p>Bajar Chauk, Sarni, Betul, MadhyaPradesh, India</li>

                      <li className='flex gap-2 justify-start md:items-center mt-2'> <p> <IoCall/>  </p> <p>7509697569, 9644821332 </p></li>

                      <li className='flex gap-2 justify-start items-center mt-2'> <p className='text-lg'> <IoIosMail/>  </p> <p> sanjaykhatarkar02@gmail.com</p></li>
                   
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-center items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">SK Enterprises</a>. All Rights Reserved.
          </span>
        
      </div>
    </div>
</footer>

  
  )
}
