import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router'
import {Nanigator , Header, Footer} from '../components'
import { NanigateContext, NavigatorContext } from '../App';

const Layout = () => {

  const {pageClass} = useContext(NanigateContext);
  const {isVisibleNav , setIsVisibleNav} = useContext(NavigatorContext);

  return (
    <div className={`layout full-screen ${isVisibleNav ? 'open-nav' : 'close-nav'}`}>
      <Header isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav} />
      <div className={`page main-section ${pageClass}`}  >
        <Nanigator isVisibleNav={isVisibleNav} setIsVisibleNav={setIsVisibleNav}  />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout