import React from 'react'
import { Route, Routes } from 'react-router'
import { Home, ContactUs } from '../pages'


function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/contact' element = { <ContactUs/> } />
    </Routes>
    </>
  )
}

export default AllRoutes