import React, { useState } from 'react'
import { Outlet } from 'react-router'
import {Nanigator , Header} from '../components'

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