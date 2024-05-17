import React, { useContext, useState } from 'react'
import Project from './Project';
import { homeProjectsData, projectsData } from '../../data/progectsData';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';
import { NanigateContext } from '../../App';
import NextSection from './NextSection';
import { Link } from 'react-router-dom';

const ProjectsWrapper = ({place='projects' }) => {
    const [mainSkill,setMainSkill] = useState('all');

    const {pageClass,setPageClass} = useContext(NanigateContext)

    const navigate = useNavigate() ; 
    
  const moveToRoutFromRouts = (e,page)=>{
      e.preventDefault();

      setPageClass('page-anim');
      navigate(`${page}`)

      setTimeout(()=>{
          setPageClass('');
      },1000)
  }

  return (
    <section  className={`projects-wrapper`}>
      <div className="header center-between">
          <h2 className="left">My <span className='spec'>Projects</span></h2>
          
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
                code={project.code}
                preview={project.preview}
                skills={project.skills}
              />})
          }
      </div>

      {place === 'home' ? <div className="more-items projects">
        <div className='btns more-items projects'>
                  <Link to='/projects' className="main-btn" onClick={e => moveToRoutFromRouts(e, 'projects')}>
                      <span>More Projects </span> <i className="fa-solid fa-angles-right"></i>
                  </Link>
                  <NextSection link='home__challenges' />
              </div>
        </div> : null}
    </section>
  )
}

export default ProjectsWrapper