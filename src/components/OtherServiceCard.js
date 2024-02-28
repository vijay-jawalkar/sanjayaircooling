import React, { useState } from 'react'
// import ElectricImage from "../images/hero/electricity.jpg"
import { BookingForm } from './BookingForm'

export  function OtherServiceCard({item}) {
  const [ showForm, setShowForm ] = useState(false)

  return (
    <>
     <div className="my-10 max-w-xs rounded-xl bg-pink-100 border shadow-md text-pink-800 text-start ">
    <div className=''>
        <img src = {item.img} alt = "services" className='h-40 w-full' />
    </div>
<p className="mb-2 text-xl font-medium px-2">{item.name}</p>
{/* <p className="mb-6 px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit earum vitae tempore.</p> */}
<div className="mb-6 space-y-2 px-2">
  {
    item.description.map((item, index) => {
      return (
<div key={index} className="flex items-start space-x-2 text-sm">
<span className="text-green-600"
><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
</svg>
</span>
<span> {item}</span>
</div>
      )
    })
  }



</div> 

<div className='flex justify-between items-center px-2 py-2'>
<button className=' text-sm py-1 px-3 bg-blue-800 hover:bg-blue-900 text-white rounded-md'> Explore Now </button>
<button 
onClick={() => setShowForm(!showForm)}
className=" text-sm bg-green-600 hover:bg-green-800  py-1 px-3 rounded-md text-white">Book Now</button>
</div>
</div>

{
  showForm && (
<div className=" fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-25 flex justify-center items-center z-50">
<BookingForm setShowForm = {setShowForm} cancelShow = {true} />
</div>
  )
}



    </>
   
  )
}
