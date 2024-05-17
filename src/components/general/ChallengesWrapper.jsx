import React from 'react'
import ChallengeCard from './ChallengeCard'
import { challengesData } from '../../data/challengesData'

const ChallengesWrapper = ({page}) => {
  return (
    <div className="solutions center-around">

    {
        challengesData.map((card,index) => 
        
        <ChallengeCard
        key={index}
        skill={card.skill}
        language={card.language}
        level={card.level}
        solved={card.solved}
        site={card.site}
        date={card.date}
        customClass={card.customClass}
        obsClass={card.obsClass}
        link={card.link}
        story={card.story}
        />)
    }
    </div>
  )
}

export default ChallengesWrapper