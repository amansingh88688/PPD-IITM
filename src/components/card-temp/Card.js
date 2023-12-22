import React from 'react'
import './Card.css';

function Card({num, className, course_name, course_no, course_desc, course_link}) {
    console.log(num);
  return (
    <div className={`card-temp ${className || ''}`}>
        <div className="sq-small"></div>
        <div className="sq-med"></div>
        <div className="sq-lar"></div>
          <div className={num%2 === 0 ? 'rectangle-1 mirror-text':'rectangle-1'}>
              <a href={course_link} target="_blank" rel="noopener noreferrer" className='course-desc'>{course_desc} <span className='view-more'>view more...</span></a>
          </div>
        <div className={num%2 === 0 ? 'rectangle-2 mirror-text':'rectangle-2'}>
            <div className='course-name'>{course_name}</div>
            <div className='course-name course-no'>{course_no}</div>
        </div>
    </div>
  )
}

export default Card

