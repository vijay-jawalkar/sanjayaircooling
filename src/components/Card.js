import React from 'react'
import ACImage from "../images/hero/washing-machine.jpg"

export  function Card() {
  return (
    
        <div className="my-10 max-w-xs rounded-xl bg-pink-100 border border-black text-pink-800 text-start ">
            <div className=''>
                <img src = {ACImage} alt = "service " className='h-32 w-full' />
            </div>
  <p className="mb-2 text-xl font-medium px-2">AC Repairing</p>
  {/* <p className="mb-6 px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit earum vitae tempore.</p> */}
  <div className="mb-6 space-y-2 px-2">
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-green-600"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
        </svg>
      </span>
      <span> Checks the elements properly</span>
    </div>
    <div className="flex space-x-2 text-sm">
      <span className="text-green-600"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
        </svg>
      </span>
      <span>Checks all the wears and tears of the wires</span>
    </div>
    <div className="flex space-x-2 text-sm">
      <span className="text-green-600"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"></path>
        </svg>
      </span>
      <span>Checks the performance of the air conditioner</span>
    </div>
  </div>

  <div className='flex justify-between items-center px-2 py-2'>
    <p className='font-semibold text-lg'> ₹ 499 /- </p>
    <button className=" text-sm bg-green-600 hover:bg-green-800  py-1 px-3 rounded-md text-white">Book Now</button>
  </div>
 
</div>

 
  )
}