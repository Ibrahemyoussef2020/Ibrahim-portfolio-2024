import React, { useState } from 'react'
import { homeProjectsData } from '../data/progectsData';
import {Footer, Project, ProjectsWrapper} from '../components';

const Home = () => {
  const [projectFilter,setProjectFilter] = useState('all');


  return (
    <main className='home'>
      <div className="container">
        <section className='home__top'>
            <div className="home__img">
                <img src="images/ibrahem.webp" alt="" />
            </div>
            <div className="home__intro">
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
            <span className="html home-skill">
                html
            </span>
            <span className="css home-skill">
                css
            </span>
            <span className="sass home-skill">
                sass
            </span>
            <span className="js home-skill">
                javascript
            </span>
            <span className="ts home-skill">
                typescript
            </span>
            <span className="recat home-skill">
                recat
            </span>
            <span className="redux home-skill">
                redux
            </span>
            <span className="next home-skill">
                next
            </span>
            <span className="bootstarp home-skill">
                bootstarp
            </span>
            <span className="talwind home-skill">
               talwind
            </span>
            <span className="mui home-skill">
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

        <section className='home__algorithm'>
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