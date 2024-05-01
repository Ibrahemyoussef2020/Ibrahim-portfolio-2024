import React, { useContext } from 'react'
import {ModeContext} from '../../App'

const Header = ({isVisibleNav,setIsVisibleNav}) => {

  const {mode , setMode} =  useContext(ModeContext);

  return (
    <header className='main-section'>
      <div className="container">
        <div className='header-wrapper center-between'>
            <div className="left center-between">
                <a href="/" className="logo colors-trans">
                  I<span>br</span>ahim
                </a>
                <button className="mode-container" onClick={()=> setMode(mode  => mode === 'dark' ? 'light' : 'dark')}>
                  <i className="fa-solid fa-sun external-icon"></i>
                  <span className="mode-wheel">
                  {
                    mode === 'dark' ? 
                    <i className="fa-solid fa-moon"></i>
                    :
                    <i className="fa-solid fa-sun"></i>
                  }
                  </span>
                  <i className="fa-solid fa-moon external-icon"></i>
                </button>
            </div>
            <div className="right center-between">
              <a target='_blank' rel="noopener"  href='https://github.com/Ibrahemyoussef2020' className='header__github'>
               <i className="fa-brands fa-github"></i>
              </a>
              <button className='toggle-routes' onClick={_=>setIsVisibleNav(!isVisibleNav)}>
                {
                    isVisibleNav ? 
                    <i className="fa-solid fa-xmark"></i>
                    :
                    <i className="fa-solid fa-list"></i>
                  }        
              </button>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header



