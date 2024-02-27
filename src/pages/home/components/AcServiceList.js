import React from 'react'
import { Card } from '../../../components'

function AcServiceList() {
  return (
    <div className='my-12'>

      <div className='my-2 '>
      <h2 className='text-zinc-800 font-extrabold text-3xl '> Our AC Services </h2>
      <p className='text-md py-2'> Discover our AC services below: installation, maintenance, repair, and consultation. Each card offers unique details for your needs. </p>
      </div>

     {/* AC services list */}
      <div className='flex flex-wrap justify-center items-center gap-1 md:gap-10'>
      <Card/>
      <Card/>
      <Card/>
      </div>
       
       
    </div>
  )
}

export default AcServiceList