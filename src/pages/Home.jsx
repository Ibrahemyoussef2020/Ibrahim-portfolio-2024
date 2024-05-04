import React, { useState } from 'react'
import { homeProjectsData } from '../data/progectsData';
import {Footer, Project, ProjectsWrapper} from '../components';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [projectFilter,setProjectFilter] = useState('all');
  const { ref:topRef, inView:isTopVisible} = useInView({triggerOnce:true});
  const { ref:algoRef, inView:isAlgoVisible} = useInView({triggerOnce:true});    
  const { ref:skillsRef, inView:isSkillsVisible} = useInView({triggerOnce:true});  

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

        <section className='home__skills'>
            <span ref={skillsRef} className={`html del-sm home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                html
            </span>
            <span ref={skillsRef} className={`css del-md home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                css
            </span>
            <span ref={skillsRef} className={`sass  home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                sass
            </span>
            <span ref={skillsRef} className={`js del-sm home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                javascript
            </span>
            <span className={`ts del-small home-skill del-md  obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                typescript
            </span>
            <span ref={skillsRef} className={`react  home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                recat
            </span>
            <span ref={skillsRef} className={`reduv del-sm home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                redux
            </span>
            <span ref={skillsRef} className={`next del-md home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                next
            </span>
            <span ref={skillsRef} className={`bootstrap home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
                bootstarp
            </span>
            <span ref={skillsRef} className={`talwind del-sm home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
               talwind
            </span>
            <span ref={skillsRef} className={`mui del-md home-skill obs trans-right ${isSkillsVisible ? 'back-to-place' : ''}`}>
               material Ui
            </span>
        </section>

        <div className="more-items about">
                <a href="/about">More About</a>
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
                    <a href="/">More details</a>
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
                <a href="/projects">More Projects</a>
        </div>

        <Footer />

      </div>
    </main>
  )
}

export default Home