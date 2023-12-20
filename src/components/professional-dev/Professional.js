import React, { useEffect, useRef } from 'react'
import "./Professional.css"
import Footer from "../footer/Footer"
import CardFlip2 from './../card-temp/Card2';
import CourseContent from './ProfessionalData';

function Professional() {

  const cardsRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100; // Adjust the offset as needed

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className='heading-proff'>Professional Development Courses</h1>
      <hr className='style14' />
      <div className='professional-card'>
        {CourseContent.map((item, index) => (
        <div className={`card-container ${item.id % 2 === 0 ? 'RtoL-card-2' : ''}`}> 
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`animate-card ${item.id % 2 === 0 ? '' : ''} `}
          >
          <CardFlip2
            num={item.id}
            course_name={item.course_name} 
            course_no={item.course_no} 
            course_desc={item.desc} 
            course_link={item.link}
          />
          </div>
        </div>
        ))}


        <div className="footer-pers">
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default Professional