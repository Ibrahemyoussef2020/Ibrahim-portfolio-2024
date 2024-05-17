import React, { useContext, useState } from 'react'
import { homeProjectsData } from '../data/progectsData';
import {Footer, HomeIntro, NextSection, Project, ProjectsWrapper, Skills} from '../components';
import { useInView } from 'react-intersection-observer';
import { NanigateContext } from '../App';
import {useNavigate} from 'react-router'
import ChallengesWrapper from '../components/general/ChallengesWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
  const [projectFilter,setProjectFilter] = useState('all');
  const { ref:algoRef, inView:isAlgoVisible} = useInView({triggerOnce:true});    

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
            <a className='code' href="/"><span>CodeChalle</span></a>
            <a className='linkidin' href="/"><span>Linkidin</span></a>
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


/*
<div className="header center-between">
                <h2>Certifications</h2>
                <div>
                    <a href="/challenges" onClick={e => moveToRoutFromRouts(e, 'challenges')}>More details</a>
                </div>
            </div>
            <div className="solutions">
                <h3>A - Codewars</h3>
                <a  target='_blank' rel="noopener"  href="https://www.codewars.com/users/%20Ibrahemyoussef2020%20"> 
                    1 -Javascript Problem solving <span>(kyu 4)</span>
                </a>
                <h3>B - JsCodebox</h3>
                <a  target='_blank' rel="noopener"  href="https://jscodebox.com/profile/Ibrahim_Youssef">
                    1 -Javascript data stracture <span>(Level 1)</span>
                </a>
                <h3>C - FreeCodeCamp</h3>
                <a  target='_blank' rel="noopener"  href="https://www.freecodecamp.org/certification/fccfcfd30b0-5336-47c8-9234-85c5bbd517ce/javascript-algorithms-and-data-structures">
                    1 - Data strcture and Algorithm <span>(compelated)</span>
                </a>
                <a  target='_blank' rel="noopener"  href="https://www.freecodecamp.org/certification/fccfcfd30b0-5336-47c8-9234-85c5bbd517ce/responsive-web-design">
                    2 - Responsive web design <span>(compelated)</span>
                </a>
            </div>

*/