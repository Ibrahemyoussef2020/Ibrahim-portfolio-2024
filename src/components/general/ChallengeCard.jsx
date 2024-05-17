import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const ChallengeCard = (props) => {
    const {
        skill,
        language,
        level,
        solved,
        site,
        date,
        customClass,
        obsClass,
        link,
        story
    } = props;

    console.log(obsClass);

    const [showStory,setShowStory] = useState(false);
    const { ref:challangesRef, inView:isChallangesVisible} = useInView({triggerOnce:true}); 

  return (
    <article className={`solution obs ${customClass} ${showStory ? 'show-story' : ''} ${isChallangesVisible ? obsClass : ''} }`}>
        <a target='_blank' rel="noopener"  href={link}>
        <div ref={challangesRef} className={`solution__hero obs`} style={{backgroundColor:'#000'}}>
            
            <div className="site-logo flex-center">
                <img src={`/images/certifications/${site}.png`} alt=""  />
            </div>
            

            <h4>{site}</h4>
            <div className="images">
                <div className="back">
                    <img src={`images/certifications/${skill}-back.webp`} alt="" />
                </div>
                <div className="front">
                    <img src={`images/certifications/${skill}-front.webp`} alt="" />
                </div> 
            </div>                    
        </div>
        </a>

        <div className="solution__info center-between">
            <h3>{skill} in {language}</h3>
        </div>

        <div className="solution__footer center-between">
            <div className="previw flex-center">
                <a  className="more__list" target='_blank' rel="noopener"  href={link}>
                    Visit
                </a>
            </div>  
            <div className="date flex-center">
                <span>{date}</span>
            </div>                 
        </div>

     </article>
  )
}

export default ChallengeCard