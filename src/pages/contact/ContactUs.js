import React from 'react'
import { BookingForm } from '../../components'
// import background from "../../images/contact-background.jpg"
import { IoIosCall } from "react-icons/io";

export function ContactUs() {
//   const [cancelShow, setCancelShow] = useState(false);
   
  return (
    <main className="bg-emerald-300 py-3" >
        <div className='flex flex-wrap justify-center items-center gap-4 px-10'>

           {/* left text */}
            <div className='flex flex-col justify-start items-center'> 
            <div className='w-10/12 text-start'> 
            <h2 className='text-3xl  font-extrabold'>  Request Your Service Quote Today! </h2>
           <p className='pt-2 text-lg'> Book Now for Hassle-Free Service by Our Team of Trusted and Experienced Professionals </p>
            </div>
        
        <div className='mx-auto'>
        <a href="tel:+917509697569" className='flex  items-center gap-2  py-3 px-6 bg-blue-800 hover:bg-blue-900 rounded-full text-zinc-100  font-semibold mt-8'>
          <IoIosCall className='text-2xl md:text-4xl'/> <span className='text-lg'> <span className='px-1'>  Call Now </span> <span> 7509697569 </span>  </span>
           </a>
        </div>
        
            </div>

            {/* right form */}
            <BookingForm cancelShow = {false} /> 

        </div>
       
    </main>
  )
}

