import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      
            {/* header  */}
            <Header/>

            {/* outlet */}
            <Outlet/>

            {/* footer  */}
            <Footer/>
            
    
    </>
  )
}

export default Layout