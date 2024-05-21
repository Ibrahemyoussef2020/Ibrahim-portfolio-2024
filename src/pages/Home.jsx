import React, { useContext, useState } from 'react'
import {HomeIntro, ProjectsWrapper, Skills} from '../components';
import { useInView } from 'react-intersection-observer';
import { NanigateContext } from '../App';
import {useNavigate} from 'react-router'
import ChallengesWrapper from '../components/general/ChallengesWrapper';
import { Link } from 'react-router-dom';

const Home = () => {

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
    <main className='home'>
      <div className="container">

        <HomeIntro />
        

        <section id='home__skills' className='home__skills'>
            <Skills page='home'/>
        </section>


      
      <hr id='home__projects' className='main-hr' />

        <ProjectsWrapper place='home'/>


        <hr className='main-hr' />

        
        <section className="home__challenges" id='home__challenges'>

          <div className="solutions__header">
            <h2 className='home-solutions__title text-center'>My <span className='spec'>Challenges</span></h2>
            <p className='home-solutions__desc second-title'>
              There are some of my code challenges like probelm solving sites and algorithm certifications and some other code challenges.
            </p>
          </div>
          <div className='another-solutions flex-center'>
            <a className='code' href="https://codepen.io/Ibrahemyoussef2020"><span>Codepen</span></a>
            <a className='linkidin' href="https://www.linkedin.com/in/ibrahim-youssef-2a65b1261/"><span>Linkidin</span></a>
          </div>
          <ChallengesWrapper page='home' />
          <div className="btns flex-center more-items">
            <Link to='/challenges' className="main-btn" onClick={e => moveToRoutFromRouts(e, 'challenges')}>
              <span>More Challenges</span> <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home

