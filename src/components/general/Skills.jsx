import React, { useContext } from 'react'
import { useInView } from 'react-intersection-observer';
import NextSection from './NextSection';
import { Link, useNavigate } from 'react-router-dom';
import { NanigateContext, NavigatorContext } from '../../App';

const Skills = ({page}) => {
    const { ref:skillsRef, inView:isSkillsVisible} = useInView({triggerOnce:true});  
    const {pageClass,setPageClass} = useContext(NanigateContext);
    const {isVisibleNav , setIsVisibleNav} = useContext(NavigatorContext);


    const navigate = useNavigate(); 

    const moveToRoutFromRouts = (e,page)=>{
        e.preventDefault();
        setIsVisibleNav(false);
        setPageClass('page-anim');
        navigate(`${page}`)
    
        setTimeout(()=>{
            setPageClass('');
        },1000)
    }

  return (
    <>
        <div className='skills-wrapper'>
            <span ref={skillsRef} className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <div><img src="images/skills/html.svg" alt="" /></div>
                html
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/css.svg" alt="" /> 
                css
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/sass.svg" alt="" />
                sass
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/js.svg" alt="" />
                javascript
            </span>
            <span ref={skillsRef} className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/ts.svg" alt="" />
                typescript
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/react.png" alt="" />
                react
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/redux.svg" alt="" />
                redux
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/next.svg" alt="" />
                next
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/bootstrap.svg" alt="" />
                bootstarp
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/tailwind.svg" alt="" />
                talwind
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/material-ui.svg" alt="" />
                material Ui
            </span>
            <span ref={skillsRef}  className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
                <img src="images/skills/jq.webp" alt="" />
                JQuery
            </span>
        </div>

        <>
        {
            page === 'home' ?

            <div className='btns more-items about'>
                <Link to='/about' className="main-btn" onClick={e => moveToRoutFromRouts(e, 'about')}>
                    <span>More About Me </span> <i className="fa-solid fa-angles-right"></i>
                </Link>
                <NextSection link='home__projects' />
            </div>: null
        }
        </>
    </>
  )
}

export default Skills