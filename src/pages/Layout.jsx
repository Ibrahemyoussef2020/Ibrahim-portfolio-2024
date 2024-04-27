import React, { useState } from 'react'
import  Header  from '../components/Header'
import { Outlet } from 'react-router'
import Nanigator from '../components/Nanigator'

const Layout = () => {
  const [isVisibleNav , setIsVisibleNav] = useState(false);

  return (
    <div className='lay-out full-screen'>
      <Header isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav} />
      <div className="page main-section">
        <Nanigator isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout