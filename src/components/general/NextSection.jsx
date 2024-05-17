import React from 'react'
import { HashLink } from 'react-router-hash-link';

const NextSection = (props) => {

    const {link} = props;

  return (
    <HashLink to={`#${link}`} className='next-section'>
        <span></span>
        <span></span>
        <span></span>
        <i className="fa-solid fa-chevron-down"></i>
    </HashLink>
  )
}

export default NextSection