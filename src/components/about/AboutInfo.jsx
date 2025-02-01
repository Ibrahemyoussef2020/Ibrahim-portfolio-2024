import React from 'react'
import NextSection from '../general/NextSection'
import SocialBar from '../general/SocialBar'
import { useInView } from 'react-intersection-observer';

const AboutInfo = () => {

    const { ref:aboutRef, inView:isAboutVisible} = useInView({triggerOnce:true});

  return (
    <section className='about__intro'>
        <div className="container">
            <div className="wrapper flex-wrap">           
                <div ref={aboutRef} className={`about__img obs trans trans-right ${isAboutVisible ? 'back-to-place' : ''}`}>
                    <img src="images/ibrahim-about.webp" alt="" />
                </div>
                <div ref={aboutRef} className={`about_content flex-1  obs trans trans-left ${isAboutVisible ? 'back-to-place' : ''}`}>
                    <h2> About <span className='spec'>ME</span> </h2>
                    <p>
                    <span className='upper'>I'M </span> a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                    </p>
                    <p>
                        I have learned some code startegy as<span>design pattern</span>, <span>solid prinsiples</span> and many roles of <span>clean code</span> and I have compeleted several projects with these roles you can look at the last projects code on my <a target='_blank' rel="noreferrer"  href='https://github.com/Ibrahemyoussef2020'>Github</a> in 2024 
                    </p>

                    <ul className='list flex-wrap gap-1'>
                        <li><span>Ibrahim Youssef</span></li>
                        <li><span>+201147359396</span></li>
                        <li><span>ibrahimyoussef95.12</span></li>
                        <li><span>Egypt , Cairo</span></li>
                        <li>
                            <span>Alazher , Education , 
                            <span className="spec"> Technology</span></span>
                        </li>
                    </ul>

                    <SocialBar />

                    <div className='btns'>
                    <a className="main-btn cv" href='/cv/Ibrahim Youssef.pdf' download>
                        <span>download cv</span> <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                    <NextSection link='about__skills' />
                    </div>

                    <a className="main-btn online-cv" target='_blank' href='https://docs.google.com/document/d/1OpTx2rHFgIsdzpyAOVOzCVN45Zo-MEFf/edit?usp=sharing&ouid=111062119869333576433&rtpof=true&sd=true'>
                        <span>Online CV</span> <i className="fa-solid fa-angles-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutInfo