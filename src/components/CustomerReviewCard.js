import React from 'react'

export  function CustomerReviewCard() {
  return (
    <div className='mx-2'>
<div
  className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none  px-4 bg-slate-300">
  <div
    className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      alt="Tania Andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
    <div className="flex w-full flex-col justify-start items-start gap-0.5">
      <div className="flex items-center justify-between">
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Tania Andrew
        </h5>
       
      </div>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        Sarni, Betul
      </p>
    </div>
  </div>
  <div className="p-0 mb-6">
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      "I found solution to all my design needs from Creative Tim. I use
      them as a freelancer in my hobby projects for fun! 
    </p>
  </div>
</div>  
    </div>
    
  )
}
