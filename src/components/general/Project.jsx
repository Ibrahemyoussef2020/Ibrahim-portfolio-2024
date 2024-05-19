import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const Project = (props) => {

    const {
        color,
        title,
        date,
        web,
        structure,
        code,
        preview,
        skills,
    } = props

    const [showOptions,setShowOptions] = useState(false);
    const { ref:heroRef, inView:isHeroVisible} = useInView({
        triggerOnce:true
    });  

  return (
    <article className={`project ${showOptions ? 'show-options' : ''}`}>
        <a target='_blank' rel="noopener"  href={preview}>
        <div className={`project__hero`} style={{backgroundColor:color}}>
            <div ref={heroRef} className={`images obs scalable ${isHeroVisible ? 'scale' : ''}`}>
                <div className="back">
                    <img src={`images/projects/${title}-back.webp`} alt="" />
                </div>
                <div className="front">
                    <img src={`images/projects/${title}-front.webp`} alt="" />
                </div> 
            </div>                    
        </div>
        </a>

        <div className="project__info center-between">
            <h3>{title}</h3>
            <p>{date}</p>
        </div>

        <div className="project__footer center-between">
            <div className="skills">
                {
                    skills?.map((skill,index) => (
                        <span key={index} className={`${skill.type}-skill`}>{skill.title}</span>
                    ))
                }
            </div>
            <div className="more">
                <button onClick={_=> setShowOptions(!showOptions)} className="more__list">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <div className='more__options'>
                        <a target='_blank' rel="noopener"  href={preview}>
                            preview
                        </a>
                        <a target='_blank' rel="noopener"  href={code}>
                            code
                        </a>
                </div>
            </div>                   
        </div>
    </article>
  )
}

export default Project