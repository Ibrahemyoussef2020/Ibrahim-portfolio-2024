import React from 'react'
import { ChallengeCard, Footer } from '../components'
import {challengesData} from '../data/challengesData'


const Challenges = () => {
  return (
    <div className="solutions">
      <div>
        <h1 className="logo page-heading">
          MY <span className="spiceal"> CHALLENGES</span>
        </h1>
        <p className="second-title">There are some of challenges that I can link it</p>
        <p className="page__story">
          this page is for <span>certifications</span> I took and  code challengs I walk  as <span>algorithm</span> - <span>data structrue</span> - <span>Problem solving</span>  I crossed it in any skill that I learned it and I can link it 
        </p>
      </div>
      <div className="container">
        <div className="cards flex-center">
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
            link={card.link}
            story={card.story}
          />)
        }
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Challenges