import React, { useContext } from 'react'
import {ModeContext, NanigateContext} from '../../App'
import { useNavigate } from 'react-router';

const Header = ({isVisibleNav,setIsVisibleNav}) => {

  const {mode , setMode} =  useContext(ModeContext);

  const toggleMode = ()=>{
    const neMode  = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode' , neMode);
    setMode(()=> localStorage.getItem('mode'));
  }

  const {pageClass,setPageClass} = useContext(NanigateContext)

  const navigate = useNavigate() ; 
  
const moveToRoutFromRouts = (e,page)=>{
    e.preventDefault();

    setPageClass('page-anim');
    navigate(`${page}`)

    setTimeout(()=>{
        setPageClass('');
    },1000)
}

  return (
    <header className='main-section'>
      <div className="container">
        <div className='header-wrapper center-between'>
            <div className="left center-between">
                <a href="/" onClick={e => moveToRoutFromRouts(e,'/')} className="logo colors-trans">
                  <span>
                  <i className="fa-solid fa-mug-saucer"></i>
                  </span>
                </a>
                <button className="mode-container" onClick={toggleMode}>
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



