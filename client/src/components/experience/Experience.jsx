import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My SkillSet</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {[
              { tech: 'HTML', level: 'Experienced' },
              { tech: 'CSS', level: 'Intermediate' },
              { tech: 'JavaScript', level: 'Intermediate' },
              { tech: 'Bootstrap', level: 'Intermediate' },
              { tech: 'Tailwind CSS', level: 'Intermediate' },
              { tech: 'React.js', level: 'Beginner' },
              { tech: 'Next.js', level: 'Beginner' }
            ].map(({ tech, level }) => (
              <article className='experience__details' key={tech}>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {[
              { tech: 'Node.js', level: 'Experienced' },
              { tech: 'Express.js', level: 'Experienced' },
              { tech: 'Python', level: 'Intermediate' },
              { tech: 'Java', level: 'Intermediate' },
              { tech: 'MySQL', level: 'Intermediate' },
              { tech: 'PostgreSQL', level: 'Intermediate' },
              { tech: 'MongoDB', level: 'Experienced' },
              { tech: 'Firebase', level: 'Beginner' }
            ].map(({ tech, level }) => (
              <article className='experience__details' key={tech}>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
