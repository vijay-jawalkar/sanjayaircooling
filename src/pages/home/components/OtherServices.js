import React from 'react'
import { OtherServiceCard } from '../../../components'


function OtherServices() {


    const otherServicesList = [
        {
            id: 1,
            name: "Electric Appliance Repair",
            description: [
                "Our technicians can fix many types of electric appliances.",
                "We offer quick appointments that work with your schedule.",
                "Our repairs are guaranteed to make your appliances work well again."
            ]
        },
        {
            id: 2,
            name: "Washing Machine Repair",
            description: [
                "Skilled in repairing all washing machine brands and models.",
                "We offer quick and flexible scheduling to suit your needs.",
                "Reliable repairs for efficient washing machine operation."
            ]
        },
        {
            id: 3,
            name: "Refrigerator Repair",
            description: [
                "Expert repairs for all refrigerator brands and models.",
                "Flexible scheduling options tailored to your convenience.",
                "Reliable fixes to keep your refrigerator running smoothly."
            ]
        }
    ]
  return (
    <div className='my-12'>

    <div className='my-2 '>
    <h2 className='text-zinc-800 font-extrabold text-3xl '> Our Other Services </h2>
    <p className='text-md py-2'> Discover our AC services below: installation, maintenance, repair, and consultation. Each card offers unique details for your needs. </p>
    </div>

   {/* AC services list */}
    <div className='flex flex-wrap justify-center items-center gap-1 md:gap-10'>
        {
            otherServicesList.map( (item) => {
                return (
                    <OtherServiceCard key={item.id} item = {item} />
                )
            })
        }
 
   
    </div>
     
     
  </div>
  )
}

export default OtherServices