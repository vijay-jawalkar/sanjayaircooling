import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../pages/home/Home'
import { BookingForm } from '../components'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/form' element = { <BookingForm/> } />
    </Routes>
    </>
  )
}

export default AllRoutes