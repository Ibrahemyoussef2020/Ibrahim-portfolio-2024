import React from 'react'
import { Footer, ProjectsWrapper } from '../components'

const Projects = () => {
  return (
    <div className='main-projects'>
      <div className='container'>
        <section className='about__skills' id='about__skills'>
          <h2 className='page-heading'>MY <span className="spiceal">PORTFOLIO</span></h2>
          <p className='page__story second-title'>
            Thery are some of difference projects I've done you can visit the preview or code via clicking the list button in the project cart.
            shore you can olso check more on my <span className='spicial'><a target="_blank" rel="noopener" href="https://github.com/Ibrahemyoussef2020">Github</a></span> email.
          </p>  
        </section>

        <ProjectsWrapper />
      </div>
    </div>
  )
}

export default Projects