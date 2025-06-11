import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My SkillSet</h2>

      <div className='container experience__container'>
        <div className='experience__languages'>
          <h3>Languages</h3>
          <div className='experience__content'>
            {[
              { tech: 'JavaScript', level: 'Experienced' },
              { tech: 'TypeScript', level: 'Intermediate' },
              { tech: 'Python', level: 'Experienced' },
              { tech: 'Java', level: 'Intermediate' },
              { tech: 'C', level: 'Intermediate' },
              { tech: 'C++', level: 'Intermediate' },
              { tech: 'SQL', level: 'Experienced' },
              { tech: 'HTML/CSS', level: 'Experienced' }
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

        <div className='experience__frameworks'>
          <h3>Frameworks & Libraries</h3>
          <div className='experience__content'>
            {[
              { tech: 'React.js', level: 'Intermediate' },
              { tech: 'Node.js', level: 'Experienced' },
              { tech: 'Express.js', level: 'Experienced' },
              { tech: 'Next.js', level: 'Intermediate' },
              { tech: 'Tailwind CSS', level: 'Experienced' },
              { tech: 'Bootstrap', level: 'Experienced' },
              { tech: 'RESTful APIs', level: 'Experienced' },
              { tech: 'Redux', level: 'Intermediate' }
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

        <div className='experience__databases'>
          <h3>Databases & Cloud</h3>
          <div className='experience__content'>
            {[
              { tech: 'MongoDB', level: 'Experienced' },
              { tech: 'MySQL', level: 'Experienced' },
              { tech: 'PostgreSQL', level: 'Intermediate' },
              { tech: 'Firebase', level: 'Intermediate' },
              { tech: 'AWS (EC2, S3, Lambda, RDS)', level: 'Intermediate' },
              { tech: 'NoSQL', level: 'Experienced' }
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

        <div className='experience__devops'>
          <h3>DevOps & Tools</h3>
          <div className='experience__content'>
            {[
              { tech: 'Git', level: 'Experienced' },
              { tech: 'GitHub', level: 'Experienced' },
              { tech: 'Docker', level: 'Intermediate' },
              { tech: 'Kubernetes', level: 'Beginner' },
              { tech: 'CI/CD', level: 'Intermediate' },
              { tech: 'Postman', level: 'Experienced' },
              { tech: 'VS Code', level: 'Experienced' },
              { tech: 'Agile Methodologies', level: 'Intermediate' }
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