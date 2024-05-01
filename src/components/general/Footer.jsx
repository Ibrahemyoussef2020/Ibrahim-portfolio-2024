import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

    <hr  className='main-hr'/>

    <footer className='main-footer'>
        <a target="_blank" rel="noreferrer" href="https://github.com/Ibrahemyoussef2020">
            <i className="fa-brands fa-github"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="tel:01147359396">
            <i className="fa-solid fa-phone"></i>
        </a>
        <Link to="/contact">
            <i className="fa-solid fa-ellipsis"></i>
        </Link>
    </footer>

    </>
  )
}

export default Footer