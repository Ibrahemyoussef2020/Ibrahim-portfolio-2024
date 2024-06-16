import React from 'react'
import { useInView } from 'react-intersection-observer';
import NextSection from '../general/NextSection';
import SocialBar from '../general/SocialBar';

const HomeIntro = () => {

    const { ref:topRef, inView:isTopVisible} = useInView({triggerOnce:true});

  return (
    <section id='home__top' className='home__top' ref={topRef}>
            <div className={`home__img obs trans-bottom ${isTopVisible ? 'back-to-place' : '' }`}>
                <img src="images/ibrahim-home.webp" alt="" />
            </div>

            <div className={`home__intro obs trans-right ${isTopVisible ? 'back-to-place' : '' }`}>
                <h2 className='home__name'>
                <span>I'M</span>
                <span className='special'>Ibrahim Youssef</span>
                </h2>
                <h1 className="home__job">
                <span>A </span>
                <span> F</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>n</span>
                <span>d </span>

                <span> D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>     
                <br/>
                </h1>

                <p className='home-__desc'>
                <span className='upper'>I'M</span> a graduate of the College of Education, Department of Educational <span className='spec'>Technology , </span>
                    <span className='upper'>I'M</span> starving to build amazing and beautiful web applications with a clean code via using solid principles and design pattern and most of clean code's roles
                </p>

                <SocialBar />

                <div className='btns'>
                    <a className="main-btn cv" href='/cv/Ibrahim Youssef.pdf' download>
                        <span>download cv</span> <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>

                    <NextSection link='home__skills' />
                </div>

            </div>
        </section>
  )
}

export default HomeIntro