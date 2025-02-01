import React from 'react'

const SocialBar = () => {
  return (
    <div className='social-bar'>
        <a className='facebook' href="https://web.facebook.com/facebook.comibrahimyoussef.saleh/?locale=ar_AR" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className='linkedin' href="https://www.linkedin.com/in/ibrahim-youssef-2a65b1261/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a className='github' href="https://github.com/Ibrahemyoussef2020" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
        </a>
        <a className='whatsapp' href="https://wa.me/01147359396" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    </div>
  )
}

export default SocialBar