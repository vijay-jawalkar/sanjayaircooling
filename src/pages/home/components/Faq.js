import React from 'react'
import { FaqCard } from '../../../components'

function Faq() {
  const faqList = [
    {
      id: 1,
      question: "SK Interpises provide pan india service ?",
      answer: "No, we only provide services across betul district ( MadhyaPradesh ) only."
    },
    {
      id: 2,
      question: "Spare parts cost cover under the service plane?",
      answer: "No, Parts cost is excluded which you need to pay to technician."
    },
    {
      id: 3,
      question: "Does SK Enterprises offer services at my home? ?",
      answer: "Yes, indeed! We provide services right at your doorstep."
    },
    {
      id: 4,
      question: "Can I pay fees online ?",
      answer: "As of now, we only accept payment via cash on delivery or UPI payment after we've provided the service at your home."
    }
  ]
  return (
    <div className='my-12 '>
    <h2 className='text-zinc-800 font-extrabold text-3xl '> Frequently asked questions </h2>
    <p className='text-md py-2'> Ask any questions about our services </p>
    
    <div className='w-8/12 flex flex-col  gap-2 mx-auto my-4'>

      {
        faqList.map((item) => {
        return (    <FaqCard key={item.id} item = {item} /> )
        })
      }
     
       
    </div>
    </div>
  )
}

export default Faq