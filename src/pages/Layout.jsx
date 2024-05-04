import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router'
import {Nanigator , Header} from '../components'
import { NanigateContext } from '../App';

const Layout = () => {
  const [isVisibleNav , setIsVisibleNav] = useState(false);
  const {pageClass} = useContext(NanigateContext);

  console.log(pageClass);
  return (
    <div className='layout full-screen'>
      <Header isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav} />
      <div className={`page main-section ${pageClass}`}>
        <Nanigator isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout