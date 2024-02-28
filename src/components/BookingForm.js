import React from 'react'
import { MdCancel } from "react-icons/md";

export function BookingForm({setShowForm, cancelShow}) {

  return (
   <div className='border rounded-md my-7 w-11/12  md:w-1/3  mx-auto overflow-hidden shadow-lg relative  '>

{/* cancel icon */}
{
  cancelShow && (
<div 
    onClick={() => setShowForm(false)}
    className='absolute top-4 right-2 text-2xl font-bold text-zinc-50 cursor-pointer'>
      <MdCancel/>
    </div>
  )
}
    

    <h3 className='py-3 px-1 text-xl font-extrabold bg-red-700 text-white '> Service Booking Form </h3>
    <form className='flex flex-col p-4 bg-white'>
        <div className='mb-4 '>
            <input type='text' placeholder='Full Name' className='w-full border border-slate-400 text-zinc-800 py-1 px-3 rounded-md bg-transparent' required />
        </div>

        <div className='mb-4'>
            <input type='text' placeholder='10 Digit Mobile Number' className='w-full border border-slate-400 text-zinc-800  py-1 px-3 rounded-md bg-transparent' required />
        </div>

        <div className='mb-4'>
            <input type='text' placeholder='Your Email (Optional)' className='w-full border border-slate-400 text-zinc-800  py-1 px-3 rounded-md bg-transparent'  />
        </div>

        <div className='mb-4'>
          <select className='w-full border border-slate-400 py-1 px-3 rounded-md bg-transparent text-zinc-800 '>
          <option> Select Service </option>
            <option> AC Servicing </option>
            <option> AC Repair </option>
            <option> Electrical Appliance Repair </option>
            <option> Refrigerator Repair </option>
            <option> Washing Machine Repair </option>
          </select>
        </div>

        <div className='mb-4'>
        <textarea placeholder='Your Address' className='w-full border border-slate-400 py-1 px-3 rounded-md bg-transparent text-zinc-800 ' required></textarea>
        </div>

        <div className='mb-4'>
            <textarea placeholder='Type Your Message (Optional)' className='w-full border border-slate-400 py-1 px-3 text-zinc-800  rounded-md h-20 bg-transparent'></textarea>
        </div>

      
            <button type='submit' className='py-1 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md w-28 mx-auto '>Submit</button>
  
    </form>
   </div>
  )
}
