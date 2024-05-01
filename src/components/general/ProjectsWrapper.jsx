import React, { useState } from 'react'
import Project from './Project';
import { homeProjectsData, projectsData } from '../../data/progectsData';

const ProjectsWrapper = ({place='projects' }) => {
    const [mainSkill,setMainSkill] = useState('all');

  return (
    <section className='projects-wrapper'>
      <div className="header center-between">
          <h2 className="left">My Projects</h2>
          
          <div className='filters'>
              <button className={mainSkill === 'all' ? 'selected' : ''} onClick={_=>setMainSkill('all')}>All</button>
              <button className={mainSkill === 'next' ? 'selected' : ''} onClick={_=>setMainSkill('next')}>Next</button>
              <button className={mainSkill === 'react' ? 'selected' : ''} onClick={_=>setMainSkill('react')}>React</button>
              <button className={mainSkill === 'html' ? 'selected' : ''} onClick={_=>setMainSkill('html')}>Html</button>
          </div>

      </div>

      <div className="projects">
          {
              place === 'home' ?
              homeProjectsData.filter(project => mainSkill === 'all' ? project : project.structure === mainSkill)
              .map((project,index) => {
                
               return <Project
                  key={index}    
                  color={project.color}
                  title={project.title}
                  date={project.date}
                  web={project.web}
                  structure={project.structure}
                  code={project.web}
                  preview={project.preview}
                  skills={project.skills}
                />})
            :
            projectsData.filter(project => mainSkill === 'all' ? project : project.structure === mainSkill)    
            .map((project,index) => {
               return <Project
                key={index}    
                color={project.color}
                title={project.title}
                date={project.date}
                web={project.web}
                structure={project.structure}
                code={project.web}
                preview={project.preview}
                skills={project.skills}
              />})
          }
      </div>

      {place === 'home' ? <div className="more-items projects">
          <a href="/projects">More Projects</a>
      </div> : null}

    </section>
  )
}

export default ProjectsWrapper