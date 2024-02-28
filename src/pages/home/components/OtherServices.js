import React from 'react'
import { OtherServiceCard } from '../../../components'
import ElectricianImg from "../../../images/hero/Electrician-1.jpg"
import WashingMachineImg from "../../../images/hero/washing-machine.jpg"
import RefregeratorImg from "../../../images/hero/Refregerator.jpg"

function OtherServices() {


    const otherServicesList = [
        {
            id: 1,
            name: "Electric Appliance Repair",
            img: ElectricianImg,
            description: [
                "Our technicians can fix many types of electric appliances.",
                "We offer quick appointments that work with your schedule.",
                "Our repairs are guaranteed to make your appliances work well again."
            ]
        },
        {
            id: 2,
            name: "Washing Machine Repair",
            img: WashingMachineImg,
            description: [
                "Skilled in repairing all washing machine brands and models.",
                "We offer quick and flexible scheduling to suit your needs.",
                "Reliable repairs for efficient washing machine operation."
            ]
        },
        {
            id: 3,
            name: "Refrigerator Repair",
            img: RefregeratorImg,
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
    <p className='text-md py-2 px-2'> Explore our diverse service offerings: electrical appliance repair, refrigerator services, and washing machine repair, each uniquely tailored to your needs. </p>
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