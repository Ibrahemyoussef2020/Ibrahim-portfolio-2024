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
        link,
        story
    } = props;

    const [showStory,setShowStory] = useState(false);
    const { ref:challangesRef, inView:isChallangesVisible} = useInView({triggerOnce:true}); 

  return (
    <article className={`solution ${showStory ? 'show-story' : ''}`}>
        <div className={`hero ${customClass} flex-center`}>

            <a 
                href={link}
                target='_blank'
                rel="noreferrer"
                className="visit-web flex-center full-size">

            <i className="fa-solid fa-paperclip"></i>

            </a>

        <h3 ref={challangesRef} className={`main-skill obs trans-left ${isChallangesVisible ? 'back-to-place' : ''}`}>
            {skill}    
        </h3>
        </div>
        <h4 className='sub-skill row'>{language}</h4>
        <p className="level row">{level}</p>
        <p className="solution__count row">Solved {solved} problems</p>
        <button onClick={_=>setShowStory(!showStory)} className="solution__count row">Show Course story</button>

        <div className="story">
            <p>{story}</p>
        </div>

        <div className="footer center-between">
        <span className='web-name'>{site.slice(0,4)}<span className='special'>{site.slice(4)}</span></span>
        <span className='date'>{date}</span>
        </div>
     </article>
  )
}

export default ChallengeCard