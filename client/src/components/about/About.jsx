import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BE Computer Engineering <br /><i>University of Mumbai.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>9.65/10</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Software Development</li>
                      <li>Algorithms and Data Structures</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Software Engineering Undergradute</b> at the University of Mumbai with a passion for technology and innovation. I thrive on solving complex problems and am always eager to learn and grow. My strong academic foundation, combined with hands-on experience in diverse programming languages and technologies, equips me to contribute effectively to real-world projects. I am highly motivated, adaptable, and excited to collaborate with industry professionals to develop impactful solutions and gain valuable experience through a challenging opportunity.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About