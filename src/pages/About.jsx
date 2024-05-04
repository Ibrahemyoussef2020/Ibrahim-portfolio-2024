import React from 'react'
import Footer from '../components/general/Footer'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref:aboutRef, inView:isAboutVisible} = useInView({
    triggerOnce:true
  });

  return (
    <div className='about'>
      <div className="container">
        <div>
          <h1 className="logo page-heading">
            ABOUT <span className="spiceal">ME</span>
          </h1>
          <p className="second-title">love  challages simple clean creative code</p>
        </div>

        <p className="page__story">
            I have learned some code startegy as<span>design pattern</span>, <span>solid prinsiples</span> and many roles of <span>clean code</span> and I have compeleted several projects with these roles you can look at the last projects code on my <a target='_blank' rel="noreferrer"  href='https://github.com/Ibrahemyoussef2020'>Github</a> in 2024 
        </p>
       
       
        <section className="picture-info">
            <div ref={aboutRef} className={`picture obs trans-left ${isAboutVisible ? 'back-to-place' : '' }`}>
              <img src="images/ibrahem.webp" alt="" />
            </div>
            <ul ref={aboutRef} className={`info obs trans-right ${isAboutVisible ? 'back-to-place' : '' }`}>
              <li>
                <span>Name</span>  
                <span>Ibrahim Youssef</span>
              </li>
              <li>
                <span>Phone</span>
                 <span>+201147359396</span>
              </li>
              <li>
                <span>Email</span>
                 <span>ibrahimyoussef95.12@gmail</span>
              </li>
              <li>
                <span>Country</span>
                <span>Egypt</span>
              </li>
              <li>
                <span>Education</span>
                <span>Alazher , Education , 
                <span className="spiceal">Technology</span></span>
              </li>
              <li>
                <span>Langages</span>
                 <span>fluent Arabic , good English</span>
              </li>
            </ul>
        </section>

        <section className="about__cv">
            <a download href="images/Ibrahim Youssef.pdf">Download CV</a>
            <a href="https://docs.google.com/document/d/1lEcMbfZj4o7YWaR6tyWj0As98YwJOQKxHxLDj3VIiU8/edit">Visit onLine CV</a>
        </section>

        <section className='about__skills'>
          <h2 className='page-heading'>MAIN <span className="spiceal">SKILLS</span></h2>
          <div className='skills'>
              <span className="html about-skill">
                  html
              </span>
              <span className="css about-skill">
                  css
              </span>
              <span className="sass about-skill">
                  sass
              </span>
              <span className="js about-skill">
                  javascript
              </span>
              <span className="ts about-skill">
                  typescript
              </span>
              <span className="recat about-skill">
                  recat
              </span>
              <span className="redux about-skill">
                  redux
              </span>
              <span className="next about-skill">
                  next
              </span>
              <span className="bootstarp about-skill">
                  bootstarp
              </span>
              <span className="talwind about-skill">
                talwind
              </span>
              <span className="mui about-skill">
                material Ui
              </span>
          </div>
        </section>

        <Footer />
      </div>        
    </div>
  )
}

export default About