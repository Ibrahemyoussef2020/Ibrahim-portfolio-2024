import React from 'react'
import { useInView } from 'react-intersection-observer';

const Skill = ({title,img}) => {

  const { ref:skillsRef, inView:isSkillsVisible} = useInView({triggerOnce:true , threshold:.1});  

  return (
    <div ref={skillsRef} className={`home__skill obs scalable ${isSkillsVisible ? 'scale' : ''}`}>
        <div><img src={`images/skills/${img}`} alt="" /></div>
        {title}
    </div>
  )
}

export default Skill