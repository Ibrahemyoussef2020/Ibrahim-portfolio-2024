import React from 'react'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const { ref:topBtnRef, inView:isTopBtnVisible} = useInView();
  const { ref:footerRef, inView:isFooterVisible} = useInView({
    triggerOnce:true
  });

  return (
    <>
    <footer id='main-footer' className='main-footer'>

      <HashLink className='to-top' to='#main-header'>
      <i ref={topBtnRef} className={`fa-solid fa-angles-up ${isTopBtnVisible ? 'go' : ''}`}></i>
      </HashLink>

       <div className="footer__content">
        <div className='socials flex-center gap-1'>
            <a ref={footerRef} className={` social flex-center obs trans-right ${isFooterVisible ? 'back-to-place' : ''}`} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ibrahim-youssef-2a65b1261/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a ref={footerRef} className={` social flex-center obs scalable del-lg ${isFooterVisible ? 'scale' : ''}`} target="_blank" rel="noreferrer" href="https://github.com/Ibrahemyoussef2020">
                <i className="fa-brands fa-github"></i>
            </a>
            <a ref={footerRef} className={` social flex-center obs scalable del-lg ${isFooterVisible ? 'scale' : ''}`}  target="_blank" rel="noreferrer" href="tel:01147359396">
                <i className="fa-solid fa-phone"></i>
            </a>
            <Link ref={footerRef} className={` social flex-center obs trans-left ${isFooterVisible ? 'back-to-place' : ''}`} to="/contact">
                <i className="fa-solid fa-ellipsis"></i>
            </Link>
        </div>

        <p className='copyright text-center'>
          © Created By <span>Ibrahim Youssef</span>
        </p>
       </div>
    </footer>

    </>
  )
}

export default Footer