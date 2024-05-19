import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NanigateContext } from '../../App';

const Nanigator = ({isVisibleNav,setIsVisibleNav}) => {

  const {pageClass,setPageClass} = useContext(NanigateContext)

  const navigate = useNavigate() ; 

  const moveToRoutFromNav = (e,page)=>{
    e.preventDefault();
    navigate(`${page}`)
    setIsVisibleNav(false);
}

  return (
    <section className={`navigator`}>
      <div className="navigator__clip">
        <div className="navigator__left">
          <img src="images/nanigator-img.webp" alt="" />
        </div>
        <div className="navigator__right poppins-font text-center">
          <div className="navigator__wrapper">
            <ul>
              <li className='active'>
                <Link onClick={(e)=> moveToRoutFromNav(e,'projects')} to='/projects'>Projects</Link>
              </li>
              <li>
                <Link onClick={(e)=> moveToRoutFromNav(e,'about')} to='/about'>about</Link>
              </li>
              <li>
                <Link onClick={(e)=> moveToRoutFromNav(e,'contact')} to='/contact'>contact</Link>
              </li>
              <li>
                <Link onClick={(e)=> moveToRoutFromNav(e,'challenges')} to='/challenges'>algorithm</Link>
              </li>
            </ul>
            <article className='navigator__socials'>
              <a target='_blank' rel="noopener"  href='https://web.facebook.com/facebook.comibrahimyoussef.saleh/'>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a target='_blank' rel="noopener"  href='https://www.linkedin.com/in/ibrahim-youssef-2a65b1261/'>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a target='_blank' rel="noopener"  href='https://www.linkedin.com/in/ibrahim-youssef-2a65b1261/'>
                <i className="fa-regular fa-envelope"></i>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nanigator