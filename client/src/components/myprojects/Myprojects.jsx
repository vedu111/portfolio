import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Question Paper Generator</h3>
            <small className='text-light'>ExpressJs | ReactJs | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/qs_generator" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Indian Food Restaurant</h3>
            <small className='text-light'>EJS | CSS | JS | ExpressJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/indianFood_restaurant" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Online College Magazine</h3>
            <small className='text-light'>Java | Spring Boot | HTML | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/online_college_magazine" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects
