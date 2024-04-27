import React from 'react'

const Project = ({props}) => {

    const {
        color,
        title,
        code,
        preview,
        skills,
    } = props

  return (
    <article className='project'>
        <a target='_blank' href={preview}>
        <div className="project__hero">
            <div className="images">
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
            <h3>Amazon clone</h3>
            <p>02-04-2024</p>
        </div>

        <div className="project__footer center-between">
            <div className="skills">
                <span className='spa-skill'>next</span>
                <span className='type-skill'>react</span>
                <span className='style-skill'>sass</span>
                <span className='store-skill'>redux</span>  
            </div>
            <div className="more">
                <button className="more__list" onClick={_=> console.log('clickable')}>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <div className='more__options'>
                        <a href='#'>
                            preview
                        </a>
                        <a href='#'>
                            code
                        </a>
                </div>
            </div>                   
        </div>
    </article>
  )
}

export default project