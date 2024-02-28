import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";


export  function FaqCard ({item}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div >
      
      {/* qusetion */}

      {
        isVisible ? 
        (
          <div 
          onClick={() => setIsVisible(!isVisible)}
          className='flex justify-between items-center bg-slate-200 py-2 px-5 rounded-md '>
            <p 
            className='text-lg'> {item.question} </p>
            <button 
                  
                   className='text-blue-500 text-xl font-bold'>    <CiCircleMinus/> </button> 
        
         
          </div>
        )
        :
        (
          <div 
          onClick={() => setIsVisible(!isVisible)}
          className='flex justify-between items-center bg-slate-200 py-2 px-5 rounded-md'>
            <p 
            className='text-lg'> {item.question} </p>
            <button 
                  
                   className='text-blue-500 text-xl font-bold'>    <CiCirclePlus/> </button> 
          
         
          </div>
        )
      }
   

       {/* answer */}
      <div className=' text-start py-2 px-5'>
        {
          isVisible && (
            <p> {item.answer} </p>
          )
        }
    
      </div>
    </div>
  )
} 
