import React, { useState } from 'react'
import Logo from "../images/skLogo.png"
import { IoIosCall } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



export function Header() {
    const [isVisible, setIsVisible] = useState(false)

  return (
    <header>

        <div className='fixed bottom-5 left-5 z-50'>
            <a href='https://wa.me/917509697569' target='_blank' rel="noreferrer" >    <FaSquareWhatsapp className='font-bold text-4xl hover:text-5xl  text-green-800' /> </a>
        </div>

        {/* service book now */}
        <section className='bg-orange-600 flex justify-start lg:justify-center items-center py-3 text-zinc-100 gap-3 border border-t-0 border-x-0 border-b-2 border-b-white'> 
            <p className='text-sm lg:text-lg font-semibold animate-bounce animate-infinite px-2'> Call us now </p>
            <a href="tel:+917509697569" target='_blank' rel="noreferrer"  className='bg-green-800 rounded-2xl py-1 px-3 md:px-5 font-semibold flex items-center gap-2'>
            <IoIosCall className='font-bold text-lg' />
                <span className='text-sm md:text-base'> 7509697569 </span>
            </a>

            <div className='text-sm lg:text-medium absolute right-6 flex flex-col lg:flex-row gap-1 lg:gap-2'>
            <p className='cursor-pointer hover:underline underline-offset-4'>LogIn</p>
            <p className='cursor-pointer hover:underline underline-offset-4'>Register</p>
            </div>
          
        </section>




       {/* navigation bar */}
        <section className='flex justify-between items-center  px-6 bg-gray-900 text-zinc-100 '>

    {/* logo */}
    <div className='h-20 w-20 rounded-full'>
        <img src = {Logo} alt='Sk Enterprises' />
    </div>


    {/* navigation items for large devices */}
    <nav className='hidden lg:flex justify-center items-center gap-4 '>
    <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> HOME </p>
    <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> AC SERVICES </p>
    {/* <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> ELECTRICITY SERVICES </p> */}
    <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> OTHER SERVICES </p>
    <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> BLOG </p>
    <p className='cursor-pointer hover:underline underline-offset-4 hover:text-zinc-200'> CONTACT US </p>
    </nav>

   <button 
   onClick={() => setIsVisible(true)}
   className='block lg:hidden text-2xl'>
   <FaBars />
   </button>


    {/* navigation items for mobile devices */}
    {
        isVisible && (
            <nav className="w-[60vw] h-screen bg-gray-900 flex flex-col justify-start  md:hidden gap-6 items-center text-zinc-100 absolute right-0 top-0 z-10 pt-14 rounded-tl-lg rounded-bl-lg duration-500">
            <p className='cursor-pointer hover:underline underline-offset-4'> HOME </p>
            <p className='cursor-pointer hover:underline underline-offset-4'> AC SERVICES </p>
            {/* <p className='cursor-pointer hover:underline underline-offset-4'> ELECTRICITY SERVICES </p> */}
            <p className='cursor-pointer hover:underline underline-offset-4'> OTHER SERVICES </p>
            <p className='cursor-pointer hover:underline underline-offset-4'> BLOG </p>
            <p className='cursor-pointer hover:underline underline-offset-4'> CONTACT US </p>

            <div 
            onClick={() => setIsVisible(false)}
            className="text-zinc-100 text-2xl absolute left-2 top-2"> <FaTimes/> </div>
            </nav>
        )
    }


    
 

   </section>
    </header>
   
  )
}
