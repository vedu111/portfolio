import React from 'react';
import './myprojects.css';
import IMG1 from '../../assets/img1.png';
import IMG2 from '../../assets/img2.png';
import IMG3 from '../../assets/img3.png';
import IMG4 from '../../assets/img4.png';
import IMG5 from '../../assets/img5.png';

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="Question Paper Generator" />
            </div>
            <h3>Question Paper Generator</h3>
            <small className='text-light'>ExpressJs | ReactJs | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/qs_generator" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="Water Price Management" />
            </div>
            <h3>Water Price Management</h3>
            <small className='text-light'>MongoDB | Express.js | React.js | Node.js | ML</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/WaterManagement" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="Pawadopt" />
            </div>
            <h3>Pawadopt</h3>
            <small className='text-light'>MERN Stack | Socket</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/pAwDOPT" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="Indian Food Restaurant" />
            </div>
            <h3>Masala Mantra</h3>
            <small className='text-light'>EJS | CSS | JS | ExpressJs | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/indianFood_restaurant" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="Online College Magazine" />
            </div>
            <h3>Online College Magazine</h3>
            <small className='text-light'>Java | Spring Boot | HTML | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/vedu111/online_college_magazine" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
