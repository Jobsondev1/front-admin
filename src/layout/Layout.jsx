import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MainDash from '../pages/mainDash/MainDash'
import './layout.css'

const Layout = () => {
  return (
    <>
     <div className='main'>
      <div className="main-layout">
        <Sidebar />
        <MainDash />
      </div>
        

     </div>
    </>
   
  )
}

export default Layout