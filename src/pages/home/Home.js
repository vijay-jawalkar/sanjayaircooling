import React from 'react'
import Hero from './components/Hero'
import AcServiceList from './components/AcServiceList'
import OtherServices from './components/OtherServices'
import CustomerReviews from './components/CustomerReviews'
import Faq from './components/Faq'



export  function Home() {
  return (
    <main>
      <Hero/>
      <AcServiceList/>
      <OtherServices/>
      <CustomerReviews/>
      <Faq/>
    </main>
  )
}
