import React from 'react'
import { Link } from 'react-router-dom'

const Nanigator = ({isVisibleNav,setIsVisibleNav}) => {
  return (
    <section className={`navigator ${isVisibleNav ? 'open' : 'close'}`}>
      <div className="navigator__clip">
        <div className="navigator__left">
          <img src="images/nanigator-img.webp" alt="" />
        </div>
        <div className="navigator__right poppins-font text-center">
          <div className="navigator__wrapper">
            <ul>
              <li className='active'>
                <Link onClick={_=>setIsVisibleNav(false)} to='/projects'>Projects</Link>
              </li>
              <li>
                <Link onClick={_=>setIsVisibleNav(false)} to='/about'>about</Link>
              </li>
              <li>
                <Link onClick={_=>setIsVisibleNav(false)} to='/contact'>contact</Link>
              </li>
              <li>
                <Link onClick={_=>setIsVisibleNav(false)} to='/challenges'>algorithm</Link>
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