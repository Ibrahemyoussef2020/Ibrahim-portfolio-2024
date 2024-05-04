import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

const Footer = () => {
  const { ref:footerRef, inView:isFooterVisible} = useInView({
    triggerOnce:true
  });

  return (
    <>

    <hr  className='main-hr'/>

    <footer className='main-footer'>
        <a ref={footerRef} className={`obs trans-right ${isFooterVisible ? 'back-to-place' : ''}`} target="_blank" rel="noreferrer" href="https://github.com/Ibrahemyoussef2020">
            <i className="fa-brands fa-github"></i>
        </a>
        <a ref={footerRef} className={`obs scalable del-lg ${isFooterVisible ? 'scale' : ''}`}  target="_blank" rel="noreferrer" href="tel:01147359396">
            <i className="fa-solid fa-phone"></i>
        </a>
        <Link ref={footerRef} className={`obs trans-left ${isFooterVisible ? 'back-to-place' : ''}`} to="/contact">
            <i className="fa-solid fa-ellipsis"></i>
        </Link>
    </footer>

    </>
  )
}

export default Footer