import React, { useContext, useState } from 'react'
import { homeProjectsData } from '../data/progectsData';
import {Footer, Project, ProjectsWrapper} from '../components';
import { useInView } from 'react-intersection-observer';
import { NanigateContext } from '../App';
import {useNavigate} from 'react-router'

const Home = () => {
  const [projectFilter,setProjectFilter] = useState('all');
  const { ref:topRef, inView:isTopVisible} = useInView({triggerOnce:true});
  const { ref:algoRef, inView:isAlgoVisible} = useInView({triggerOnce:true});    
  const { ref:skillsRef, inView:isSkillsVisible} = useInView({triggerOnce:true});  

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
        <section className='home__top' ref={topRef}>
            <div className={`home__img obs trans-right ${isTopVisible ? 'back-to-place' : '' }`}>
                <img src="images/ibrahem.webp" alt="" />
            </div>
            <div className={`home__intro obs trans-left ${isTopVisible ? 'back-to-place' : '' }`}>
                <h2 className='home__name'>
                <i className="fa-solid fa-mug-saucer"></i>
                <span>Ibrahim youssef</span>
                </h2>
                <h1 className="home__job">
                Frontend developer
                <br/>
                <span>( React / Next ... developer )</span>
                </h1>
                <p className='home-__desc'>
                I'm starving to build amazing and beautiful web applications with a clean code via using solid principles and design pattern and most of clean code's roles
                </p>
            </div>
        </section>

        <section ref={skillsRef} className={`home__skills obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
            <span  className={`html home-skill `}>
                html
            </span>
            <span  className={`css home-skill `}>
                css
            </span>
            <span  className={`sass  home-skill `}>
                sass
            </span>
            <span  className={`js home-skill `}>
                javascript
            </span>
            <span className={`ts home-skill`}>
                typescript
            </span>
            <span  className={`react  home-skill `}>
                react
            </span>
            <span  className={`reduv home-skill `}>
                redux
            </span>
            <span  className={`next home-skill `}>
                next
            </span>
            <span  className={`bootstrap home-skill `}>
                bootstarp
            </span>
            <span  className={`talwind del-sm home-skill `}>
               talwind
            </span>
            <span  className={`mui del-md home-skill `}>
               material Ui
            </span>
        </section>

        <div className="more-items about">
            <a href="/about" onClick={e => moveToRoutFromRouts(e, 'about')}>More About</a>
            <a className='cv' download href='cv/Ibrahim Youssef.pdf'>
                Download CV
            </a>
        </div>

        <hr  className='main-hr'/>

        <ProjectsWrapper place='home' />

        <section ref={algoRef} className={`home__algorithm obs trans-left ${isAlgoVisible ? 'back-to-place' : '' }`} >
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
        </section>

        <div className="more-items challenges">
                <a href='/challenges' onClick={e => moveToRoutFromRouts(e, 'challenges')}>More Challenges</a>
        </div>

        <Footer />

      </div>
    </main>
  )
}

export default Home