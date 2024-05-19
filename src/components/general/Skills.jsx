import React, { useContext } from 'react'
import NextSection from './NextSection';
import { Link, useNavigate } from 'react-router-dom';
import { NanigateContext, NavigatorContext } from '../../App';
import {skillsData} from '../../data/skillsData';
import Skill from './Skill';

const Skills = ({page}) => {
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
            {
                skillsData.map(skill => (
                    <Skill title={skill.title} img={skill.img} key={skill.title} />
                ))
            }
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