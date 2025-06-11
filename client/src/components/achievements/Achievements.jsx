import React, { useState, useCallback, useEffect } from 'react'
import './achievements.css'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import newspaper1 from './newspaper1.jpg'
import newspaper2 from './newspaper2.jpg'
import newspaper3 from './newspaper3.jpg'

const Achievements = () => {
  // Your newspaper images from the achievements folder
  const newspaperImages = [
    {
      id: 1,
      src: newspaper1,
      alt: 'Newspaper Feature 1',
      className: 'newspaper__image--1'
    },
    {
      id: 2,
      src: newspaper2,
      alt: 'Newspaper Feature 2',
      className: 'newspaper__image--2'
    },
    {
      id: 3,
      src: newspaper3,
      alt: 'Newspaper Feature 3',
      className: 'newspaper__image--3'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex >= newspaperImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [newspaperImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? newspaperImages.length - 1 : prevIndex - 1
    );
  }, [newspaperImages.length]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextImage();
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [nextImage, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play on mouse leave
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Manual navigation handlers that pause auto-play temporarily
  const handleNextClick = () => {
    setIsAutoPlaying(false);
    nextImage();
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrevClick = () => {
    setIsAutoPlaying(false);
    prevImage();
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id='achievements'>
      <h5>What I Have</h5>
      <h2>Achievements</h2>
      <div className="container achievements__container">
        <div className="achievements__content">
          <div className="achievements__slider">
            <div 
              className="slider__container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="slider__btn slider__btn--prev" onClick={handlePrevClick}>
                <BsChevronLeft />
              </button>
              
              <div className="slider__wrapper">
                <div className="slider__track" style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`
                }}>
                  {newspaperImages.map((image) => (
                    <div key={image.id} className="slider__slide">
                      <div className="newspaper__image-container">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className={`newspaper__image ${image.className}`}
                        />
                        <div className="newspaper__caption">
                          <p>{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="slider__btn slider__btn--next" onClick={handleNextClick}>
                <BsChevronRight />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="slider__dots">
              {newspaperImages.map((_, index) => (
                <button
                  key={index}
                  className={`slider__dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
          
          <p>
            Throughout my academic journey, I have consistently strived for excellence and have been recognized for my dedication and hard work. My achievements reflect not only my technical abilities but also my commitment to continuous learning and innovation. From academic honors to competitive programming success, each milestone has contributed to my growth as a software engineer and prepared me for the challenges ahead.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Achievements