import React, { useState } from 'react'

const Home = () => {
  const [projectFilter,setProjectFilter] = useState('all');

  return (
    <main className='home'>
      <div className="container">
        <section className='home__top'>
            <div className="home__img">
                <img src="images/ibrahem.webp" alt="" />
            </div>
            <div className="home__intro">
                <h2 className='home__name'>
                <i className="fa-solid fa-mug-saucer"></i>
                <span>Ibrahim youssef</span>
                </h2>
                <h1 className="home__job">
                Frontend developer
                <br/>
                <span>( React / Next ... developer )</span>
                </h1>
                <p className='home-__desc'>
                I'm starving to build amazing and beautiful web applications with a clean code via using solid principles and design pattern and most of clean code's roles
                </p>
            </div>
            
        </section>

        <section className='home__skills'>
            <span className="html home-skill">
                html
            </span>
            <span className="css home-skill">
                css
            </span>
            <span className="sass home-skill">
                sass
            </span>
            <span className="js home-skill">
                javascript
            </span>
            <span className="ts home-skill">
                typescript
            </span>
            <span className="recat home-skill">
                recat
            </span>
            <span className="redux home-skill">
                redux
            </span>
            <span className="next home-skill">
                next
            </span>
            <span className="bootstarp home-skill">
                bootstarp
            </span>
            <span className="talwind home-skill">
               talwind
            </span>
            <span className="mui home-skill">
               material Ui
            </span>
        </section>

        <hr  className='main-hr'/>

        <section className='home__projects'>
            <div className="header center-between">
                <h2 className="left">My Projects</h2>
                
                <div className='filters'>
                    <button className={projectFilter === 'all' ? 'selected' : ''} onClick={_=>setProjectFilter('all')}>All</button>
                    <button className={projectFilter === 'next' ? 'selected' : ''} onClick={_=>setProjectFilter('next')}>Next</button>
                    <button className={projectFilter === 'react' ? 'selected' : ''} onClick={_=>setProjectFilter('react')}>React</button>
                    <button className={projectFilter === 'html' ? 'selected' : ''} onClick={_=>setProjectFilter('html')}>Html</button>
                </div>

            </div>

            <div className="projects">
                <article className='project'>
                    <a target='_blank' href="google.com">
                    <div className="project__hero">
                        <div className="images">
                            <div className="back">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div>
                            <div className="front">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div> 
                        </div>                    
                    </div>
                    </a>

                    <div className="project__info center-between">
                        <h3>Amazon clone</h3>
                        <p>02-04-2024</p>
                    </div>

                    <div className="project__footer center-between">
                        <div className="skills">
                            <span className='spa-skill'>next</span>
                            <span className='type-skill'>react</span>
                            <span className='style-skill'>sass</span>
                            <span className='store-skill'>redux</span>  
                        </div>
                        <div className="more">
                            <button className="more__list" onClick={_=> console.log('clickable')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div className='more__options'>
                                    <a href='#'>
                                        preview
                                    </a>
                                    <a href='#'>
                                        code
                                    </a>
                            </div>
                        </div>                   
                    </div>

                </article>
                <article className='project'>
                    <a target='_blank' href="google.com">
                    <div className="project__hero">
                        <div className="images">
                            <div className="back">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div>
                            <div className="front">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div> 
                        </div>                    
                    </div>
                    </a>

                    <div className="project__info center-between">
                        <h3>Amazon clone</h3>
                        <p>02-04-2024</p>
                    </div>

                    <div className="project__footer center-between">
                        <div className="skills">
                            <span className='spa-skill'>next</span>
                            <span className='type-skill'>react</span>
                            <span className='style-skill'>sass</span>
                            <span className='store-skill'>redux</span>  
                        </div>
                        <div className="more">
                            <button className="more__list" onClick={_=> console.log('clickable')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div className='more__options'>
                                    <a href='#'>
                                        preview
                                    </a>
                                    <a href='#'>
                                        code
                                    </a>
                            </div>
                        </div>                   
                    </div>

                </article>
                <article className='project'>
                    <a target='_blank' href="google.com">
                    <div className="project__hero">
                        <div className="images">
                            <div className="back">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div>
                            <div className="front">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div> 
                        </div>                    
                    </div>
                    </a>

                    <div className="project__info center-between">
                        <h3>Amazon clone</h3>
                        <p>02-04-2024</p>
                    </div>

                    <div className="project__footer center-between">
                        <div className="skills">
                            <span className='spa-skill'>next</span>
                            <span className='type-skill'>react</span>
                            <span className='style-skill'>sass</span>
                            <span className='store-skill'>redux</span>  
                        </div>
                        <div className="more">
                            <button className="more__list" onClick={_=> console.log('clickable')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div className='more__options'>
                                    <a href='#'>
                                        preview
                                    </a>
                                    <a href='#'>
                                        code
                                    </a>
                            </div>
                        </div>                   
                    </div>

                </article>
                <article className='project'>
                    <a target='_blank' href="google.com">
                    <div className="project__hero">
                        <div className="images">
                            <div className="back">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div>
                            <div className="front">
                                <img src="images/projects/amazon-clone-back.webp" alt="" />
                            </div> 
                        </div>                    
                    </div>
                    </a>

                    <div className="project__info center-between">
                        <h3>Amazon clone</h3>
                        <p>02-04-2024</p>
                    </div>

                    <div className="project__footer center-between">
                        <div className="skills">
                            <span className='spa-skill'>next</span>
                            <span className='type-skill'>react</span>
                            <span className='style-skill'>sass</span>
                            <span className='store-skill'>redux</span>  
                        </div>
                        <div className="more">
                            <button className="more__list" onClick={_=> console.log('clickable')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div className='more__options'>
                                    <a href='#'>
                                        preview
                                    </a>
                                    <a href='#'>
                                        code
                                    </a>
                            </div>
                        </div>                   
                    </div>

                </article>
            </div>

            <div className="more-items">
                <a href="/projects">More Projects</a>
            </div>

        </section>

        <section className='home__algorithm'>
            <div className="header center-between">
                <h2>Algorithm</h2>
                <div>
                    <a href="/">More details</a>
                </div>
            </div>
            <div className="solutions">
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            <a href="#">prpblem solv 1</a>
            </div>
        </section>

        <section className='home__contact'>
        <a target="_blank" href="https://github.com/Ibrahemyoussef2020">
            <i className="fa-brands fa-github"></i>
        </a>
        <a target="_blank" href="tel:01147359396">
            <i className="fa-brands fa-github"></i>
        </a>
        <a target="_blank" href="https://github.com/Ibrahemyoussef2020">
            <i className="fa-brands fa-github"></i>
        </a>
        </section>

      </div>
    </main>
  )
}

export default Home